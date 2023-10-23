const express = require('express');
const { body } = require('express-validator')
const router  = express.Router();
const {createOne,updateOne,deleteOne,deleteAll,getOne,getAll} = require("../controllers/books.js")
const createBookValidation = [
    body('name').isString().notEmpty(),
    body('author').isString().notEmpty(),
    body('category').isString().notEmpty(),
    body('numberOfPages').isInt({ min: 1 }),
];

const updateBookValidation = [
    body('name').optional().isString().notEmpty(),
    body('author').optional().isString().notEmpty(),
    body('category').optional().isString().notEmpty(),
    body('numberOfPages').optional().isInt({ min: 1 }),
];
router.get("/getoneBook/:id",getOne)

router.get('/getAllBooks', getAll); 
router.post('/createBook', createBookValidation,createOne); 
router.put('/updateBook/:id',updateBookValidation,updateOne); 
router.delete('/deleteOneBook/:id', deleteOne);
router.delete('/deleteAllBooks', deleteAll); 

module.exports = router;


