

module.exports = function(app, connection) {
    // if no mathching route is found default to index.html
    app.get('/', function(req, res) {
        
        //res.send('Hello from simple-react project');
        connection.query('SELECT * FROM `fibo-sql-data`.data_table;', function(err, data){
            (err)?res.send(err):res.json(data);
        });
    });
    app.get('/sqldata', function(req, res) {
        
        //res.send('Hello from simple-react project');
        connection.query('SELECT * FROM `fibo-sql-data`.data_table WHERE ip="94.25.153.219" ', function(err, data){
            (err)?res.send(err):res.json({users: data});
        });
    });
    
   
};