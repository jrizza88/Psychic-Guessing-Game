

// Defining variables
var Letters = [
  'a','b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v',
  'w','x','y','z'];

// scoreboard counters and containers
var userLose = 0;
var userWin = 0;
var GuessesLeft = 13;
var Guessed = [];
var reset = function() {
        GuessesLeft = 13;
        Guessed = [];
        };

// initializing the game
// list of variables for computer to randomize
function initializeGame() {
var words = ['Argentina', 'Brazil', 'Bulgaria', 'Canada', 'Cameroon', 'Cuba', 'Haiti', 'Nigeria', 'India', 
        'Kazakhstan', 'Tunisia', 'Eritrea', 'Indonesia', 'Turkey','Greece', 'Spain', 
        'Switzerland', 'Japan', 'Israel', 'Egypt', 'Italy', 'Australia', 'Morocco', 'Vietnam', 
        'Cambodia', 'Mongolia', 'Lesotho', 'Iran', 'China', 'Samoa', 'Iceland', 'Poland'];
var allowedGuesses = '10';
var correctGuesses = [];
var wrongGuesses = [];
var guessCounter = word.length;

var underscores+= '';
for (var i =0; i < word.length; i++) {
  underscores+= '_';
}

  document.getElementbyID('word').innerHTML = underscores;
}








// When the user presses the key it records the keypress and then sets it to userGuess
    document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var compGuess = Letters[Math.floor(Math.random() * Letters.length)];

        console.log('the user pressed' + event.keyCode)
         
        // user chooses letter
        
        if (Letters.indexOf(userGuess) > -1){
          console.log("Correct guess!");
          document.getElementById('wins').innerHTML= "<p>You are correct! whoop whoop!</p>" + 
          "<p>wins: " + userWin + "</p>" + 
          "<p>losses: " + userLose + "</p>";
          Guessed.push(userGuess);
          GuessesLeft--;
        }
        else {
          console.log("Not a valid input!")
        }
        
        if (compGuess === userGuess) {
          userWin++;
          reset();
        }
        
        
        //Game reset condition for "game over"
        if(GuessesLeft == 0){
          userLose++;
          document.getElementById("wins").innerHTML="<p>You're out of guesses! Try again mate!</p>";
          reset();
        }
          // counters and containers
         
          console.log("total wins: " + userWin);
          console.log("total losses: " + userLose);
          console.log("Guesses left: "+ GuessesLeft);
          console.log("Guessed: " + Guessed);
        
          document.querySelector('#wins').innerHTML=
          '<p>Wins: ' + userWin + '</p>' +
          '<p>Losses: ' + userLose + '</p>' +
          '<p>Guesses Left: ' + GuessesLeft + '</p>';
        
        };
        
        