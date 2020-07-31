const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

server.use(express.static('public'));



server.set('view engine', 'njk');

// CONFIGURATIONS
nunjucks.configure("views", {
express: server
});



// ROUTES
server.get('/', function(request, response){
  return response.render('about');
});

server.get('/videos', function(request, response){
  return response.render('videos');
});



// PORT
server.listen(5000, function() {
  console.log('Server is running');
});