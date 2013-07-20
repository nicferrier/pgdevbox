var pg = require('pg'); 
var client = new pg.Client("tcp://vagrant@localhost/vagrant"); 
client.connect(
    function (err) { 
        if (err) { 
            return console.error("bah!"); 
        } 
        else { 
            return client.query(
                "select * from a where a ->> 'a' = '10'", 
                function (err, res) { 
                    if (err) { 
                        return console.log("whoops!"); 
                    } 
                    else { 
                        var row = res.rows[0]; 
                        client.end(); 
                        return console.log("result! ", row["a"].a); 
                    } 
                } 
            ); 
        } 
    } 
); 

