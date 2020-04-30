var express = require('express');
var router = express.Router();

module.exports = function(app, connection) {
    // if no mathching route is found default to index.html
    app.get('/', function(req, res) {
        
        //res.send('Hello from simple-react project');
        connection.query('SELECT * FROM `fibo-sql-data`.data_table;', function(err, data){
            (err)?res.send(err):res.json(data);
        });
    });
    
    app.all('/sqldata', function(req, res) {
            /*router.post('/number', function (req, res) {
            var sqlIp = req.body.bodyIp;
            console.log('sqlIP = ' + sqlIp);
        */
       //router.post('/sqldata', function(req, res) {
           //console.log(req);
       //});
      
      /*app.post('sqldata', function(req, res){
          console.log(req);
      });*/
       
        //res.send('Hello from simple-react project');
        const ip = req.body.sqlIp;
        console.log('sql ip='+ip);
        connection.query('SELECT * FROM `fibo-sql-data`.data_table WHERE ip="94.25.153.219"', function(err, data){
            (err)?res.send(err):res.json({users: data});
        });   
    });
    
   /*
   router.post('/sqldata', function (req, res) {
       console.log(req);
    connection.query('SELECT * FROM `fibo-sql-data`.data_table WHERE ip="94.25.153.219"', function(err, data){
        (err)?res.send(err):res.json({users: data});
    });   
   });
    */
   
};