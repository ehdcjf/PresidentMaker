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

const showUser = (req,res) => { 
    const {targetid} = req.query;
    const {userid} = req.headers;
    SQL((error, connection) => {
        if (error) {
            // console.log('connetion error', error);
            res.json(error);
            // throw error;
        }
        let sql =`SELECT * FROM user WHERE userid = ${targetid}` 

        connection.query(sql, (error, results) => {
            if (error) {
                console.log(error)
                res.json(error); 
            } else {
                clearInfo(results,userid)
                res.json(results);
            }
        });
    })

}

const updateUser = async (req,res) => {
    

}

const deleteUser = async (req,res) => { 

}



module.exports = { 
  createUser,
  showUser,
  updateUser,
  deleteUser,
}


const clearInfo = (results,userid) => { 
    
    const result = results[0];
    delete result.id; 
    delete result.status;

    const target = result.userid;

    if(target===userid){ // 내정보 보기 
        return result
    }else{ // 다른 회원 정보보기 show 값으로 정보를 걸러줘야함. 
        const temp = [...result];
        console.log(temp)
        return; 
    }

}