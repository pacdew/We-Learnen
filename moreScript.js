var myName = 'Victor Manzanera';
var adjective = [" is \"cool\".", " is dumb!"];
var random = Math.ceil(Math.random() * 2);
if(random == 1){ //"victor Manzanera is dumb."
  myName += adjective[1];
}
else{ //"victor Manzanera is cool."
  myName += adjective[0];
}
console.log(myName);
console.log(random);

var message = window.prompt("please enter a message");

console.log(message);

/* lists out every character in the string
for(var i = 0; i < myName.length; i++){
  console.log(myName[i]);
}
*/
