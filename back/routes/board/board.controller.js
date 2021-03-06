const pool = require('../../config/dbconnection');
const jwtId = require('../../jwtId')
const { yymmdd, clearDate } = require('../util')



const createArticle = async (req, res) => {
    const { subject, content } = req.body;
    const AccessToken = req.cookies.AccessToken;
    const client = jwtId(AccessToken)
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `INSERT INTO board (subject,content,writer) values(?,?,?)`
            const params = [subject, content, client];
            const [rows] = await connection.execute(sql, params)

            res.json(rows);
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            res.json(error)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        res.json(error)
    } finally {
        connection.release();
    }
}



const showList = async (req, res) => {
    let count = 0;
    const showHead = `SELECT user.nickname as nickname, board.subject,board.board_id,board.createdAt,board.updated,board.hit,board.liked,board.disliked,board.del,board.comment_cnt
                    FROM board AS board
                    INNER JOIN (SELECT user_id, nickname FROM user) AS user 
                    ON board.writer = user.user_id
                    `

    const pageblockHead = `SELECT COUNT(board_id) AS count FROM board INNER JOIN (SELECT user_id, nickname FROM user) AS user ON board.writer = user.user_id`
    const pageblockSql = searchVerse(pageblockHead, req.query) + ';';

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const params = [];
            const [result] = await connection.execute(pageblockSql, params)
            count = result[0].count
            if (count != 0) {

                const { page, rows, pageblock, totalPage } = makePageBlock(count, req.query);
                const searchSql = searchVerse(showHead, req.query) + ` ORDER BY board_id DESC LIMIT ?,?;`
                const pageParams = [(page - 1) * rows, rows]
                const [results] = await connection.execute(searchSql, pageParams)

                results.forEach(ele => {
                    if (ele.del === 1) {
                        ele.subject = '????????? ??????????????????.'
                    }
                    ele.createdAt = clearDate(ele.createdAt)
                });
                const search = req.query.search != undefined ? req.query.search : null;
                const keyword = req.query.keyword != undefined ? req.query.keyword : null;
                const data = {
                    type: req.query.type,
                    success: true,
                    page: page,
                    rows: rows,
                    search: search,
                    keyword: keyword,
                    pageblock: pageblock,
                    totalPage: totalPage,
                    results: results,
                }
                res.json(data);
            } else {
                const data = {
                    success: false,
                    error: '?????? ????????? ???????????? ???????????? ????????????.'
                }
                res.json(data);
            }
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            const data = {
                success: false,
                error: error,
            }
            res.json(data)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        const data = {
            success: false,
            error: error,
        }
        res.json(data)
    } finally {
        connection.release();
    }
}









const showArticle = async (req, res) => {
    const board_id = req.params.board_id;
    const AccessToken = req.cookies.AccessToken;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const now = yymmdd(new Date());
    let client = 0;
    if (AccessToken !== undefined)
        client = jwtId(AccessToken);
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {

            //////=============================== hit update sql =====================================================///
            // ???????????? ip?????? ????????? ???????????? ????????? ????????????
            // ???????????? ???????????? ?????? ????????? ????????? ?????? ?????????? ==> ?????? ?????? ????????? ?????? ????????? ????????? ?????? ?????? ????????? ??? ?????? ???
            // ????????? ????????? ?????????. ????????? ????????? ???????????????.
            // ??????????????? ????????? ??? ?????? ?????? ????????? ????????? ?????? ??????..
            const hitSearchSql = `SELECT  hit_id,date from hit where board_id=? AND ip=?`
            const hitParams = [board_id, ip];
            const [hitInfo] = await connection.execute(hitSearchSql, hitParams)
            let updatedAt;
            let hitID;
            if (hitInfo[0] !== undefined) {
                updatedAt = yymmdd(hitInfo[0].date);
                hitID = hitInfo[0].hit_id;
            }
            if (hitInfo[0] === undefined || updatedAt !== now) {//upsert ?????? ?????? ??? ????????????( primary key ??? ??????????????????????????)
                if (hitInfo[0] === undefined) {
                    const hitInsertSql = `INSERT INTO hit (board_id,ip,date) values(?,?,?);`
                    const hitInsertParams = [board_id, ip, now];
                    const [result] = await connection.execute(hitInsertSql, hitInsertParams)
                } else {

                    const hitUpdateSql = `UPDATE hit SET date=? WHERE hit_id=?;`
                    const hitUpdateParams = [now, hitID];
                    const [result] = await connection.execute(hitUpdateSql, hitUpdateParams)
                }
                const boardHitUpdateSql = `UPDATE board SET hit=hit+1 WHERE board_id=?;` //// ????????? ???????????? ??????.
                const boardHitParams = [board_id];
                const [hit] = await connection.execute(boardHitUpdateSql, boardHitParams)
            }
            //////=============================== hit update sql =====================================================///

            /////================================ comment sql  start =======================================================///
            const commentSql = `SELECT * 
                  FROM comment as comment
                  LEFT JOIN (SELECT user_id,nickname as writer_nick, image FROM user) as writer ON writer.user_id = comment.writer
                  LEFT JOIN (SELECT user_id as target_id,nickname as target_nick FROM user) as target ON target.target_id = comment.target
                  LEFT JOIN (SELECT * FROM clike WHERE user_id = ?) as clike ON comment.comment_id = clike.target_id 
                  WHERE board_id = ? AND root = 0 ORDER BY comment.liked DESC LIMIT 0,10 ;`
            const commentparams = [client, board_id];
            const [comment] = await connection.execute(commentSql, commentparams)
            comment.forEach(v => {
                v.createdAt = clearDate(v.createdAt);
                v.replys = [];
                if (v.writer == client) {
                    v.isWriter = true;
                } else {
                    v.isWriter = false;
                }
                if (v.del == 1) {
                    v.content = "????????? ???????????????."
                    v.isWriter = false
                    v.isLike = null
                }
            })
            

            /////================================ comment sql end=======================================================///

            /////=================================article sql start======================================///
            const sql = `SELECT board.writer, user.nickname,board.board_id as board_id,board.subject,board.content,board.createdAt,board.updated,board.hit,board.liked,board.disliked,board.del, isLike,comment_cnt
            FROM board 
            LEFT JOIN (SELECT user_id, nickname FROM user) AS user  ON board.writer = user.user_id
            LEFT JOIN (SELECT * FROM blike WHERE user_id = ?) as blike ON board.board_id = blike.target_id 
            WHERE board.board_id=?`

            const params = [client, board_id];
            const [result] = await connection.execute(sql, params)
            
            /////=================================article sql end======================================///

            let data = { ...result[0] }

            //????????? ???????????? ????????? ????????? ?????????.
            if (data.del === 1) {
                data.subject = '????????? ??????????????????.'
                data.content = '????????? ??????????????????.'
            }

            //?????? ?????? ????????????  isWriter ??? true ?????? ???????????? ??????????????? ?????? ?????? ????????? ???????????? ?????? ??????.
            if (!data.hasOwnProperty('isLike')) data.isLike = null;
            if (data.writer == client) {
                data.isWriter = true;
            } else {
                data.isWriter = false;
            }

            data.createdAt = clearDate(data.createdAt);
            data.success = true;
            data.comments = comment;
            data.comment_type='like'
            res.json(data);
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            const data = {
                success: false,
                error: error
            }
            res.json(data)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        const data = {
            success: false,
            error: error
        }
        res.json(data)
    } finally {
        connection.release();
    }
};


const updateCheck = async (req, res) => {
    const { board_id } = req.params;
    const AccessToken = req.cookies.AccessToken;
    if (AccessToken === undefined) {
        const data = {
            success: false,
            error: '??????????????? ????????????'
        }
        res.json(data)
    } else {
        const client = jwtId(AccessToken);

        let connection;
        try {
            connection = await pool.getConnection(async conn => conn);
            try {
                const sql = `SELECT writer,content,subject,del  FROM board WHERE board_id=?`
                const params = [board_id];
                const [result] = await connection.execute(sql, params)
                if (result[0].writer != client) {//????????? ????????? ????????? delete????????? ????????? ???,
                    const data = {
                        success: false,
                        error: "?????? ????????? ????????????."
                    }
                    res.json(data)
                } else {
                    if (result[0].del == 1) {
                        const data = {
                            success: false,
                            error: "????????? ??????????????????."
                        }
                        res.json(data)
                    } else {
                        const data = {
                            success: true,
                            content: result[0].content,
                            subject: result[0].subject,
                            writer: result[0].writer,
                        }
                        res.json(data);
                    }


                }
            } catch (error) {
                console.log('Query Error');
                console.log(error)
                const data = {
                    success: false,
                    error: error
                }
                res.json(data)
            }
        } catch (error) {
            console.log('DB Error')
            console.log(error)
            const data = {
                success: false,
                error: error
            }
            res.json(data)
        } finally {
            connection.release();
        }


    }





}


const updateArticle = async (req, res) => {
    const { subject, content } = req.body;
    const { board_id, writer } = req.params;
    const AccessToken = req.cookies.AccessToken;
    const client = jwtId(AccessToken);

    if (writer != client) {//????????? ????????? ????????? delete????????? ????????? ???,
        const data = {
            success: false,
            error: "?????? ????????? ????????????."
        }
        res.json(data)
    } else {
        let connection;
        try {
            connection = await pool.getConnection(async conn => conn);
            try {
                const sql = `UPDATE board SET subject=? ,content=? ,updated=? WHERE board_id=?`
                const params = [subject, content, true, board_id];
                const [rows] = await connection.execute(sql, params)
                const data = {
                    success: true,
                }
                res.json(data);
            } catch (error) {
                console.log('Query Error');
                console.log(error)
                const data = {
                    success: false,
                    error: error
                }
                res.json(data)
            }
        } catch (error) {
            console.log('DB Error')
            console.log(error)
            const data = {
                success: false,
                error: error
            }
            res.json(data)
        } finally {
            connection.release();
        }

    }


}


const deleteArticle = async (req, res) => {
    const { board_id, writer } = req.params;
    const AccessToken = req.cookies.AccessToken;
    const client = jwtId(AccessToken);

    if (writer != client) {//????????? ????????? ????????? delete????????? ????????? ???,
        const data = {
            success: false,
            error: "?????? ????????? ????????????."
        }
        res.json(data)
    } else {
        let connection;
        try {
            connection = await pool.getConnection(async conn => conn);
            try {
                const sql = `UPDATE board SET del=1 WHERE board_id=?`
                const params = [board_id];
                const [rows] = await connection.execute(sql, params)
                //????????? ????????? ??????. ????????? ??? ?????? ????????? ?????????.
                // if(rows.affectedRows===1)
                const data = {
                    success: true,
                    board_id: board_id,
                }
                res.json(data);
            } catch (error) {
                console.log('Query Error');
                console.log(error)
                const data = {
                    success: false,
                    error: error
                }
                res.json(data)
            }
        } catch (error) {
            console.log('DB Error')
            console.log(error)
            const data = {
                success: false,
                error: error
            }
            res.json(data)
        } finally {
            connection.release();
        }

    }
}








module.exports = {
    showList,
    showArticle,
    createArticle,
    updateArticle,
    updateCheck,
    deleteArticle,
}









const searchVerse = (sql, obj) => {
    const { type, search, keyword } = obj;
    let whereVerse = '';

    switch (search) {
        case 'subject':
            whereVerse = ` WHERE subject LIKE '%${keyword}%'`
            break;
        case 'content':
            whereVerse += ` WHERE content LIKE '%${keyword}%'`
            break;
        case 'subject_content':
            whereVerse += ` WHERE (content LIKE '%${keyword}%' or subject LIKE '%${keyword}%')`
            break;
        case 'writer':
            whereVerse += ` WHERE (user.nickname LIKE '%${keyword}%')`
            break;
        default:
            break;
    }
    if (type == "hot") {
        if (search != null) whereVerse += ` AND board.liked > 5`
        else whereVerse += `WHERE board.liked > 5`
    }
    return sql + whereVerse;
}

const makePageBlock = (cnt, obj) => {
    const { rows } = obj;
    let { page } = obj;
    const totalPage = Math.ceil(cnt / rows);
    if (page > totalPage) page = totalPage;
    let block = 10;
    while (page > block) {
        block += 10;
    }
    const pageblock = [];
    for (let i = block - 9; i <= block; i++) {
        pageblock.push(i);
        if (i === totalPage) break;
    }
    return { page: page, rows: rows, pageblock: pageblock, totalPage: totalPage, }
}