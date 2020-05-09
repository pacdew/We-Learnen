//used to prompt the user for calculations  **just testing
var answer;
function calc(){
  var word = prompt('what Kind of calculation would you like to perform?');
  if(word == 'addition' || word == 'Adition'){
    var valOne = prompt('Please enter the first value:');
    var valTwo = prompt('Please enter the second value:');
    answer = parseInt(valOne) + parseInt(valTwo);
  }
  else if(word == 'subtraction' || word == 'Subtraction'){
    var valOne = prompt('Please enter the first value:');
    var valTwo = prompt('Please enter the second value:');
    answer = valOne - valTwo;
  }
  else{
    answer = 'No formula available';
  }
  alert(answer);
  console.log(answer);
}
