var url = 'http://www.csusbcooyote.net/log';
const EventEmitter = require('events');

class Logger extends EventEmitter{
   log(message) { //now refered to as a method
    //send http request
    console.log(message);

    //raised event
    this.emit('messageLogged', {id: 1, url: 'http://'});
  }
  logger(){
    this.emit('messageLogged', {id: 2});
  }
};

//module.exports.outsideName = internalName;
module.exports = Logger; //exports a single function from the logger file.  example    log() only
//module.exports.logger = log; //exports functions from the logger file. example    logger.log() or logger.explain()
//filesystem
//http
//OS
//Path *
//process
//query Strings
//Stream
