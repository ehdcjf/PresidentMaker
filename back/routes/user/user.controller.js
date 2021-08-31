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
                user_id:user_id,
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
            const sql = `SELECT image,nickname,gender,birth,hometown,residence,vote_19th,vote_pm,user.show,user.state FROM user WHERE user_id = ?`
            const params = [id]
            const result = await connection.execute(sql, params)
            if(result[0][0].state==1){//탈퇴했을경우
                const data = {
                    success:false,
                    error:'quit',
                }
                res.json(data)
            }else{
                let data = {...result[0][0],success:true}
                if(client==id){ //본인 정보를 조회할 경우
                    data.isMine = true;
                    res.json(data);
                }else{//타인의 정보를 조회할 경우 가려줘야함. 
                    data.isMine=false;
                    res.json(hideInfo(data));
                }
            }
        } catch (error) {
            console.log('Query Error');
            console.log(error)
            if(error.errno==1062){
                const data = {
                    success:false,
                    error:"방금 다른 누군가가 닉네임을 가져갔습니다.\n\n닉네임을 다시 설정해 주세요."
                }
                res.json(data)
            }
            else{
                const data = {
                    success: false,
                    error: error.sqlMessage,
                }
                res.json(data)
            }
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        const data = {
            success: false,
            error: error.sqlMessage,
        }
        res.json(data)
    } finally {
        connection.release();
    }
}

const updateUser = async (req, res) => {
    const { id } = req.query;
    const { nickname,birth,gender,hometown,residence,image,vote19,vote20,show } = req.body;
    const AccessToken = req.cookies.AccessToken;
    if(AccessToken==undefined){
        const data = {
            success:false,
            error:'접근권한이 없습니다'
        }
        res.json(data)
    }else{
        const client = jwtId(AccessToken)
        if(id!=client){
            const data = {
                success:false,
                error:'접근권한이 없습니다'
            }
            res.json(data)
        }else{
            let connection;
            try {
                connection = await pool.getConnection(async conn => conn);
                try {
                    const sql = `UPDATE user 
                                    SET nickname=?,
                                    birth=?,
                                    gender=?,
                                    hometown=?,
                                    residence=?,
                                    image=?,
                                    vote_19th=?,
                                    vote_pm=?,
                                    user.show = ?
                                    WHERE user_id=? ;`
                    const params = [nickname,birth,gender,hometown,residence,image,vote19,vote20,show,id]
                    const [result] = await connection.execute(sql, params)
                    const data ={
                        success:true,
                        result:result,
                    }
                    res.json(data);
                } catch (error) {
                    console.log('Query Error');
                    console.log(error)
                    if(error.errno==1062){
                        const data = {
                            success:false,
                            error:"방금 다른 누군가가 닉네임을 가져갔습니다.\n\n닉네임을 다시 설정해 주세요."
                        }
                        res.json(data)
                    }
                    else{
                        const data = {
                            success: false,
                            error: error.sqlMessage,
                        }
                        res.json(data)
                    }
                }
            } catch (error) {
                console.log('DB Error')
                console.log(error)
                const data = {
                    success:false,
                    error:error.sqlMessage
                }
                res.json(data)
            } finally {
                connection.release();
            }
        }
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.query;
    const AccessToken = req.cookies.AccessToken;
    if(AccessToken==undefined){
        const data = {
            success:false,
            error:'접근권한이 없습니다'
        }
        res.json(data)
    }else{
        
        const client = jwtId(AccessToken)
        if(id!=client){
            const data = {
                success:false,
            error:'접근권한이 없습니다'
            }
            res.json(data)
        }else{
            let connection;
            try {
                connection = await pool.getConnection(async conn => conn);
                try {
                    const sql = `UPDATE user SET state=1,kakao_code=NULL WHERE user_id=? ;`
                    const params = [id]
                    const [result] = await connection.execute(sql, params) 
                    const data ={
                        success:true,
                        result:result,
                    }
                    res.json(data);
                } catch (error) {
                    console.log('Query Error');
                    console.log(error)
                    const data = {
                        success:false,
                        error:error.sqlMessage
                    }
                    res.json(data)
                }
            } catch (error) {
                console.log('DB Error')
                console.log(error)
                const data = {
                    success:false,
                    error:error.sqlMessage
                }
                res.json(data)
            } finally {
                connection.release();
            }
        }
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
    const AccessToken = req.cookies.AccessToken;
    const client = jwtId(AccessToken)
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `SELECT COUNT(user_id) as count,user_id FROM user WHERE nickname=?`
            const params = [nickname]
            const [[result]] = await connection.execute(sql, params)
            let data = {
                success: false,
            }
            if (result.count == 0 || result.user_id==client) {
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
    let temp = {...data};
    const show = data.state;
    for(let i =0; i<6; i++){
        if(!(show&(1<<i))){
            switch(i){
                case 0:
                    temp.gender=false;
                    break;
                case 1:
                    temp.birth=false;
                    break;
                case 2:
                    temp.hometown=false;
                    break;
                case 3:
                    temp.residence=false;
                    break;
                case 4:
                    temp.vote_19th=false;
                    break;
                case 5:
                    temp.vote_pm=false; 
                    break;
                default:
                    break;
            }
        }
    }

    return temp
}