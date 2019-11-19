var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var  correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do{
guess = prompt("I'm guessing of a number between 1 and 10. What is it?");
guessCount += 1;
  if (parseInt(guess) === randomNumber)
    correctGuess = true;
  
}while (! correctGuess )
document.write("<p>Well done! It only took you " + guessCount + " number of tries to find the answer - " + randomNumber + "!</p>");
