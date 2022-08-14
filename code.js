function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.round(Math.random()*2)].toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    let losePhrase = `You lose, ${computerSelection} beats ${playerSelection}`
    let winPhrase = `You win, ${playerSelection} beats ${computerSelection}`
    let tiePhrase = "Tie! No one wins"
    
    switch (true) {
        case (playerSelection == computerSelection):
            return tiePhrase
            break
        case (playerSelection == "rock" && computerSelection == "paper"):
            return losePhrase
            break
        case (playerSelection == "paper" && computerSelection == "scissor"):
            return losePhrase
            break
        case (playerSelection == "scissors" && computerSelection == "rock"):
            return losePhrase
            break
        default:
            return winPhrase
    }
}

let computerScore = 0;
let playerScore = 0;

function game() {
    while (computerScore < 5 && playerScore < 5) {
        let playerChoice = prompt("Please choose rock, paper, or scissors").toLowerCase()
        let computerChoice = getComputerChoice()

        if (playRound(playerChoice, computerChoice).includes("win")){
            playerScore ++
        } else if (playRound(playerChoice, computerChoice).includes("lose")) {
            computerScore ++
        } 
    }

    switch (true) {
        case (computerScore == 5):
            return "Computer wins"
            break
        default:
            return "Player wins"
    }
}

game()