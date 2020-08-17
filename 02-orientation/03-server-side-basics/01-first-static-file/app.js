var express = require('express');

var app = express();

app.use(express.static('static'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, '127.0.0.1');