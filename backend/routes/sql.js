var express = require('express');
const { UCS2_GENERAL_MYSQL500_CI } = require('mysql2/lib/constants/charsets');
var router = express.Router();

module.exports = function(app, connection) {
    // if no mathching route is found default to index.html
    app.get('/', function(req, res) {
        
        //res.send('Hello from simple-react project');
        connection.query('SELECT * FROM `fibo-sql-data`.data_table;', function(err, data){
            (err)?res.send(err):res.json(data);
        });
    });

    app.post('/sqld', function(req, res) {
        //console.log(req);
        var ip = req.body.sIp;
        console.log('app.post ip ='+ip);
        //res.session.context = 55;
        //res.redirect('/sqldata');
    });
    app.get('/sqldata', function(req, res) { 
        //console.log(req);
        var ip =req._parsedOriginalUrl.query;
        var ip1 = ip.replace(/ID=/g, '');
        console.log(ip);
        console.log(ip1);
        //console.log(req._parsedOriginalUrl.query);
        //var context = req.session.context;
        //console.log('context is '+ context)
        connection.query('SELECT * FROM `fibo-sql-data`.data_table WHERE ip = "'+ip1+'"', function(err, data){
            (err)?res.send(err):res.json({users: data});
        });
    });

    
   /* 
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
        //console.log(req);
        //res.send('Hello from simple-react project');
       /* const ip = req.body.sIp;
        //const ip = undefined;
        console.log('sql'+ip);
        //console.log(typeof(ip));
        //const ip2 = string(ip);
        //console.log(ip2);
        //const ip = '94.25.153.219';
        //console.log(ip);
        
        //console.log('sql ip='+ ip1);
        //console.log(req);
        
        connection.query('SELECT * FROM `fibo-sql-data`.data_table WHERE ip="'+ip+'"', function(err, data){
            (err)?res.send(err):res.json({users: data});
        });  
        //next(); 
    });*/
/*
    app.all('/sqldata', handler);
    
    function handler(req, res) {
        if (req.method =='POST') {
            router.get('/sqldata', function (req ,res) {
            connection.query('SELECT * FROM `fibo-sql-data`.data_table', function(err, data){
                (err)?res.send(err):res.json({users: data});
            });
        })

            
            
        }
        
    };



    /*
    function handler(req, res){
        if(req.method == "POST") {
            const ip = req.body.sIp;
            //console.log(ip);
            conip(ip);
            
        } else if(req.method == "GET") {


            connect(req, res);
            
             
        }
    };
    //conip = (req, res) => {a = req, console.log('df'+a)};

    connect = (req, res) => {
        //conip = (req, res) => {console.log('aaa'+req)};
        //conip().then(ip => console.log('then ip '+ip)) .then(ip => {
        /*ip1 = conip();/*console.log('aaa'+ip1);*/
        /*
        conip = (req,res) =>{ip = req, console.log('ip'+ip)

        connection.query('SELECT * FROM `fibo-sql-data`.data_table WHERE ip="'+ip+'"', function(err, data){
            (err)?res.send(err):res.json({users: data});
        });
    }
    }
*/
/*
    app.get('/sqldata', function (req, res, next) {
        var sqlIp = req.body.bodyIp;
        console.log(req);
        console.log('sqlIP = ' + sqlIp);
        next();
    }, function (req, res, next) {
        connection.query('SELECT * FROM `fibo-sql-data`.data_table WHERE ip="'+sqlIp+'"', function(err, data){
            (err)?res.send(err):res.json({users: data})
        });
    });*/
   /*
   router.post('/sqldata', function (req, res) {
       console.log(req);
    connection.query('SELECT * FROM `fibo-sql-data`.data_table WHERE ip="94.25.153.219"', function(err, data){
        (err)?res.send(err):res.json({users: data});
    });   
   });
    */
   
};