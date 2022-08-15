/**
 * Generates random choice for computer player
 * @return {string} - computer's choice
 */
function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.round(Math.random()*2)].toLowerCase()
}


/**
 * Asks and checks player's input
 * @return {string} - player's input
 */
function checkPlayerChoice() {
    let choice = prompt("Please choose rock, paper, or scissors").toLowerCase()
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Please choose rock, paper, or scissors").toLowerCase()
    }
    return choice
}


/**
 * Plays a round of rock-paper-scissors
 * @param {string} playerSelection - player's choice
 * @param {string} computerSelection - computer's choice
 * @return {string} - displays score count, who won the current round, and who won the match if possible
 */
function playRound(playerSelection, computerSelection) {
    let losePhrase = `You lose, ${computerSelection} beats ${playerSelection}`
    let winPhrase = `You win, ${playerSelection} beats ${computerSelection}`
    let tiePhrase = "Tie!"

    switch (true) {
        case (playerSelection == computerSelection):
            content.textContent = tiePhrase
            break
        case (playerSelection == "rock" && computerSelection == "paper"):
            computerScore ++
            content.textContent = losePhrase
            // return losePhrase
            break
        case (playerSelection == "paper" && computerSelection == "scissors"):
            computerScore ++
            content.textContent = losePhrase           
            // return losePhrase
            break
        case (playerSelection == "scissors" && computerSelection == "rock"):
            computerScore ++
            content.textContent = losePhrase
            // return losePhrase
            break
        default:
            playerScore ++
            content.textContent = winPhrase
            // return winPhrase
    }

    switch (true) {
        case (computerScore == scoreLimit):
            content.textContent = "Computer Wins"
            document.querySelector(".rock").disabled = true;
            document.querySelector(".paper").disabled = true;
            document.querySelector(".scissors").disabled = true;
            // return "Computer wins"
            break
        case (playerScore == scoreLimit):
            content.textContent = "Player Wins"
            document.querySelector(".rock").disabled = true;
            document.querySelector(".paper").disabled = true;
            document.querySelector(".scissors").disabled = true;
            // return "Player wins"
            break
    }
    let scoreKeeper = `Player Score: ${playerScore} \nComputer Score: ${computerScore}`
    score.textContent = scoreKeeper
}

// Setting scores of player to 0
let computerScore = 0;
let playerScore = 0;
const scoreLimit = 5; // Score number before the game ends

// Adding divs to main container 
const container = document.querySelector("#container")
const content = document.createElement("div")
const score = document.createElement("div")
container.appendChild(content)
container.appendChild(score)

// Adding 'click' event listeners with function call to the buttons
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
rock.addEventListener("click", () => playRound("rock", getComputerChoice()))
paper.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()))