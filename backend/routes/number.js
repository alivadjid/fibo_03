var express = require('express');
const { default: Axios } = require('axios');
var router = express.Router();
var app = express();
var http = require('http');
const axios = require('axios');
var bodyParser= require('body-parser');
// Calculate 
//app.use(bodyParser.json());
router.post('/', function (req, res) {
  var countValue = req.body;
  var Value = Calculate(+countValue.body);
    function Calculate(n) {
      if (n == 1) { c = 1 }
      else if ( n== 2) { c = 1}
      else{
        var a = 1, b =1, c = 0;
        for(i=2; i < n; i++) {
          c = a + b;
          a = b;
          b = c
        }   
      }
    return c;
    };  

  console.log('CountValue is', Value);
  res.end(JSON.stringify(Value));
});




// get ip address
/*
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    console.log("My public IP address is: " + ip);
  });
});
*/

/*
router.get('/', function(req, res, next) {
  Front = req.frontNumber;
  res.send('Data from back' );
  console.log(Front);
});*/
/* GET home page. */
/*
router.post('http://localhost:3001/number', (req,res)=>{
  Front = req.frontNumber;
  console.log(Front);
  res.send(Front);
})

/*
axios.get('http://localhost:3000')
  .then(function (res) {
    console.log(res.data)
  });

axios.get('http://localhost:3001/number')
  .then(function (responce) {
  // handle success
  console.log(responce);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    //always executed
  });
*/
/*
router.get('/', function(req, res, next) {
  res.send('Data from front' );
  
});
*/

module.exports = router;