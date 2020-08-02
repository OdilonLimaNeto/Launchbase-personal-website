const express = require('express');
const nunjucks = require('nunjucks');
const database = require('./database')
const server = express();

server.use(express.static('public'));



server.set('view engine', 'njk');

// CONFIGURATIONS
nunjucks.configure("views", {
express: server
});


// ROUTES
server.get('/', function(request, response){

  const about = {
    avatarURL: '/assets/ODILON.jpeg',
    name: 'Odilon Lima',
    links: [
      { name: '/assets/github.png', url: 'https://github.com/OdilonLimaNeto' },
      { name: '/assets/facebook.png', url: 'https://www.facebook.com/profile.php?id=100009148764045' },
      { name: '/assets/linkedIn.png', url: 'https://www.linkedin.com/in/odilonlimaneto/' }
    ],
  }
  return response.render('about', { about });
});

server.get('/videos', function(request, response){
  return response.render('videos', { videos: database });
});



// PORT
server.listen(5000, function() {
  console.log('Server is running');
});