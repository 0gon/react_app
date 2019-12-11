var mysql = require('mysql');
var db = mysql.createConnection({
  host     : '13.124.150.159',
  user     : 'root',
  password : 'tiger123',
  database : 'opentutorials'
});
db.connect();
module.exports = db;

