const mongoose = require("../index")

const bookSchema = mongoose.Schema( 
    {
    name : String,
    author : String,
    category : String,
    numberOfPages : Number
}, 
{
timestamps : true
}
)
const Book = mongoose.model("book",bookSchema)


module.exports = Book;