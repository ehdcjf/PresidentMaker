const CLIENT_ID = `7c2d0d5ca1353c92a277225259c64d0c`;
const REDIRECT_URI = `http://localhost:3001/kakao/callback`;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
