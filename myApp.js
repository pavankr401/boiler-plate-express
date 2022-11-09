let express = require('express');
let app = express();


let express = require('express');
let app = express();

// app.use(function(req, res, next)
//         {
//           var string = req.method + " " + req.path + " - " + req.ip;
//           console.log(string);

//           next()
//         });

app.get("/now", 
        function(req, res, next)
        {
          var output = new Date().toString;
          req.time = output;

          next();
        },
       function(req, res)
        {
          res.json({"time": req.time});
          res.send({"time": req.time})
        })

app.get("/", 
        function(req, res)
        {
          res.sendFile(__dirname + "/views/index.html");
        })


app.use("/public", express.static(__dirname + "/public"));


app.get("/json",
       function(req, res)
        {
          var response = "Hello json";
          
            if (process.env.MESSAGE_STYLE === "uppercase")
            {
              res.json({"message": response.toUpperCase()});
            }
            else
            {
              res.json({"message": response});
            }
          
        });

console.log(new Date());






 module.exports = app;
