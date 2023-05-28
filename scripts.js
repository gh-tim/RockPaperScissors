//initialize constants of rock paper scissors
const choices = ["rock", "paper", "scissors"];

//get computer's choice of rock, paper, or scissors
function getComputerChoice([choices]) {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

console.log(getComputerChoice([choices]));