const pool = require('../../../config/dbconnection');

const createPolitician = async (req, res) => {
  const { name, image } = req.body;

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `INSERT INTO politician (politician_name,politician_image) values(?,?)`
      const params = [name, image]
      const [rows] = await connection.execute(sql, params)
      console.log(rows);
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



const createParty = async (req, res) => {
  const { name, image } = req.body;

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `INSERT INTO party (name,image) values(?,?)`
      const params = [name, image]
      const [rows] = await connection.execute(sql, params)
      console.log(rows);
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

const createElection = async (req, res) => {
  const { name, candidate ,content} = req.body;

  const table = candidate.split(',');

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const createEelectionSql = `INSERT INTO vote_title (title,content) values(?,?)`
      const params = [name,content]
      const [rows] = await connection.execute(createEelectionSql, params)
      const tableIndex = rows.insertId

      const maketableSql = `INSERT INTO vote_info (vote_id,politician_id) value(?,?)`
      table.forEach(async (ele) => {
        const man = ele;
        // const party = ele[1];
        const params = [tableIndex, man];
        const result = await connection.execute(maketableSql, params);

      });
      const data = {
        success: true
      }
      res.json(data);// 완료 데이터 넘겨주기.
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
  const { type } = req.query;
  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const createEelectionSql = `SELECT * FROM ${type}`
      const params = []
      const [rows] = await connection.execute(createEelectionSql, params)
      res.json(rows);// 완료 데이터 넘겨주기.
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





module.exports = {
  createPolitician,
  createParty,
  createElection,
  showList,
}