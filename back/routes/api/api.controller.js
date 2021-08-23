const axios = require('axios');
const qs = require('qs');
const pool = require('../../config/dbconnection');
const createToken = require('../../jwt');

const kakao = {
  clientID: `7c2d0d5ca1353c92a277225259c64d0c`,
  clientSecret: `Zg4gygtmVv74gpyexvLRUBGy3bNRz6yH`,
  redirectUri: 'http://localhost:3001/kakao/callback',

}

const get_code = async (req, res) => {
  const { code } = req.query
  let token;
  let user;

  try {
    token = await axios({
      method: 'POST',
      url: `https://kauth.kakao.com/oauth/token`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data: qs.stringify({
        grant_type: 'authorization_code',
        client_id: kakao.clientID,
        client_secret: kakao.clientSecret,
        redirectUri: kakao.redirectUri,
        code: code,
      })
    })
  } catch (e) {
    res.json(e.data);
  }



  try {
    user = await axios({
      method: 'GET',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${token.data.access_token}`
      }
    })
  } catch (err) {
    res.json(err.data)
  }

  const kakao_code = user.data.id;


  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `SELECT nickname,user_id,image FROM user WHERE kakao_code=?`
      const params = [kakao_code];

      const [result] = await connection.execute(sql, params)
      const access_token = createToken(result[0].user_id)
      const data = {
        success: true,
        nickname: result[0].nickname,
        image: result[0].image,
      }
      res.cookie('AccessToken', access_token, { httpOnly: true, secure: true })
      res.json(data);
    } catch (error) {//가입되지 않은 경우
      console.log('Query Error');
      console.log('비회원. 회원가입진행')
      console.log(error)
      const join = {
        success: false,
        kakao_code: kakao_code,
      }
      res.json(join)
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

const get_image = (req, res) => {
  res.json(req.file.filename)
}




module.exports = {
  get_code,
  get_image
}


