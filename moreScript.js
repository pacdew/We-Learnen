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
