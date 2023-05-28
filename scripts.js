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

//function to evaluate player choice against computer choice
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Tie! ${playerSelection} matches ${computerSelection}`;
    }   
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

//print round results
console.log(playRound(playerSelection, computerSelection));



