const express = require('express');
const nunjucks = require('nunjucks');
const database = require('./database');
const { query } = require('express');
const server = express();

server.use(express.static('public'));



server.set('view engine', 'njk');

// CONFIGURATIONS
nunjucks.configure("views", {
express: server,
autoescape: false,
noCache: true
});


// ROUTES
server.get('/', function(request, response){

  const about = {
    avatarURL: '/assets/ODILON.jpeg',
    name: 'Odilon Lima',
    hole: 'Estudante de Sistemas de informação no <a href="https://www.uninorteac.edu.br/" target="blank">Centro universitário uninorte</a>',
    technology: 'Entusiasta das tecnologias <a id="node" href="https://nodejs.org/en/" target="blank">Node.js</a>, <a id="react" href="https://pt-br.reactjs.org/" target="blank">React</a> e <a id="react-native" href="https://reactnative.dev/" target="blank">React Native</a>',
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

server.get('/video', function(request, response) {
  const id = request.query.id;

  const video = database.find(function(video) {
    if(video.id == id) {
      return true;
    }
})

if(!video) {
  return send('Video not found')
}

return response.render('video', { card: video });
});


// PORT
server.listen(5000, function() {
  console.log('Server is running');
});