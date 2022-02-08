let computerSelection;
let playerSelection;
let playerScore = 0; 
let computerScore = 0;

function game() {
    const scoreInfo = document.querySelector(".score-info");
    const scoreMessage = document.createElement('p');
    scoreInfo.appendChild(scoreMessage);
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(playerSelection = `${button.id}`, computerSelection);
            checkForWinner();
        });
    });

    function checkForWinner() {
        if (playerScore > 4 || computerScore > 4) {
            declareWinner();
        }
    }

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

    function declareWinner () {
        if (playerScore > computerScore) {
            scoreMessage.textContent = "You win!";
        } else {
            scoreMessage.textContent = "You lose!";
        }
    }
    
    function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay().toLowerCase();

        if (computerSelection == playerSelection) {
            // results.textContent = "It's a tie!";
            updateScore();
            scoreMessage.textContent = "It's a tie!";
        } else if (
            (computerSelection == "rock" && playerSelection == "scissors") || 
            (computerSelection == "paper" && playerSelection == "rock") ||
            (computerSelection == "scissors" && playerSelection == "paper")
        ) {
            computerScore++; 
            scoreMessage.textContent = `Computer's ${computerSelection} beats your ${playerSelection}. You lost that round.`; 
            updateScore();
        } else {
            playerScore++;
            scoreMessage.textContent = `Your ${playerSelection} beats their ${computerSelection}. You win that round.`;
            updateScore();
        }
    }

    function updateScore() {
        const scoreTracker = document.querySelector(".score-tracker");
        scoreTracker.textContent = `Score is now You: ${playerScore} vs. Computer: ${computerScore}`;
    }
};

game();