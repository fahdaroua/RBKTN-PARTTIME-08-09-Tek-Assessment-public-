const express = require('express');
const router  = express.Router();
const {createOne,updateOne,deleteOne,deleteAll,getOne,getAll} = require("../controllers/books.js")

router.get("/getoneBook/:id",getOne)

router.get('/getAllBooks', getAll); 
router.post('/createBook', createOne); 
router.put('/updateBook/:id', updateOne); 
router.delete('/deleteOneBook/:id', deleteOne);
router.delete('/deleteAllBooks', deleteAll); 

module.exports = router;


