let playerScore = 0;
let computerScore = 0;

const choiceButtons = document.querySelectorAll(".choice");
const result = document.createElement("div");
const body = document.querySelector("body");
const playerPick = document.createElement("div");
const computerPick = document.createElement("div");
const output = document.createElement("div");
const score = document.createElement("div");

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice());
    });
})

// Play a round, check for win conditions
function playRound(playerChoice, computerChoice) {
    playerPick.textContent = `Player picked.. ${playerChoice}`;
    computerPick.textContent = `Computer picked.. ${computerChoice}`;

    if (playerChoice === computerChoice) {
        result.textContent = "Tie!";
    } else if ((playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "paper" && computerChoice === "rock")
        || (playerChoice === "scissors" && computerChoice === "paper")) {
        playerScore++;
        result.textContent = "Player wins!";
    } else {
        computerScore++;
        result.textContent = "Computer wins!";
    }

    score.textContent = `Score: Player ${playerScore} - Computer ${computerScore}`;
    output.appendChild(playerPick);
    output.appendChild(computerPick);
    output.appendChild(result);
    output.appendChild(score);
    body.appendChild(output);
}

// Get a random choice from the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    // Get a random index
    let randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}