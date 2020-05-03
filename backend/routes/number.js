var express = require('express');

var router = express.Router();

// Calculate 

router.post('/', function (req, res) {
  var countValue = req.body.body;
 
  var countIp = req.body.bodyIp;
  var countDate = req.body.bodyDate
  
  var Value = Calculate(+countValue);
    function Calculate(n) {
      if (n == 1) { c = 1 }
      else if ( n == 2) { c = 1}
      else{
        var a = 1, b =1, c = 0;
        for(i = 2; i < n; i++) {
          c = a + b;
          a = b;
          b = c;
        }   
      }
    return c;
    };  

  res.end(JSON.stringify(Value));

  // sql
  const mysql = require('mysql2');
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlroot',
    database: 'fibo-sql-data'
});

const datas = [
  [countDate, countIp, countValue, Value]
];
const sql = `INSERT INTO  data_table(date, ip, number, result) VALUES ?`;

connection.query(sql, [datas],function(err, results) {
  if(err) console.log(err);
});

connection.end();


});


module.exports = router;