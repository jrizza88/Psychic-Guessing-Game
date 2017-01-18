

// Defining variables
var letters = [
  'a','b','c','d','e','f','g','h','i','j','k',
  'l','m','n','o','p','q','r','s','t','u','v',
  'w','x','y','z'];

// scoreboard counters and containers
var userLose = 0;
var userWin = 0;
var guessesLeft = 13;
var guessed = [];
var reset = function() {
        guessesLeft = 13;
        guessed = [];
        };

// Total tally and displaying them in HTML
"<p>wins: " + userWin + "</p>" +
"<p>losses: " + userLose + "</p>";



// When the user presses the key it records the keypress and then sets it to userGuess
    document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var compGuess = letters[Math.floor(Math.random() * letters.length)];

        console.log('the user pressed' + event.keyCode)
         
        // user chooses letter
        
        if (letters.indexOf(userGuess) > -1){
          console.log("wrong guess?!");
          document.getElementById('wins').innerHTML= "<p>You are correct! whoop whoop!</p>" + 
          "<p>wins: " + userWin + "</p>" + 
          "<p>losses: " + userLose + "</p>";
          guessed.push(userGuess);
          guessesLeft--;
        }
        else {
          console.log("Not a valid input!")
        }
        
        if (compGuess === userGuess) {
          userWin++;
          reset();
          console.log("Good guess!");
        }
        
        
        //Game reset condition for "game over"
        if(guessesLeft == 0){
          userLose++;
          document.getElementById("wins").innerHTML=
          "<p>You're out of guesses! Try again mate!</p>";
          reset();
        }
          // counters and containers
         
          console.log("total wins: " + userWin);
          console.log("total losses: " + userLose);
          console.log("Guesses left: "+ guessesLeft);
          console.log("Guessed: " + guessed);
        
          document.querySelector('#wins').innerHTML=
          '<p>Wins: ' + userWin + '</p>' +
          '<p>Losses: ' + userLose + '</p>' +
          '<p>Guesses Left: ' + guessesLeft + '</p>';
        
        };
        
        