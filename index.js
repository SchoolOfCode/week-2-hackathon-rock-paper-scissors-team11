let score= 0;
let playAgain = false;

// Build array of "Rock", "Paper" and "Scissors" ✅
const game = [
    "rock",
    "paper",
    "scissors"
]
//Ask user if they want to play game. ✅
playAgain = confirm("Do you want to play rock, paper, scissors?");

// Randomly select choice for computer ✅
while (playAgain) {
    const generatedChoice = game [Math.floor(Math.random() * game.length)];
    //Get user to select a user name.
    const userName = prompt ("Whats your name?").toLocaleUpperCase();
    //Prompt user for their choice ✅
    const usersGuess = prompt ("Guess between Rock, Paper and Scissors:").toLowerCase();
    
  
// Determine the outcome ✅
    switch (true) {
        case usersGuess === generatedChoice:
            alert (`It's a Tie! You both chose ${usersGuess}`);
            break;
            case usersGuess === "rock" && generatedChoice === "scissors":
            case usersGuess === "paper" && generatedChoice === "rock":
            case usersGuess === "scissors" && generatedChoice === "paper":
                alert (`You Win! ${userName} chose ${usersGuess}, and the computer chose ${generatedChoice}`);
                score++;
            break;
            default:
                alert (`You Lose! ${userName} chose ${usersGuess}, and the computer chose ${generatedChoice}`);
                break;
    }
    // Add way to restart loop ✅
    playAgain = confirm("Do you want to play again?");

    alert(`Thanks for playing! Your score is ${score}.`)
}