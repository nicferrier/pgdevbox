var data = { "a": "10", "b": "20" };
var pg = require('pg'); 
var client = new pg.Client("tcp://vagrant@localhost/vagrant"); 
client.connect(
    function (err) { 
        if (err) { 
            return console.error("bah!"); 
        } 
        else { 
            return client.query(
                "insert into a (a) values ('" + JSON.stringify(data) + "'::json)", 
                function (err, res) { 
                    if (err) { 
                        return console.error("whoops!"); 
                    } 
                    else { 
                        client.end(); 
                        return res;
                    } 
                } 
            ); 
        } 
    } 
); 

