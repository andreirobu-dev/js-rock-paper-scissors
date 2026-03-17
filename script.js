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

console.log(getComputerChoice());