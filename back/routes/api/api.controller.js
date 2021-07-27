const axios = require('axios');
const qs = require('qs');

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

  const id = user.data.id;

  /*
    id를 통해 DB에서 조회.
    있으면 - 
  */

  res.json(user.data.id)
}

module.exports = {
  get_code
}