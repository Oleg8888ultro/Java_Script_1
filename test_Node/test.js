var app = require('express')();
var http = require('http').Server(app);

// load html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/my.html');
});

// web server
var port = process.env.PORT || 3000;
http.listen(port, function () {
    console.log('listening web server');
});