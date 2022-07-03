// Set up Express and create an app to run on port 8089
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { response } = require('express');
dotenv.config();

// const dbService = require('/dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
//create
app.post('/insert', (req, res) => {

});

//read
app.get('/getAll', (request, response) => {
    response.json({
        success: true
    });
});

//update
// app.post('/insert', (req, res) => {
    
// });

//delete
// app.post('/insert', (req, res) => {
    
// });


app.listen(process.env.PORT, () => console.log('App is running.'));