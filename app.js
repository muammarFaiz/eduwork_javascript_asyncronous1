// jshint esversion: 8
// buat localhost syarat untuk GET newsapi

const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('server running port 3000');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.js');
});
