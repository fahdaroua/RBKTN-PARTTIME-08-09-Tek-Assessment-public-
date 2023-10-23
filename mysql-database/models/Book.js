const connection = require("../index")

module.exports = {
    getOne : (id) => {
        return new Promise((resolve,reject)=>{
            const query = "select * from books where id = ?";
            connection.query(query,[id],(err,results)=>{
                if (err) {
                    reject(err)
                }
                else {
                    resolve(results)
                }

            })
        })
    },

    createOne :   ()=> { 
       
    },
    getAll :  () => {
    },
    updateOne :  () => {

    },
    deleteOne :  ()=> {

    },
    deleteAll : () => {

    }
}