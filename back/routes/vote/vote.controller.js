const pool = require('../../config/dbconnection');

// const makeVoteTalbe = async (req, res) => {

//   let connection;
//   try {
//     connection = await pool.getConnection(async conn => conn);
//     try {
//       const [rows] = await connection.execute(sql, params)
//       console.log(rows);
//       res.json(rows);
//     } catch (error) {
//       console.log('Query Error');
//       console.log(error)
//       res.json(error)
//     }
//   } catch (error) {
//     console.log('DB Error')
//     console.log(error)
//     res.json(error)
//   } finally {
//     connection.release();
//   }

// }


const showResult = async (req, res) => {
  const where = makeWhereVerse(req.query);


  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `
      SELECT politician_id, COUNT(politician_id) AS count,politician.politician_name,politician.politician_color 
      FROM (SELECT * FROM user ${where} ) as user
      LEFT JOIN ( SELECT * 
                  FROM vote_result
                  WHERE (user_id, vote_id) 
                  in (SELECT 
                            user_id, MAX(vote_id) as vote_id 
                      FROM 
                            vote_result 
                      GROUP BY user_id)
                ) AS vote
       ON user.user_id = vote.user_id
       NATURAL JOIN politician
       GROUP BY politician_id ORDER BY count DESC;

    
    `

      const [result,] = await connection.execute(sql, [])
      console.log(result)
      const label = result.map(v => v.politician_name);
      const data = result.map(v => v.count);
      const color =result.map(v => v.politician_color);
      // const sum = data.reduce(reducer)
      res.json({ success: true, label: label, data: data ,color:color});
    } catch (error) {
      console.log('Query Error');
      console.log(error)
      const data = {
        success: null,
        error: error.sqlMessage,

      }
      res.json(data)
    }
  } catch (error) {
    console.log('DB Error')
    console.log(error)
    const data = {
      success: null,
      error: error.sqlMessage,
    }
    res.json(data)
  } finally {
    connection.release();
  }
}

const showLast = async (req, res) => {

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `SELECT * FROM vote_title ORDER BY vote_id DESC LIMIT 1`
      let [[result],] = await connection.execute(sql, [])
      const listSQL = `SELECT 
                        * 
                      FROM vote_info 
                      NATURAL JOIN politician
                      WHERE vote_id=?`
      const params = [result.vote_id]
      const [list,] = await connection.execute(listSQL, params)
      result.success = true;
      result.list = list;
      res.json(result)
    } catch (error) {
      console.log('Query Error');
      console.log(error)
      const data = {
        success: null,
        error: error.sqlMessage,
      }
      res.json(data)
    }
  } catch (error) {
    console.log('DB Error')
    console.log(error)
    const data = {
      success: null,
      error: error.sqlMessage,
    }
    res.json(data)
  } finally {
    connection.release();
  }

}




module.exports = {
  showResult,
  showLast,
}



const makeWhereVerse = (query) => {
  const  {gender,hometown,residence,vote19} = query;
  const minage = (query.minage=='null') ? 0 : parsInt(query.minage);
  const maxage = (query.maxage=='null') ? 120 : parsInt(query.maxage);
 

  let cnt = 0;


  let where = 'WHERE ';
  if (gender != 'null') {
    where += `gender=${gender} `
    cnt++;
  }
  if (maxage != 'null' && minage != 'null') {
    if (cnt > 0) { where += 'AND '; cnt++; }
    const now = Number(new Date().getFullYear() + 1);
    where += `birth between ${now - maxage} AND ${now - minage} `
  }

  if (hometown != 'null') {
    if (cnt > 0) { where += 'AND '; cnt++; }
    where += '('
    let homeCnt = 0;
    for (let i = 0; i < 16; i++) {
      if (hometown & (1 << i)) {
        if (homeCnt > 0) { where += 'AND '; homeCnt++; }
        where += `hometown = ${i} `
      }
    }
    where += ') '
  }

  if (residence != 'null') {
    if (cnt > 0) { where += 'AND '; cnt++; }
    where += '('
    let residenceCnt = 0;
    for (let i = 0; i < 16; i++) {
      if (residence & (1 << i)) {
        if (residenceCnt > 0) { where += 'AND '; residenceCnt++; }
        where += `residence = ${i} `
      }
    }
    where += ') '
  }

  if (vote19 != 'null') {
    if (cnt > 0) { where += 'AND '; cnt++; }
    where += '('
    let vote19Cnt = 0;
    for (let i = 0; i < 14; i++) {
      if (vote19 & (1 << i)) {
        if (vote19Cnt > 0) { where += 'AND '; vote19Cnt++; }
        where += `vote19 = ${i} `
      }
    }
    where += ') '
  }

  return where;

}