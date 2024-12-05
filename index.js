let score= 0;
let playAgain = true;

// Build array of "Rock", "Paper" and "Scissors" ✅
const game = [
    "Rock",
    "Paper",
    "Scissors"
]
console.log (game)
// Build a loop to randomly select between three options
//while (playAgain == true); {
    const generatedChoice = Math.floor(Math.random() * game.length);
    let usersGuess = prompt ("Guess between Rock, Paper and Scissors", (""));
    if (usersGuess == generatedChoice);
//}


console.log (generatedChoice)
// Build prompt to user to select between three options
// Build if else statements to compare three options chosen by computer and user
// Build alerts for winning and losing
// Build play again option to continue game or game over.
