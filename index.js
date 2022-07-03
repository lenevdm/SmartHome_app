// Device table functions
document.addEventListener('DOMContentLoaded', function(){
  loadHTMLTable([]);
});
function loadHTMLTable(data){
  const table = document.querySelector('table tbody');
  
  if (data.length == 0){
    table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
  }
};

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
    console.log("Node server is running on port ", this.address().port); 

  });

