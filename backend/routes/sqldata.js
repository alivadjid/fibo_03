
var express = require('express');
var app = express();

app.use (cors());
app.use(function(req, res, next) { // req - объекту запроса.  объекту ответа (res)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next(); // Следующая функция промежуточной обработки
  });



/*
var express = require('express');

var router = express.Router();


router.post('/', function(req, res) {
    //console.log(req);
});
/*
module.exports = function(app, connection) {
app.get('/', function(req, res) {
        
    //res.send('Hello from simple-react project');
    connection.query('SELECT * FROM `fibo-sql-data`.data_table;', function(err, data){
        (err)?res.send(err):res.json(data);
    });
});
};
*/