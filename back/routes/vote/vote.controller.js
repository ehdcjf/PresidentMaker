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
  console.log(where)

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
      if(result.length==0){
        res.json({success:false,error:'zero'})
      }else{
        const label = result.map(v => v.politician_name);
        const data = result.map(v => v.count);
        const color =result.map(v => v.politician_color);
        res.json({ success: true, label: label, data: data ,color:color});
      }
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
  console.log(query)
  const gender = parseInt(query.gender)
  const maxage = parseInt(query.maxage)
  const minage = parseInt(query.minage)
  const hometown = parseInt(query.hometown)
  const residence = parseInt(query.residence)
  const vote19 = parseInt(query.vote19)

  let where = 'WHERE ';

  const now = Number(new Date().getFullYear() + 1);
  where += `birth between ${now - maxage} AND ${now - minage} `

  if (gender ==1 || gender==2) {
    where += `AND ( gender=${gender}) `
  }

  if (hometown > 0 ) {
    where += 'AND ('
    let homeCnt = 0;
    for (let i = 0; i < 16; i++) {
      if (hometown & (1 << i)) {
        if (homeCnt > 0) { where += 'OR ';  }
        where += `hometown = ${i} `
        homeCnt++;
      }
    }
    where += ') '
  }

  if (residence >0) {
    where += 'AND ('
    let residenceCnt = 0;
    for (let i = 0; i < 16; i++) {
      if (residence & (1 << i)) {
        if (residenceCnt > 0) { where += 'OR '; }
        where += `residence = ${i} `
        residenceCnt++;
      }
    }
    where += ') '
  }

  if (vote19 >0) {
    where += 'AND ('
    let vote19Cnt = 0;
    for (let i = 0; i < 14; i++) {
      if (vote19 & (1 << i)) {
        if (vote19Cnt > 0) { where += 'OR ';  }
        where += `vote_19th = ${i} `
        vote19Cnt++;
      }
    }
    where += ') '
  }

  return where;

}