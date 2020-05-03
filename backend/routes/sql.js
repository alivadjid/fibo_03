

module.exports = function(app, connection) {
    
    app.get('/', function(req, res) {
        
        
        connection.query('SELECT * FROM `fibo-sql-data`.data_table;', function(err, data){
            (err)?res.send(err):res.json(data);
        });
    });

    app.post('/sqld', function(req) {
        
        var ip = req.body.sIp;
        console.log('app.post ip ='+ip);
        
    });
    app.get('/sqldata', function(req, res) { 
        
        var ip =req._parsedOriginalUrl.query;
        var ip1 = ip.replace(/ID=/g, '');
        
        connection.query('SELECT * FROM `fibo-sql-data`.data_table WHERE ip = "'+ip1+'"', function(err, data){
            (err)?res.send(err):res.json({users: data});
        });
    });

   
};