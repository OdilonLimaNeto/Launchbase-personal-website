const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

server.use(express.static('public'));



server.set('view engine', 'html');

// CONFIGURATIONS
nunjucks.configure("views", {
express: server
});



// ROUTES
server.get('/', function(request, response){
  return response.render('index');
});

server.get('/videos', function(request, response){
  return response.render('videos');
});



// PORT
server.listen(5000, function() {
  console.log('Server is running');
});