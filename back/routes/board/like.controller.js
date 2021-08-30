const pool = require('../../config/dbconnection');
const jwtId = require('../../jwtId')


const LikeAction = async (req, res) => {
  const { isLike, id, type, action } = req.body;

  const AccessToken = req.cookies.AccessToken;
  let client=0
  if (AccessToken == undefined) {
    const data = {
      success:false,
      error:'!USER'
    }
    res.json(data);
  }else{
    client = jwtId(AccessToken);

    let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      let [result] = [];
      switch (action) {
        case 'INSERT':
          const insertSql = `INSERT INTO ${type} (target_id,user_id,islike) values(?,?,?)`
          const insertParams = [id, client, isLike];
          [result] = await connection.execute(insertSql, insertParams)
          break;
        case 'DELETE':
          const deleteSql = `DELETE FROM ${type} WHERE target_id=? AND user_id=?`
          const deleteParams = [id, client,];
          [result] = await connection.execute(deleteSql, deleteParams)
          break;
        case 'UPDATE':
          const updateSql = `UPDATE ${type} SET islike=? WHERE target_id=? AND user_id=?`
          const updateParams = [isLike, id, client];
          [result] = await connection.execute(updateSql, updateParams)
          break;
        default:
          break;
      }
      let data = {
        success: true,
        isLike: isLike
      }
      if(data.isLike==undefined) data.isLike= null;
      res.json(data);
    } catch (error) {
      console.log('Query Error');
      console.log(error)
      const data = {
        success: false,
        error: error
      }
      res.json(data);
    }
  } catch (error) {
    console.log('DB Error')
    console.log(error)
    const data = {
      success: false,
      error: error
    }
    res.json(data);
  } finally {
    connection.release();
  }

  }
  


  




}


module.exports = { LikeAction }