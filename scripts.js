//function to evaluate player choice against computer choice
function game() {
    //initialize scores
    let playerScore = 0;
    let computerScore = 0;

    //for loop to repeat 5 rounds
    for(let i = 0; i <= 5; i++) {
        //initialize constants of rock paper scissors
        //get computer's choice of rock, paper, or scissors
        function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        let randomChoice = Math.floor(Math.random() * choices.length);
        return choices[randomChoice];
        }
    
        //declare computerSelection and playerSelection variables
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
    
        let playerSelection = prompt("Make your selection (Rock, Paper, Scissors): ").toLowerCase();
        console.log(playerSelection);

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return `Tie! ${playerSelection} matches ${computerSelection}`;
            }   
            else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                return "You win! Rock beats Scissors";
            }
            else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++;
                return "You win! Paper beats Rock";
            }
            else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++;
                return "You win! Scissors beats Paper";
            }
            else {
                computerScore++;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
        }
        console.log(playRound(playerSelection, computerSelection));
        return `Player: ${playerScore} | Computer: ${computerScore}`;
    }
}

