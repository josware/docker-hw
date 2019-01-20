var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hi everyone!');
});

app.listen(2500, function () {
  console.log('Hola, demo app (docker-hw) succesfully launched and lisening at port 2500');
});