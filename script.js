const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "It's a Draw!";
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "rock".toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
