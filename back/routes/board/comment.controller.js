const pool = require('../../config/dbconnection');
const jwtId = require('../../jwtId');
const { clearDate } = require('../util')

const createComment = async (req, res) => {
  const { content } = req.body;
  const { board_id, sub_master } = req.params;
  const master = parseInt(req.params.master);
  const AccessToken = req.cookies.AccessToken;
  const writer = jwtId(AccessToken);

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `INSERT INTO comment (content,board_id,writer,master,sub_master) values(?,?,?,?,?)`
      const params = [content, board_id, writer, master, sub_master];
      const [rows] = await connection.execute(sql, params)
      const id = rows.insertId;
      const selectSql = `SELECT nickname AS nick, image,writer,id,content,master,board_id,liked,disliked,reply,subnick,subidx,createdAt
      FROM comment AS comment
      LEFT JOIN (SELECT idx,image, nickname FROM user) AS user ON comment.writer = user.idx 
      LEFT JOIN (SELECT idx AS subidx, nickname AS subnick FROM user) AS sub ON sub.subidx = comment.sub_master 
      WHERE  id=? ; `
      const selectParams = [id];
      let [result] = await connection.execute(selectSql, selectParams)

      if (master > 0) {
        const replysql = `UPDATE comment SET reply=reply+1 WHERE id=?;`
        const repluparams = [master]
        await connection.execute(replysql, repluparams)
      }

      result[0].createdAt = clearDate(v.createdAt)

      result[0].isUpdate = false;
      result[0].isLike = null;
      result[0].isWriter = true;
      res.json(result[0]);
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


const showComment = async (req, res) => {
  const { master, board_id, skip } = req.params;
  const AccessToken = req.cookies.AccessToken;


  let user = 0;
  if (AccessToken !== undefined)
    user = jwtId(AccessToken);

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `SELECT id,board_id,writer,nick,createdAt,updatedAt, master, liked,disliked, del,reply,subidx,subnick, type as isLike,content,image
      FROM (SELECT * 
              FROM comment
              LEFT JOIN (select idx as useridx, nickname as nick, image from user) AS writer on writer.useridx = comment.writer
              LEFT JOIN (SELECT idx AS subidx, nickname as subnick from user) AS sub on sub.subidx = comment.sub_master
              WHERE board_id = ? AND master = ?   ORDER BY id DESC LIMIT ?,?) AS comment 
           left JOIN (SELECT * FROM clike WHERE user_idx=?) AS clike ON clike.comment_id= comment.id;`


      const params = [board_id, master, skip, 10, user];
      const [rows] = await connection.execute(sql, params)
      rows.forEach(v => {
        if (v.writer == user) {
          v.isWriter = true;
        } else {
          v.isWriter = false;
        }
        if (v.del == 1) {
          v.content = "삭제된 댓글입니다."
          v.isWriter = false
          v.type = null
        }

        if ((v.createdAt.toString()) != v.updatedAt.toString()) {
          v.isUpdate = true
        } else {
          v.isUpdate = false
        }

        v.createdAt = clearDate(v.createdAt)
      })


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



const updateComment = async (req, res) => {
  const { content } = req.body;
  const { writer, id } = req.params;
  const update = new Date();
  const AccessToken = req.cookies.AccessToken;
  const user = jwtId(AccessToken);
  if (user != writer) {
    const data = {
      success: false,
      error: '수정권한이 없습니다.'
    }
    res.json(data);
  } else {
    let connection;
    try {
      connection = await pool.getConnection(async conn => conn);
      try {
        const sql = `UPDATE comment SET content = ?, updatedAt = ? WHERE id = ? `
        const params = [content, update, id];
        const [rows] = await connection.execute(sql, params)
        const data = {
          success: true,
          id: id,
          content: content,
        }
        res.json(data);
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


}



const deleteComment = async (req, res) => {
  const { id, writer } = req.params;

  const AccessToken = req.cookies.AccessToken;
  const user = jwtId(AccessToken);
  if (user != writer) {
    const data = {
      success: false,
      error: '삭제권한이 없습니다.'
    }
    res.json(data);
  } else {
    let connection;
    try {
      connection = await pool.getConnection(async conn => conn);
      try {
        const sql = `UPDATE comment SET del = 1 WHERE id =? `
        const params = [id];
        const [rows] = await connection.execute(sql, params)
        const data = {
          success: true,
          id: id,
        }
        res.json(data);
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
      const data = {
        success: false,
        error: error,
      }
      res.json(data)
    } finally {
      connection.release();
    }

  }


}



module.exports = {
  createComment,
  showComment,
  updateComment,
  deleteComment
}
