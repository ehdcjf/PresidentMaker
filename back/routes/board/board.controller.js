const SQL = require('../../config/dbconnection');



const showList = (req, res) => {

    const sql = showQuery(req.query);
    console.log(sql);

    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }

        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error);
            } else {
                console.log(results)
                res.json(results);
            }
        });
    })


}




const createArticle = (req, res) => {
    const { subject, content } = req.body;
    const writer = req.headers.id;

    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }
        let sql = `INSERT INTO board (subject,content,writer) 
                values('${subject}','${content}','${writer}')`
        //let sql = `insert into gesipan (subject,id,content)
        //       values('${body.subject}','${body.id}','${body.content}')`;
        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error);
            } else {
                console.log(results)
                res.json(results);
            }
        });
    })
}



//댓글도 불러오기.
const showArticle = (req, res) => {
    const { id } = req.params;

    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }
        let sql = `SELECT * FROM board WHERE id=${id}`

        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error);
            } else {
                console.log(results)
                res.json(results);
            }
        });
    });
};


//트리거로 updatedAt 바꿔주기.
const updateArticle = (req, res) => {
    const { subject, content } = req.body;
    const { id } = req.params;
    const update = new Date();

    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }
        let reesult = {

        }
        let sql = `UPDATE board SET subject='${subject}',content='${content}' WHERE id=${id}`
        console.log(sql);
        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error);
            } else {
                const data = {
                    msg: "수정되었습니다."
                }
                res.json(data);
            }
        });
    })



}
const deleteArticle = (req, res) => {
    const idx = req.params.id;


    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }
        let sql = `UPDATE board SET del=1 WHERE id=${idx}`

        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error);
            } else {
                const data = {
                    msg: "삭제되었습니다."
                }
                res.json(data);
            }
        });
    })
}


module.exports = {
    showList,
    showArticle,
    createArticle,
    updateArticle,
    deleteArticle,
}


const showQuery = (obj) => {
    let sql = `SELECT *
                FROM (SELECT id, nickname FROM user) AS user 
                INNER JOIN board
                ON board.writer = user.id
                `
    const { page, rows, type, search, keyword } = obj;

    let whereVerse = ` WHERE`


    switch (search) {
        case 'subject':
            whereVerse += ` subject LIKE '%${keyword}%'`
            break;
        case 'content':
            whereVerse += ` content LIKE '%${keyword}%'`
            break;
        case 'subject_content':
            whereVerse += ` (content LIKE '%${keyword}%' or subject LIKE '%${keyword}%')`
            break;
        case 'writer':
            whereVerse += ` (user.nickname LIKE '%${keyword}%')`
            break;
        default:
            break;
    }


    if (type !== "all") {
        whereVerse += `and like>24`
    }

    return sql + whereVerse + ` ORDER BY board.id DESC LIMIT ${(page - 1) * rows},${rows};`;
}