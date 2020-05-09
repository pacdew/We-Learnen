const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./Site/web-key.pem'),
  cert: fs.readFileSync('./Site/web-cert.pem')
};
const server = https.createServer(options, (req, res) =>{
  if(req.url === '/'){
    res.write(fs.readFileSync('./views/home.html'));
    res.end();
  }
  else if(req.url === '/lists'){
    res.write(fs.readFileSync('./views/home.html'));
    res.end();
  }
  else if(req.url === '/calculation'){
    res.write(fs.readFileSync('./views/calc.html'));
    res.end();
  }
  else if(req.url == '/favicon.ico'){
    //nothing should be displayed...
    //just don't like seeing it in the log
  }
  else if(req.url == '/lists/create'){
    res.write(fs.readFileSync('./views/create.html'));
    console.log(req.url);
    res.end();
  }
  else{
    res.write('No Web-Page found');
    console.log(req.url);
    res.end();
  }
});

server.listen(3050);
console.log('Listening on port 3050...');
fs.readFile
