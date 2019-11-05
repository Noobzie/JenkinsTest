var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Does jenkins still work?");
});

app.listen(4000);