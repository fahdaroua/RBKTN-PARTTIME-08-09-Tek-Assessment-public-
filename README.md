* Make Sure to install all required packages by running this command : npm install
* If you are using mongoDB run this command : npm run setup-dbmongo
* If you are using MYSQL run this command : npm run setup-dbmysql

*** important ***

-- If you are using a diffrent user name or passwrod in your local mysql server 
make sure to change them in mysqlSeed.js (Line 6 and Line 7)
also in mysql-database/index.js (Line 5 and Line 6)

Make sure to check them before running the setup command.

** This is not require if you are using mongoDb



** After seeding the data you can access it either using MongoDb Compass or mysql workbench

*** The database name is "bookstore08"



* In this API we will be handling data about books.

this is and example of a book object 
mysql : 

{
    "id": 1,
    "name": "Book1",
    "author": "Author1",
    "category": "Category1",
    "numberOfPages": 100
  }

mongDB :
{
  "_id": "6536b343aa471155ed52d267",
  "name": "Book1",
  "author": "Author1",
  "category": "Category1",
  "numberOfPages": 100,
  "__v": 0,
  "createdAt": "2023-10-23T17:54:11.815Z",
  "updatedAt": "2023-10-23T17:54:11.815Z"
}

***(Requirements : *)***

-- You are required to handle these CRUD operations.

* get one book
* get all books
* create a book
* delete one book
* update one book
* delete all books

* get one is already implemented in both mongo db and mysql you only need to uncomment the code for it to work
(it s meant to be an example to help you with the other CRUD operations)
* make sure the API is working by testing it with thunder
* Duration : 2 hours
* It is crucial (must do) that you push your work to Github when finished
* All resources allowed !


// bonus : validate request body data before using it (this is optional) 