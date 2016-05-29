// Defining variables
var Letters = [
  'a','b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v',
  'w','x','y','z'];

// scoreboard counters and containers
var userLose = 0;
var userWin = 0;
var guessesLeft = 13;
var guessed = [];

// Tally total and displaying them in HTML 
"<p>wins: " +  userWin + "</p>" +
"<p>losses: " + userLose +  "</p>";


// Verify user input against allowedLetters array

  // sets computer choicess
  

  // This sets the computer guess equal to the random.

  // When the user presses the key it records the keypress and then sets it to userguess
  document.onkeyup = function guessChoices(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerChoices = Math.random();
    var options = Math.floor(computerChoices*Letters.length);
    var compGuess = computerChoices[options];
 
// user chooses letter
if (compGuess === userGuess) {
  userWin++;
// for winning choices
  documentgetElementbyID("wins").innerHTML= "<p>You are correct! whoop whoop!</p>" + 
    "<p>wins: " + win + "</p>" + 
    "<p>losses: " + lose + "</p>";

//for tracking losing choices
}else {
  userLose++;
  document.getElementbyID("#wins").innerHTML ="<p>Wrong! Try again </p>" +  
    "<p>wins</p>" + win + "</p>" + 
    "<p>losses: "  + lose + "</p>";
}
// Game over condition set
  if (guessesLeft===13) {
    document.getElementbyID("#wins").innerHTML="<p>You're out of guesses! Try again mate!</p>";
  }
};
  // counters and containers
 
        console.log("total wins: " + userWin);
        console.log("total losses: " + userLose);
        console.log("guesses left: "+ guessesLeft);

        document.querySelector('#wins').innerHTML=
        '<p>Wins: ' + userWin + '</p>' +
        '<p>Losses: ' + userLose + '</p>' +
        '<p>Guesses Left: ' + guessesLeft + '</p>';



