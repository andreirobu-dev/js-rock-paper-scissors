// Play a round
    // Get computer choice
    // Get player choice
    // Pick a winner

function playRound(playerChoice, computerChoice) {
    console.log(`Player picked.. ${playerChoice}`);
    console.log(`Computer picked.. ${computerChoice}`);
    if (playerChoice === computerChoice) {
        console.log("Tie!");
    } else if ((playerChoice === "rock" && computerChoice === "scissors")
        || (playerChoice === "paper" && computerChoice === "rock")
        || (playerChoice === "scissors" && computerChoice === "paper")){
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
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
    while(true) {
        let playerChoice = prompt("Your Choice(rock, paper or scissors): ").toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice == "scissors") {
            return playerChoice;
        }
    }
}

playRound(getPlayerChoice(), getComputerChoice());