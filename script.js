const WIN_LIMIT = 5;

let humanScore = 0;
let computerScore = 0;

function checkWinner() {
    if (humanScore === WIN_LIMIT) {
        resultDiv.textContent = "🎉 You win the game!";
        disableButtons();
    } else if (computerScore === WIN_LIMIT) {
        resultDiv.textContent = "💀 Computer wins the game!";
        disableButtons();
    }
}


function disableButtons() {
    const buttons = document.querySelectorAll("button[data-choice]");
    buttons.forEach(btn => btn.disabled = true);
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }

  console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
  checkWinner();
}

console.log("Hello World!");

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log("Computer:", getComputerChoice());

function getHumanChoice() {
  const choice = "rock"; // temporary for testing
  return choice.toLowerCase();
}

console.log("Human:", getHumanChoice());

function game() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log("Final Score:");
  console.log(`You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}

game();

// ⭐ UI wiring — THIS stays
const buttons = document.querySelectorAll("#buttons button");
const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    resultDiv.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}.`;
  });
});
document.getElementById("reset").addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;

    humanScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;

    resultDiv.textContent = "";

    const buttons = document.querySelectorAll("button[data-choice]");
    buttons.forEach(btn => btn.disabled = false);
});

