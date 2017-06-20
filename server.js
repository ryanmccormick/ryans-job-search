var express = require('express');
var path = require('path');
var app = express();
var proxy = require('./server/routes/proxy');

app.use(express.static('dist'));

app.use('/ads', proxy);

app.get('*', sendRoot);

function sendRoot(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, './dist') });
}

module.exports = app;
