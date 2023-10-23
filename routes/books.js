const express = require('express');
const router  = express.Router();
const {createOne,updateOne,deleteOne,deleteAll,getOne} = require("../controllers/books.js")

router.get("/getoneBook/:id",getOne)
router.get("/getAllBooks",()=>{
    
})
// implement other routes ...

module.exports = router;