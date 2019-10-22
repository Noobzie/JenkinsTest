var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello Jenkins 2");
});

app.listen(4000);