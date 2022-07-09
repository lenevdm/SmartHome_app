const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();

// Connect to the database ( the details are in .env file)
const connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : 'password',
    database : 'smarthome'
});

// Log an error if the connection fails
connection.connect((err) => {
    if(err){
        console.log(err.message);
    }
    console.log('DB ' + connection.state);
});

// Class to get the data
class DbService {
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }

    async getAllData(){
        try{
            const response = await new Promise((resolve, reject) => {
                const query = "select * FROM names;";

                connection.query(query,(err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;

        } catch (error){
            console.log(error);
        }
    }
}

module.exports = DbService;