// Create web server  with node.js and express
// Run with node comments.js
// Access in browser at http://localhost:3000
// 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var comments = [{name: 'John', comment: 'Hello world!'}];

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.post('/comments', function(req, res) {
  var newComment = req.body;
  comments.push(newComment);
  res.status(201).send(newComment);
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});