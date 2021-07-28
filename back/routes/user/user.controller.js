const SQL = require('../../config/dbconnection'); 



const createUser = async (req,res) => {

  await SQL((error, connection) => {
    if (error) {
        // console.log('connetion error', error);
        res.json(error); 
        // throw error;
    }
    //let sql = `insert into gesipan (subject,id,content)
     //       values('${body.subject}','${body.id}','${body.content}')`;
    connection.query(sql, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect(`/board/view?idx=${results.insertId}`)
        }
    })
})
    

}

const showUser = async (req,res) => { 

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