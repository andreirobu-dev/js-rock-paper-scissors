let playerScore = 0;
let computerScore = 0;

function playGame() {
    let rounds = 5;
    for (let round = 0; round < rounds; round++) {
        playRound(getPlayerChoice(), getComputerChoice());
    }
}

// Play a round, check for win conditions
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

// Get a random choice from the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];

    // Get a random index
    let randomIndex = Math.floor(Math.random() * choices.length);
    
    return choices[randomIndex];
}

// Get a choice from the player
function getPlayerChoice() {
    while (true) {
        let playerChoice = prompt("Your Choice(rock, paper or scissors): ").toLowerCase();
        // Validate the result
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice == "scissors") {
            return playerChoice;
        }
    }
}

playGame();