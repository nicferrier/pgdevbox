var pg = require('pg');
var client = new pg.Client("tcp://vagrant@localhost/vagrant");
client.connect(
    function (err) { 
        if (err) { 
            return console.error("bah!"); 
        }
        else {
            return client.query (
                "create table b (id integer, txt text);", 
                function (err, res) { 
                    if (err) { 
                        return console.log("whoops!");
                    } 
                    else { 
                        console.log("result:" , res);
                        client.end();
                        return "created";
                    }
                }
            );
        }
    }
);
