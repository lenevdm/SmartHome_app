const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// Connect to the database ( the details are in .env file)
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

// Log an error if the connection fails
connection.connect((err) => {
    if(err){
        console.log(err.message);
    }
    console.log('db ' + connection.state);
})

// Export the module so app.js can use it.
module.exports = dbService;