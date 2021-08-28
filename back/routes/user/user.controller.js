const pool = require('../../config/dbconnection');
const createToken = require('../../jwt');
const jwtId = require('../../jwtId')


const createUser = async (req, res) => {

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const { kakao_code, nickname, hometown, residence, gender, birth, image } = req.body;
            const params = [kakao_code, nickname, hometown, residence, gender, birth, image]
            const sql = `INSERT INTO USER (kakao_code,nickname,hometown,residence,gender,birth,image) 
                            values(?,?,?,?,?,?,?)`
            const [rows] = await connection.execute(sql, params)
            const user_id = rows.insertedId;
            const access_token = createToken(user_id)
            const data = {
                success: true,
                nickname: nickname,
                image: image,
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



//투표까지 만들고 하기. 
const showUser = async (req, res) => {
    const { target_id } = req.query;


    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `SELECT * FROM user WHERE user_id = ?`
            const params = [target_id]
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
            const [rows] = await connection.execute(sql, params)
            console.log(rows)
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




// id,userid,nickname,hometown,residence,gender,birth,status,show 
const clearInfo = (results, useridx) => {
    const target = results[0];
    // const targetArr = Object.entries(target); 
    let voteHistory;

    // 투표이력도 가져와야함

    /*
    투표이력 가져오는 함수
    */

    if (target.id === useridx || target.show & (1 << 0)) {
        //투표이력 가져오는 쿼리.
        console.log('투표이력가져오는 쿼리')

    }

    delete target.id;
    delete target.userid;
    console.log(target.show);
    for (let i = 0; i < 5; i++) {
        if (target.show & (1 << i)) {
            console.log(targetArr[i + 1])
        }
    }

    return;
}