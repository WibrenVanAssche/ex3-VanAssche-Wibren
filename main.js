
var express = require("express");
var app = new express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function (req, res) {
    res.send('typ je opdracht in de adresbalk vb: /calc/2+5');
    
});
/*
app.get("/", function (req, res) {
    // __dirname = The name of the directory that the currently executing script resides in. https://nodejs.org/docs/latest/api/globals.html#globals_dirname
   res.sendFile( __dirname + '/index.html');
   });
   */

app.post('/calc', function (req, res) {
        
	console.dir(req.body);  
	var calc = req.body.bodycalc;
	
        var antwoord = eval(req.body.bodycalc);
        console.dir(antwoord);
        res.send(String(antwoord));
});

app.post('/calc/:opdracht',function(req, res){ 
        var opdrachtlezen = req.params.opdracht;
        console.log(req.params.opdracht);
        var antwoord = eval(req.params.opdracht);
        console.log(antwoord);
        res.send(String(antwoord));
});


app.listen(4567);


