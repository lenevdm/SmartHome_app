// Set up Express and create an app to run on port 8089
const express = require('express');
const app = express();
const port = 8089;

var http = require("http");



http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to the mid-term application! \n\n");
    res.write("This application must run on PORT 8089");
    res.end();
  })

  .listen(8089, function() {
    console.log("Node server is running...on port ", this.address().port); 

  });

