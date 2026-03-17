let playerScore = 0;
let computerScore = 0;

function playGame() {
    let rounds = 5;
    for (let round = 0; round < rounds; round++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
}

function playRound(playerChoice, computerChoice) {
    console.log(`Player picked.. ${playerChoice}`);
    console.log(`Computer picked.. ${computerChoice}`);
    if (playerChoice === computerChoice) {
        console.log("Tie!");
    } else if ((playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "paper" && computerChoice === "rock")
        || (playerChoice === "scissors" && computerChoice === "paper")) {
        playerScore++;
        console.log("Player Wins!");
    } else {
        computerScore++;
        console.log("Computer Wins!");
    }
    console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    console.log("");
}

function getComputerChoice() {
    let computerChoice = "";
    randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        computerChoice = "rock";
    } else if (randomNumber <= 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getPlayerChoice() {
    while (true) {
        let playerChoice = prompt("Your Choice(rock, paper or scissors): ").toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice == "scissors") {
            return playerChoice;
        }
    }
}

playGame();