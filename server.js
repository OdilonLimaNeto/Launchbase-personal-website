const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

server.set('view engine', 'html');
server.use(express.static('public'));
// CONFIGURATIONS
nunjucks.configure("/src/views", {
express: server
});



// ROUTES
server.get('/', function(request, response){
  return response.render('index');

})

// PORT
server.listen(5000, function() {
  console.log('Server is running');
});