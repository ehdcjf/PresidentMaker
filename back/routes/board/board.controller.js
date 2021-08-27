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
    const pageblockSql = searchVerse(pageblockHead, req.query)+';';

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const params = [];
            const [result] = await connection.execute(pageblockSql, params)
            count = result[0].count
            if(count!=0){

                const { page, rows, pageblock, totalPage } = makePageBlock(count, req.query);
                const searchSql = searchVerse(showHead, req.query) + ` ORDER BY board_id DESC LIMIT ?,?;`
                const pageParams = [(page - 1) * rows, rows]
                const [results] = await connection.execute(searchSql, pageParams)
                
                results.forEach(ele => {
                    if (ele.del === 1) {
                        ele.subject = '삭제된 게시글입니다.'
                    }
                    ele.createdAt = clearDate(ele.createdAt)
                });
                const search = req.query.search!=undefined ? req.query.search : null;
                const keyword = req.query.keyword!=undefined ? req.query.keyword : null;
                const data = {
                    type:req.query.type,
                    success: true,
                    page: page,
                    rows:rows,
                    search:search,
                    keyword:keyword,
                    pageblock: pageblock,
                    totalPage: totalPage,
                    results: results,
                }
                res.json(data);
            }else{
                const data = {
                    success:false,
                    error:'검색 결과를 만족하는 게시글이 없습니다.'
                }
                res.json(data);
            }
            } catch (error) {
                console.log('Query Error');
                const data = {
                    success: false,
                    error: error,
                }
            console.log(error)
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
            // 조회수를 ip말고 쿠키로 처리하는 방법도 생각하기
            // 접근했던 게시글에 대한 정보를 쿠키에 담고 있으면? ==> 내가 누른 게시글 색깔 변하게 해주는 것도 쉽게 구현할 수 있을 듯
            // 쿠키에 있으면 보라색. 아니면 검은색 이런식으로.
            // 생각해보니 쿠키에 안 담고 그냥 상태로 담아도 상관 없음..
            const hitSearchSql = `SELECT  hit_id,date from hit where board_id=? AND ip=?`
            const hitParams = [board_id, ip];
            const [hitInfo] = await connection.execute(hitSearchSql, hitParams)
            let updatedAt;
            let hitID;
            if (hitInfo[0] !== undefined) {
                updatedAt = yymmdd(hitInfo[0].date);
                hitID = hitInfo[0].hit_id;
            }
            if (hitInfo[0] === undefined || updatedAt !== now) {//upsert 구문 쓰는 법 알아볼것( primary key 가 하나여야한다는데??)
                if (hitInfo[0] === undefined) {
                    const hitInsertSql = `INSERT INTO hit (board_id,ip,date) values(?,?,?);`
                    const hitInsertParams = [board_id, ip, now];
                    const [result] = await connection.execute(hitInsertSql, hitInsertParams)
                } else {

                    const hitUpdateSql = `UPDATE hit SET date=? WHERE hit_id=?;`
                    const hitUpdateParams = [now, hitID];
                    const [result] = await connection.execute(hitUpdateSql, hitUpdateParams)
                }
                const boardHitUpdateSql = `UPDATE board SET hit=hit+1 WHERE board_id=?;` //// 이부분 트리거로 빼기.
                const boardHitParams = [board_id];
                const [hit] = await connection.execute(boardHitUpdateSql, boardHitParams)
            }
            //////=============================== hit update sql =====================================================///

            /////================================ comment sql  start =======================================================///
            const commentSql = `SELECT * 
                  FROM comment 
                  LEFT JOIN (SELECT user_id,nickname as writer_nick, image FROM user) as writer ON writer.user_id = comment.writer
                  LEFT JOIN (SELECT user_id as target_id,nickname as target_nick FROM user) as target ON target.target_id = comment.target
                  LEFT JOIN (SELECT * FROM clike WHERE user_id = ?) as clike ON comment.comment_id = clike.target_id 
                  WHERE board_id = ? AND root = ?   ORDER BY liked DESC LIMIT ?,? ;`
            const commentparams = [client,board_id, 0, 0, 10];
            const [comment] = await connection.execute(commentSql, commentparams)
      comment.forEach(v => {
        v.createdAt = clearDate(v.createdAt);
        v.replys=[];
        if (v.writer == client) {
          v.isWriter = true;
        } else {
          v.isWriter = false;
        }
        if (v.del == 1) {
          v.content = "삭제된 댓글입니다."
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

            const params = [client,board_id];
            const [result] = await connection.execute(sql, params)
            /////=================================article sql end======================================///

            let data = { ...result[0] }

            //삭제된 게시글은 제목과 내용을 가려줌.
            if (data.del === 1) {
                data.subject = '삭제된 게시글입니다.'
                data.content = '삭제된 게시글입니다.'
            }

            //해당 글의 작성자면  isWriter 를 true 값을 부여하여 프론트에서 수정 삭제 버튼을 보여줄지 말지 정함.
            if(!data.hasOwnProperty('isLike')) data.isLike = null;
            if (data.writer == client) {
                data.isWriter = true;
            } else {
                data.isWriter = false;
            }

            data.createdAt = clearDate(data.createdAt);
            data.success = true;
            data.comments=comment;
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


const updateCheck = async(req,res)=>{
    const { board_id} = req.params;
    const AccessToken = req.cookies.AccessToken;
    if(AccessToken===undefined){
        const data = {
            success:false,
            error:'수정권한이 없습니다'
        }
        res.json(data)
    }else{
        const client = jwtId(AccessToken);

        let connection;
        try {
            connection = await pool.getConnection(async conn => conn);
            try {
                const sql = `SELECT writer,content,subject,del  FROM board WHERE board_id=?`
                const params = [board_id];
                const [result] = await connection.execute(sql, params)
                if (result[0].writer != client) {//사용자 측에서 억지로 delete요청을 보냈을 때,
                    const data = {
                        success: false,
                        error: "수정 권한이 없습니다."
                    }
                    res.json(data)
                }else{
                    if(result[0].del==1){
                        const data = {
                            success: false,
                            error: "삭제된 게시글입니다."
                        }
                        res.json(data)
                    }else{
                        const data = {
                            success: true,
                            content:result[0].content,
                            subject:result[0].subject,
                            writer:result[0].writer,
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

    if (writer != client) {//사용자 측에서 억지로 delete요청을 보냈을 때,
        const data = {
            success: false,
            error: "수정 권한이 없습니다."
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

    if (writer != client) {//사용자 측에서 억지로 delete요청을 보냈을 때,
        const data = {
            success: false,
            error: "삭제 권한이 없습니다."
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
                //이부분 점검이 필요. 쿼리가 잘 실행 된건지 아닌지.
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
    if (type == "hot" ) {
        if(search!=null) whereVerse += ` AND board.liked > 5`
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