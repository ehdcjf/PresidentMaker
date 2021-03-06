require('dotenv').config();
const crypto = require('crypto');

function createToken(user_id) {
    let header = {
        "tpy": "JWT",
        "alg": "HS256"
    }

    let exp = new Date().getTime() + ((60 * 60 * 2) * 1000)

    let payload = {
        user_id,
        exp,
    }

    const encodingHeader = Buffer.from(JSON.stringify(header)).toString('base64').replace('=', '').replace('==', '');
    const encodingPayload = Buffer.from(JSON.stringify(payload)).toString('base64').replace('=', '').replace('==', '');


    const signature = crypto.createHmac('sha256', Buffer.from(process.env.SALT))
        .update(encodingHeader + "." + encodingPayload)
        .digest('base64')
        .replace('=', '')
        .replace('==', '');

    let jwt = `${encodingHeader}.${encodingPayload}.${signature}`
    return jwt;
}




module.exports = createToken;