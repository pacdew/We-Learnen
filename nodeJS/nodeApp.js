//Writing in javascript
/*
const path = require('path');
const log = require('./logger'); //node assumes a js file is being included
//make the function a constant so it is not accidentally overwritten.
log('passed message.');

var pathObj = path.parse(__filename);
console.log(pathObj);
*/

/*
const os =require('os');

var osType = os.type();
//console.log(osType + '\n');
console.log(`Operating System Type: ${osType}`);
*/

//FILESYSTEM
/*
const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files);
fs.readdir('./', function(err, files){
  if (err) console.log('ERROR', err);
  else console.log('Result', files);
});
*/

//EMITTER
/*
const EventEmitter = require('events');
// both upercase^ means class...
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
  console.log('Listener Called ', arg);
});
logger.log('message');
logger.logger();
*/

//HTTP
/*
const http = require('http');

const server = http.createServer((req, res) => {

  if(req.url === '/'){
    res.write('Hello World'); //written to webpage...
    console.log(req.url);
    res.end();
  }
  else if(req.url === '/other') {
    res.write(JSON.stringify([1, 2, 3]));
    console.log(req.url);
    res.end();
  }
  else if(req.url === '/favicon.ico'){
    console.log(req.url);
    res.write('What Is This Place???');
    res.end();
  }
  else{
    console.log(req.url);
  }
}); //contains eventEmitter functionality

server.listen(3000);

console.log('Listening on port 3000...');
*/
