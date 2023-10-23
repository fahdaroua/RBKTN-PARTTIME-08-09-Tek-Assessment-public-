
//uncomment to use the model from mongodb-database
// const Book = require("../mongo-database/models/book")

// uncomment to use mysql models
// const {getAll,createOne,updateOne,deleteOne,deleteAll,getOne} = require("../mysql-database/models/Book")

module.exports = {

    getOne:async(req,res)=>{
        // uncomment if using mongoDb

        // try{
        //     const data = await Book.findOne({_id:req.params.id})
        //     res.status(200).json(data)

        // }
        // catch(error) {
        //     res.status(500).json(error)
        // }

        // uncomment if using mysql

        //   try{
        //     const data = await getOne(req.params.id)
        //     res.status(200).json(data)

        // }
        // catch(error) {
        //     res.status(500).json(error)
        // }
        
    },
    createOne :  async (req,res)=> {  
    },
    getAll : async (req,res) => {
    },
    updateOne : async (req,res) => {

    },
    deleteOne : async (req,res)=> {

    },
    deleteAll : async(req,res) => {

    }
}