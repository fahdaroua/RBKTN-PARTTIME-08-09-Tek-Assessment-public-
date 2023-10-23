// seedMongoDb.js
const mongoose = require('mongoose');
const Book = require('./mongo-database/models/book'); // Update this path to point to your model file

const seedDatabase = async () => {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/bookStore08', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    // Seed data
    const books = [
        { name: 'Book1', author: 'Author1', category: 'Category1', numberOfPages: 100 },
        { name: 'Book2', author: 'Author2', category: 'Category2', numberOfPages: 200 }
    ];

    await Book.insertMany(books);

    console.log('MongoDB seeded successfully!');
    mongoose.connection.close();
};

seedDatabase();






