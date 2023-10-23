const express = require('express');
const cors = require('cors');
const PORT = 5000;
const booksRoute = require("./routes/books")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}))
app.use(cors());
app.use("/api/books",booksRoute);




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});