const pool = require('../../config/dbconnection');
const jwtId = require('../../jwtId');
const { clearDate } = require('../util');

const createComment = async (req, res) => {
  const { content } = req.body;
  const { board_id, root, target } = req.params;
  const AccessToken = req.cookies.AccessToken;
  const writer = jwtId(AccessToken);

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `INSERT INTO comment (content,board_id,writer,root,target) values(?,?,?,?,?)`
      const params = [content, board_id, writer, root, target];
      const [rows] = await connection.execute(sql, params)

      if(root!=0){
        const sql = 'UPDATE comment SET reply_cnt = reply_cnt+1 WHERE comment_id=?'
        const params = [root];
        await connection.execute(sql,params);
      }

      const createdAt = clearDate(new Date());
      const data = {
        success: true,
        comment_id: rows.insertId,
        writer: writer,
        createdAt: createdAt,
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



const showComment = async (req, res) => {
  const { root, board_id, skip } = req.params;
  const AccessToken = req.cookies.AccessToken;

  let client = 0;
  if (AccessToken !== undefined)
    client = jwtId(AccessToken);

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `SELECT * 
                  FROM comment 
                  LEFT JOIN (SELECT user_id,nickname as writer_nick, image FROM user) as writer ON writer.user_id = comment.writer
                  LEFT JOIN (SELECT user_id as target_id,nickname as target_nick FROM user) as target ON target.target_id = comment.target
                  LEFT JOIN (SELECT * FROM clike WHERE user_id = ?) as clike ON comment.comment_id = clike.target_id 
                  WHERE board_id = ? AND root = ?   ORDER BY comment_id DESC LIMIT ?,? ;
                  `

      // const sql = `SELECT id,board_id,writer,nick,createdAt,updatedAt, root, liked,disliked, del,reply,subidx,subnick, type as isLike,content,image
      // FROM (SELECT * 
      //         FROM comment
      //         LEFT JOIN (select idx as user_id, nickname as nick, image from user) AS writer on writer.useridx = comment.writer
      //         LEFT JOIN (SELECT idx AS subidx, nickname as subnick from user) AS sub on sub.subidx = comment.sub_master
      //         WHERE board_id = ? AND root = ?   ORDER BY id DESC LIMIT ?,?) AS comment 
      //      left JOIN (SELECT * FROM clike WHERE user_idx=?) AS clike ON clike.comment_id= comment.id;`

      const params = [client,board_id, root, skip, 10];
      const [rows] = await connection.execute(sql, params)
      rows.forEach(v => {
        v.createdAt = clearDate(v.createdAt);
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
  const { writer, comment_id } = req.params;
  const update = true;
  const AccessToken = req.cookies.AccessToken;
  const client = jwtId(AccessToken);
  if (client != writer) {
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
        const sql = `UPDATE comment SET content = ?, updated = ? WHERE comment_id = ? `
        const params = [content, update, comment_id];
        const [rows] = await connection.execute(sql, params)
        const data = {
          success: true,
          comment_id: comment_id,
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
  const { comment_id, writer } = req.params;

  const AccessToken = req.cookies.AccessToken;
  const client = jwtId(AccessToken);
  if (client != writer) {
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
        const sql = `UPDATE comment SET del = 1 WHERE comment_id =? `
        const params = [comment_id];
        const [rows] = await connection.execute(sql, params)
        const data = {
          success: true,
          comment_id: comment_id,
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
