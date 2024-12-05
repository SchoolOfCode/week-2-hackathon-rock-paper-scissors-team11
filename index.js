let score = 0;
let playAgain = false; 

// Build array of "Rock", "Paper" and "Scissors" ✅
const game = [
    "rock",
    "paper",
    "scissors"
]

//let usersGuess = prompt ("Guess between Rock, Paper and Scissors").toLowerCase();
console.log (game)
// Build a loop to randomly select between three options
//function rockPaperScissors (score, playAgain, game){

    while (playAgain) {
    const generatedChoice = game [Math.floor(Math.random() * game.length)];
    let usersGuess = prompt ("Guess between Rock, Paper and Scissors").toLowerCase();
    
    //if (usersGuess == generatedChoice); {
      //  alert("Draw, Try again");
    //} else {}

    switch (true) {
        case usersGuess == generatedChoice:
            alert ("It's a Tie!");
            break;
            case usersGuess == "scissors" && generatedChoice == "paper":
            case usersGuess == "rock" && generatedChoice == "scissors":
            case usersGuess == "paper" && generatedChoice == "rock":
            alert (`${generatedChoice} You win`);
            break;
            default:
            alert (`${generatedChoice} You loss, try again!`);
   }
     playAgain = confirm("Would you like to play again?");
     
    }
       // }

//rockPaperScissors(score, playAgain, game);
//playAgain = confirm("Would you like to play again?");

//console.log (generatedChoice);

console.log(game[2]);
// Build prompt to user to select between three options
// Build if else statements to compare three options chosen by computer and user
// Build alerts for winning and losing
// Build play again option to continue game or game over.
