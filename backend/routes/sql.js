module.exports = function(app, connection) {
    /** Show all datas in SQL */
    app.get('/', function(req, res) {
        connection.query('SELECT * FROM `bl1lr5n2mrys55le`.fiboExamp_sql;', function(err, data){
            (err)?res.send(err):res.json(data);
        });
    });

    /** Get response to axios.get from sqldata.js
     * @param {number} ip client ip
     */
    app.get('/sqldata', function(req, res) { 
        
        
        let ip = req._parsedOriginalUrl.query.replace(/ID=/g, '');
        
        connection.query('SELECT * FROM `bl1lr5n2mrys55le`.fiboExamp_sql WHERE ip = "'+ip+'"', function(err, data){
            (err)?res.send(err):res.json({users: data});
        });
    });

};