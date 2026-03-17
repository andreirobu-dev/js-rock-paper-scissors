// Play a round
    // Get computer choice
    // Get player choice
    // Pick a winner

function getComputerChoice () {
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

console.log(getPlayerChoice());