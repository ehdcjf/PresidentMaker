const pool = require('../../config/dbconnection');
const createToken = require('../../jwt');
const jwtId = require('../../jwtId')


const createUser = async (req, res) => {

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const { kakao, nickname, hometown, residence, gender, birth, image, vote20, vote19 } = req.body;
            const sql = `INSERT INTO USER (kakao_code,nickname,hometown,residence,gender,birth,image,vote_19th,vote_pm) 
            values(?,?,?,?,?,?,?,?,?)`
            const params = [kakao, nickname, hometown, residence, gender, birth, image, vote20, vote19]
            const [result] = await connection.execute(sql, params)
            const user_id = result.insertId;
            const access_token = createToken(user_id)
            const data = {
                success: true,
                nickname: nickname,
                image: image,
                user_id:user_id
            }
            res.cookie('AccessToken', access_token, { httpOnly: true, secure: true })
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



const showUser = async (req, res) => {
    const { id } = req.query;
    const AccessToken = req.cookies.AccessToken;
    let client= 0; 
    if(AccessToken!=undefined){
        client = jwtId(AccessToken)
    }
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `SELECT * FROM user WHERE user_id = ?`
            const params = [id]
            const result = await connection.execute(sql, params)
            console.log(result[0][0])

            if(client==id){
                res.json(result[0][0]);
            }else{
                res.json(hideInfo(result[0][0]));
            }
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

const updateUser = async (req, res) => {
    const { nickname, hometown, residence, gender, birth } = req.body;
    //쿠키에서 idx 가져오기. 
    const idx = 1;
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {

            const sql = `UPDATE user SET nickname=?,hometown=?,residence=?,gender=?,birth=? WHERE user_id=?`
            const params = [nickname, hometown, residence, gender, birth, idx]
            const results = await connection.execute(sql, params)
            console.log(results[0][0])
            res.json(results[0][0]);
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

const deleteUser = async (req, res) => {
    const { idx } = req.query;


    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `UPDATE user SET status=1 WHERE user_id=?`
            const params = [idx]
            const [result] = await connection.execute(sql, params)
            console.log(result)
            res.json(result);
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



const logoutUser = (req, res) => {
    res.clearCookie('AccessToken', { path: '/' })
    const data = {
        isLogout: true,
    }
    res.json(data)
}


const nicknameCheck = async (req, res) => {
    const nickname = req.params.nickname;
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `SELECT COUNT(user_id) as count FROM user WHERE nickname=?`
            const params = [nickname]
            const [[result]] = await connection.execute(sql, params)
            let data = {
                success: false,
            }
            if (result.count == 0) {
                data.success = true;
            }
            res.json(data);
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            const data = {
                success: null,
                error: "부적절한 입력입니다.",
            }
            res.json(data)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        const data = {
            success: null,
            error: `${error}: 관리자에게 문의해주세요.`,
        }
        res.json(data)
    } finally {
        connection.release();
    }
}






module.exports = {
    createUser,
    showUser,
    updateUser,
    deleteUser,
    logoutUser,
    nicknameCheck,
}




const hideInfo = (data)=>{
//// 가려주기.

    return {...data}
}