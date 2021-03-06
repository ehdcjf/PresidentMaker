const pool = require('../../config/dbconnection');
const jwtId = require('../../jwtId');
const { clearDate } = require('../util');

const createComment = async (req, res) => {
  const { content } = req.body;
  const { board_id, root, target_id } = req.params;
  const AccessToken = req.cookies.AccessToken;
  if (AccessToken === undefined) {
    const data = {
      success: false,
      error: '!USER'
    }
    res.json(data)
  } else {
    const writer = jwtId(AccessToken);

    let connection;
    try {
      connection = await pool.getConnection(async conn => conn);
      try {
        const sql = `INSERT INTO comment (content,board_id,writer,root,target) values(?,?,?,?,?)`
        const params = [content, board_id, writer, root, target_id];
        const [rows] = await connection.execute(sql, params)

        if (root != 0) {
          const sql = 'UPDATE comment SET reply_cnt = reply_cnt+1 WHERE comment_id=?'
          const params = [root];
          await connection.execute(sql, params);
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

}



const showComment = async (req, res) => {
  const { root, board_id, skip, type } = req.params;
  const AccessToken = req.cookies.AccessToken;
  let order = ''
  switch (type) {
    case 'like':
      order = 'comment.liked DESC'
      break;
    case 'old':

      order = 'comment.comment_id ASC'
      break;
    case 'new':

      order = 'comment.comment_id DESC'
      break;

      default:

      order = 'comment.comment_id ASC'
      break;
  }


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
                  WHERE board_id = ? AND root = ? ORDER BY ${order} LIMIT ?,? ;
                  `
      const params = [client, board_id, root, skip, 10];
      const [rows] = await connection.execute(sql, params)
      rows.forEach(v => {
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
  if (AccessToken === undefined) {
    const data = {
      success: false,
      error: '!USER'
    }
    res.json(data)

  } else {
    const client = jwtId(AccessToken);
    if (client != writer) {
      const data = {
        success: false,
        error: '??????????????? ????????????.'
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




}



const deleteComment = async (req, res) => {
  const { comment_id, writer } = req.params;

  const AccessToken = req.cookies.AccessToken;
  if (AccessToken === undefined) {
    const data = {
      success: false,
      error: '!USER'
    }
    res.json(data)
  } else {
    const client = jwtId(AccessToken);
    if (client != writer) {
      const data = {
        success: false,
        error: '??????????????? ????????????.'
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



}



module.exports = {
  createComment,
  showComment,
  updateComment,
  deleteComment
}
