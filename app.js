var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello Jenkins 5");
});

app.listen(4000);