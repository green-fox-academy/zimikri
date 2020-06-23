var express = require('express');

var app = express();

app.use('/assets', express.static('static/assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/static/index.html');
});

app.listen(3000, '127.0.0.1');