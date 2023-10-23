

const Book = require("../mongo-database/models/book")

// uncomment to use mysql models
// const {getAll,createOne,updateOne,deleteOne,deleteAll,getOne} = require("../mysql-database/models/Book")

module.exports = {

    getOne:async(req,res)=>{
       

        try{
            const data = await Book.findOne({_id:req.params.id})
            res.status(200).json(data)

        }
        catch(error) {
            res.status(500).json(error)
        }

        // uncomment if using mysql

        //   try{
        //     const data = await getOne(req.params.id)
        //     res.status(200).json(data)

        // }
        // catch(error) {
        //     res.status(500).json(error)
        // }
        
    },
    createOne: async (req, res) => {
        try {
            const { name, author, category, numberOfPages } = req.body;
            const newBook = new Book({ name, author, category, numberOfPages });
            await newBook.save();
            res.status(201).json(newBook); 
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateOne: async (req, res) => {
        try {
            const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(updatedBook);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteOne: async (req, res) => {
        try {
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteAll: async (req, res) => {
        try {
            await Book.deleteMany();
            res.status(200).json({ message: 'All books deleted successfully' });
        } catch (error) {
            res.status(500).json(error);
        }
    }
};