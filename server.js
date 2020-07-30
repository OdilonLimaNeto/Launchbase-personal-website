const express = require('express');
const server = express();

// ROUTES
server.get('/', function(request, response){
  return response.send('hello Word');

})

// PORT
server.listen(5000, function() {
  console.log('Server is running');
});