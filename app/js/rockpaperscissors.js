////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if ((playerMove=="rock" && computerMove=="scissors") || (playerMove=="scissors" && computerMove=="paper") || (playerMove=="paper" && computerMove=="rock")) {
      winner="player";
    } else if ((computerMove=="rock" && playerMove=="paper") || (computerMove=="scissors" && playerMove=="paper") || (computerMove=="paper" && playerMove=="rock")) {
      winner="computer";
    } else {
      winner="tie";
    }
    return winner;
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var gameTie = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won 'x' times.
    for (var i = 1; i > 0; i += 1) {
      if ((playerWins === x) || (computerWins === x))  {
        i = -100;
        break;
      } //this is dangerous code because the user might enter a negative value for x and this will loop infinitely- what's the better way to achieve this?
      var winner = getWinner(getPlayerMove(),getComputerMove());
      console.log("Result: "+winner);
      switch (winner) {
        case "player":
          playerWins += 1;
          break;
        case "computer":
          computerWins += 1;
          break;
        default:
          gameTie += 1;
          i-=1;
      }
    }
    return [playerWins, computerWins];
}
