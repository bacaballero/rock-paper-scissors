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

        if (computerSelection == playerSelection) {
            // results.textContent = "It's a tie!";
            console.log("It's a tie!");
        } else if (
            (computerSelection == "rock" && playerSelection == "scissors") || 
            (computerSelection == "paper" && playerSelection == "rock") ||
            (computerSelection == "scissors" && playerSelection == "paper")
        ) {
            computerScore++; 
            /*results.textContent = `Computer's ${computerSelection} beats your ${playerSelection}. You lost that round.
            Score is now You: ${playerScore} vs. Computer: ${computerScore}`; */
            console.log(`Computer's ${computerSelection} beats your ${playerSelection}. You lost that round.
            Score is now You: ${playerScore} vs. Computer: ${computerScore}`);
        } else {
            playerScore++;
            /*results.textContent = `Your ${playerSelection} beats their ${computerSelection}. You win that round.
            Score is now You: ${playerScore} vs. Computer: ${computerScore}`;*/
            console.log(`Your ${playerSelection} beats their ${computerSelection}. You win that round.
            Score is now You: ${playerScore} vs. Computer: ${computerScore}`);
        }
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(playerSelection = `${button.id}`, computerSelection);
        });
    });



};

game();