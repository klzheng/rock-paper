function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.round(Math.random()*2)].toLowerCase()
}

function checkPlayerChoice() {
    let choice = prompt("Please choose rock, paper, or scissors").toLowerCase()
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Please choose rock, paper, or scissors").toLowerCase()
    }
    return choice
}

function playRound(playerSelection, computerSelection) {
    let losePhrase = `You lose, ${computerSelection} beats ${playerSelection}`
    let winPhrase = `You win, ${playerSelection} beats ${computerSelection}`
    let tiePhrase = "Tie! No one wins"

    switch (true) {
        case (playerSelection == computerSelection):
            console.log(tiePhrase)
            return tiePhrase
            break
        case (playerSelection == "rock" && computerSelection == "paper"):
            console.log(losePhrase)
            return losePhrase
            break
        case (playerSelection == "paper" && computerSelection == "scissor"):
            console.log(losePhrase)
            return losePhrase
            break
        case (playerSelection == "scissors" && computerSelection == "rock"):
            console.log(losePhrase)
            return losePhrase
            break
        default:
            console.log(winPhrase)
            return winPhrase
    }
}

function game() {
    while (computerScore < 5 && playerScore < 5) {
        let playerChoice = checkPlayerChoice()
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

let computerScore = 0;
let playerScore = 0;

game()