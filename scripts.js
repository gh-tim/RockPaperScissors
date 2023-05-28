//function to evaluate player choice against computer choice
function game() {
    //initialize scores
    let playerScore = 0;
    let computerScore = 0;

    //for loop to repeat 5 rounds
    for (let i = 0; i <= 4; i++) {
        //initialize constants of rock paper scissors
        //get computer's choice of rock, paper, or scissors
        function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        let randomChoice = Math.floor(Math.random() * choices.length);
        return choices[randomChoice];
        }
    
        //declare computerSelection and playerSelection variables
        let computerSelection = getComputerChoice();
    
        let playerSelection = prompt("Make your selection (Rock, Paper, Scissors): ").toLowerCase();
        console.log(playerSelection);

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                console.log(`Tie! You chose ${playerSelection} which matches CPU's ${computerSelection}`);
            }   
            else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore++;
                console.log(`You win! Your ${playerSelection} beats CPU's ${computerSelection}`);
            }
            else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore++;
                console.log(`You win! Your ${playerSelection} beats CPU's ${computerSelection}`);
            }
            else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore++;
                console.log(`You win! Your ${playerSelection} beats CPU's ${computerSelection}`);
            }
            else {
                computerScore++;
                console.log(`You lose! CPU's ${computerSelection} beats your ${playerSelection}`);
            }
        }
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerScore} | CPU: ${computerScore}`);

    }
    if (playerScore > computerScore) {
        console.log("Player wins!");
    }
    else if (computerScore > playerScore) {
        console.log("CPU wins!");
    }
    else if (playerScore === computerScore) {
        console.log("It's a tie!");
    }
    else {
        console.log("Error! Please refresh the page");
    }
}

