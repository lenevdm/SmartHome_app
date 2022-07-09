// Device table functions to populate the table
document.addEventListener('DOMContentLoaded', function(){
  fetch('http://localhost:8089/getAll')
  .then(response => response.json())
  .then(data => loadHTMLTable(data['data']));
  loadHTMLTable([]);
});
function loadHTMLTable(data){
  const table = document.querySelector('table tbody');

  console.log(data);
  
  if (data.length == 0){
    table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
  }
};