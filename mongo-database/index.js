const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/bookStore08')
.then(()=>{
    console.log("mongoDB connected successfully")
})
.catch(error=>{
    console.log(error) 
})

module.exports = mongoose;
