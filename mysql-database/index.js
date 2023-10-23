const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // change it to your actual user name
    password:'root', // change it to your actual password
    database: 'bookStore08'
  })

connection.connect((err)=>{
err ? console.log(err) : console.log(" Mysql database connected succefully ! ");

})

module.exports = connection