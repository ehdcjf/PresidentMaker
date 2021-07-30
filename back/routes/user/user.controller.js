const SQL = require('../../config/dbconnection'); 



const createUser = (req,res) => {

    const {userid,nickname,hometown,residence,gender,age} = req.body; 

    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }
        let sql =`INSERT INTO USER (userid,nickname,hometown,residence,gender,age) 
                    values('${userid}','${nickname}','${hometown}','${residence}','${gender}','${age}')`
        //let sql = `insert into gesipan (subject,id,content)
        //       values('${body.subject}','${body.id}','${body.content}')`;
        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error); 
            } else {
                console.log(results)
                res.json(results);
            }
        });
    })
    

}


//투표까지 만들고 하기. 
const showUser = (req,res) => { 
    const {targetidx} = req.query;
    const {useridx} = req.headers;
    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }
        let sql =`SELECT * FROM user WHERE id = ${targetidx}` 

        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error); 
            } else {
                clearInfo(results,useridx)
                res.json(results);
            }
        });
    })

}

const updateUser = async (req,res) => {
    const {nickname,hometown,residence,gender,age} = req.body; 
    //쿠키에서 idx 가져오기. 
    const idx=1;
    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }
        let reesult = {
            
        }
        let sql = `UPDATE user SET nickname=${nickname},hometown=${hometown},residence=${residence},gender=${gender},age=${age} WHERE id=${idx}`

        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error); 
            } else {
                const data = { 
                    msg:"수정되었습니다."
                }
                res.json(data);
            }
        });
    })

}

const deleteUser = async (req,res) => { 
    const {idx} = req.query;


    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }
        let sql =`UPDATE user SET status=1 WHERE id=${idx}`

        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error); 
            } else {
                const data = { 
                    msg:"탈퇴처리되었습니다."
                }
                res.json(data);
            }
        });
    })

}






module.exports = { 
  createUser,
  showUser,
  updateUser,
  deleteUser,
}

// id,userid,nickname,hometown,residence,gender,age,status,show 
const clearInfo = (results,useridx) => { 
    const target = results[0]; 
    // const targetArr = Object.entries(target); 
    let voteHistory; 
    
    // 투표이력도 가져와야함

    /*
    투표이력 가져오는 함수
    */

    if(target.id===useridx ||target.show&(1<<0)){
        //투표이력 가져오는 쿼리.
        console.log('투표이력가져오는 쿼리')

    }

    delete target.id;
    delete target.userid;
    console.log(target.show);
    for(let i = 0; i<5; i++){
        if(target.show&(1<<i)){
            console.log(targetArr[i+1])
        }
    }

    return; 
}