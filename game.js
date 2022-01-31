let computerSelection;
let playerSelection;
let playerScore = 0; 
let computerScore = 0;

function game() {

    function computerPlay() {
        guess = Math.floor(Math.random() * 3);

        if (guess === 0) {
            return "Rock";
        } else if (guess === 1) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay().toLowerCase();
        playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();

        if (computerSelection == playerSelection) {
            console.log("It's a tie!");
        } else if (
            (computerSelection == "rock" && playerSelection == "scissors") || 
            (computerSelection == "paper" && playerSelection == "rock") ||
            (computerSelection == "scissors" && playerSelection == "paper")
        ) {
            computerScore++; 
            console.log(`Computer's ${computerSelection} beats your ${playerSelection}. You lost that round.
            Score is now You: ${playerScore} vs. Computer: ${computerScore}`);
        } else {
            playerScore++;
            console.log(`Your ${playerSelection} beats their ${computerSelection}. You win that round.
            Score is now You: ${playerScore} vs. Computer: ${computerScore}`);
        }
    }

    

    playRound();

}

game();