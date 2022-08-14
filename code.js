// Generates random choice for computer player
// @return {string} - computer's choice
function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.round(Math.random()*2)].toLowerCase()
}


// Asks and checks player's input
// @return {string} - player's input
function checkPlayerChoice() {
    let choice = prompt("Please choose rock, paper, or scissors").toLowerCase()
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Please choose rock, paper, or scissors").toLowerCase()
    }
    return choice
}


// Plays a round of rock-paper-scissors
// @param {string} playerSelection - player's choice
// @param {string} computerSelection - computer's choice
// @return {string} - notifies who won the round
function playRound(playerSelection, computerSelection) {
    let losePhrase = `You lose, ${computerSelection} beats ${playerSelection}`
    let winPhrase = `You win, ${playerSelection} beats ${computerSelection}`
    let tiePhrase = "Tie!"

    switch (true) {
        case (playerSelection == computerSelection):
            // console.log(tiePhrase)
            return tiePhrase
            break
        case (playerSelection == "rock" && computerSelection == "paper"):
            // console.log(losePhrase)
            return losePhrase
            break
        case (playerSelection == "paper" && computerSelection == "scissor"):
            // console.log(losePhrase)
            return losePhrase
            break
        case (playerSelection == "scissors" && computerSelection == "rock"):
            // console.log(losePhrase)
            return losePhrase
            break
        default:
            // console.log(winPhrase)
            return winPhrase
    }
}


// Play rounds until a certain score is reached for either player
// @return {string} - Tells who won the game after the score limit is reached
function game() {
    let computerScore = 0;
    let playerScore = 0;
    const scoreLimit = 5;
    while (computerScore < scoreLimit && playerScore < scoreLimit) {
        let playerChoice = checkPlayerChoice()
        let computerChoice = getComputerChoice()

        if (playRound(playerChoice, computerChoice).includes("win")){
            playerScore ++
        } else if (playRound(playerChoice, computerChoice).includes("lose")) {
            computerScore ++
        } 
        console.log(`Player Score: ${playerScore} \nComputer Score: ${computerScore}`)
    }

    switch (true) {
        case (computerScore == scoreLimit):
            console.log("Computer Wins")
            return "Computer wins"
            break
        default:
            console.log("Player Wins")
            return "Player wins"
    }
}

// game() <- type this in console to initiate game