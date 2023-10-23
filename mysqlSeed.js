const mysql = require('mysql2/promise');

const setupDatabase = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root'
    });

    await connection.query('CREATE DATABASE IF NOT EXISTS bookStore08');
    await connection.query('USE bookStore08');
    await connection.query(`
        CREATE TABLE IF NOT EXISTS books (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            numberOfPages INT NOT NULL
        );
    `);

    // Seed data
    await connection.query(`
        INSERT INTO books (name, author, category, numberOfPages) VALUES 
        ('Book1', 'Author1', 'Category1', 100),
        ('Book2', 'Author2', 'Category2', 200);
    `);

    console.log('Database setup and seeded successfully!');
    connection.end();
};

setupDatabase();