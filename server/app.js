// Set up Express and create an app to run on port 8089
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { response } = require('express');

dotenv.config();


// Connect the dbService.js module to connect to the smarthome database.
const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


var http = require("http");
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to the mid-term application! \n\n");
    res.write("This application must run on PORT 8089");
    res.end();
  });


//Routes
//create
app.post('/insert', (req, res) => {

});

//read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
});

//update
// app.post('/insert', (req, res) => {
    
// });

//delete
// app.post('/insert', (req, res) => {
    
// });


app.listen(process.env.PORT, () => console.log('App is running.'));