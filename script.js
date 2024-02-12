// NEW SOLUTION
const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

let computerSelection = getComputerChoice();

const allButtons = document.querySelectorAll("button");

const buttonsSection = document.querySelector("#buttons");

const userScoreParagraph = document.querySelector(".user-score");
const computerScoreParagraph = document.querySelector(".computer-score");

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection == "rock") {
    userScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "It's a Draw!";
  } else {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const div = document.createElement("div");

const gameFinish = function () {
  buttonsSection.removeChild(userScoreParagraph);
  buttonsSection.removeChild(computerScoreParagraph);
  userScore = 0;
  computerScore = 0;
};

allButtons.forEach((e) => {
  e.addEventListener("click", (el) => {
    div.textContent = playRound(
      el.target.textContent.toLowerCase(),
      computerSelection
    );
    if (userScore === 5) {
      gameFinish();
      div.textContent = "Game finished. You win!";
    } else if (computerScore === 5) {
      gameFinish();
      div.textContent = "Game finished. You lose!";
    } else {
      userScoreParagraph.textContent = `Your score: ${userScore}`;
      computerScoreParagraph.textContent = `Computer score: ${computerScore}`;
      buttonsSection.appendChild(div);
      computerSelection = getComputerChoice();
    }
  });
});
