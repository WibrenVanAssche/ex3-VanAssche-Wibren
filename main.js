
var express = require("express");
var app = new express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 



app.post('/som', function (req, res) {
	console.dir(req.body);  
	var som = req.body.bodysom;
	
        var solution = eval(req.body.bodysom);
        console.dir(solution);
        res.send(String(solution));
})


app.listen(4567);


console.log("wat is dit zelfs");