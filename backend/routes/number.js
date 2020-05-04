const express = require('express');

const router = express.Router();

/**
 * Post response to axios.post from form.js 
 * @param {number} countValue entered number
 * @param {number} countIp - user IP
 * @param {number} countData - request date
 * @return {number} Value - computed Fibbonachi value 
 */

router.post('/', function (req, res) {
  const countValue = req.body.body;

  const countIp = req.body.bodyIp;

  let countDate = req.body.bodyDate;
  
  let Value = Calculate( +countValue );
  
  /** Fibbonachi calculate
   * @param {number} countValue
   * @return {number} c - computed value
   */
  function Calculate (n) {
      let a = 1, 
          b =1, 
          c = 0;
      if (n === 1) { 
        c = 1; 
      } else if ( n === 2 ) {
         c = 1
        }
        else {
          for(let i = 2; i < n; i++ ) {
            c = a + b;
            a = b;
            b = c;
          }   
    }
    return c;
  }; 

  res.end(JSON.stringify(Value));

/** Connecting to SQL database */
  const mysql = require('mysql2');
  const connection = mysql.createConnection({
    host: 'otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'wufsruc9ohj8i8ye',
    password: 'vo274g72msswd7ly',
    database: 'bl1lr5n2mrys55le'
  });

/**
 * Add datas to SQL database
 */
  const datas = [
    [countDate, countIp, countValue, Value]
  ];
  const sql = `INSERT INTO  fiboExamp_sql(date, ip, number, result) VALUES ?`;

  connection.query(sql, [datas],function(err, results) {
    if(err) console.log(err);
  });

  connection.end();


});


module.exports = router;