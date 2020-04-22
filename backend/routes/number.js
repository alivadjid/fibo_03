var express = require('express');
const { default: Axios } = require('axios');
var router = express.Router();
var app = express();

const axios = require('axios');
var bodyParser= require('body-parser');

app.use(bodyParser.json());
router.post('/', function (req, res) {
  var countValue = req.body;
  console.log('CountValue is', countValue);
});


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