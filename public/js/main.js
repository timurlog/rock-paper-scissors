var reponse = document.querySelector("#reponse");
var playerScore = 0;
var computerScore = 0;
var tieScore = 0;
var roundWinner = ''
var playerScorePara = document.querySelector('#playerScore');
var computerScorePara = document.querySelector('#computerScore');
var answers = ["rock", "paper", "scissors"];
            
// ComputerChoice function
function getComputerChoice() {
    let i = Math.floor(Math.random() * answers.length);
    return answers[i];
}

var rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    console.log('rock');
    playRound("rock", getComputerChoice());
})
var paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    console.log('paper')
    playRound("paper", getComputerChoice());
})
var scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    console.log('scissors')
    playRound("scissors", getComputerChoice());
})

function playRound(playerSelection, computerSelection) {
    if (playerScore == 5 || computerScore == 5) {
        
        reponse.innerHTML = playerScore == 5 ? "You Win the game!" : "Computer Wins the game!";

        var playAgain = document.querySelector("button");
        playAgain.addEventListener("click", () => {
            rock.removeEventListener("click", onClickHandler);
            paper.removeEventListener("click", onClickHandler);
            scissors.removeEventListener("click", onClickHandler);
        
            playerScore = 0;
            computerScore = 0;
            playerScorePara.textContent = "0";
            computerScorePara.textContent = "0";
            reponse.innerHTML = "WAITING FOR PLAYER CHOICE";

            rock.addEventListener("click", onClickHandler);
            paper.addEventListener("click", onClickHandler);
            scissors.addEventListener("click", onClickHandler);
        });
    } else {
        if (playerSelection == "rock" && computerSelection == "paper") {
            console.log("You Lose! Paper beats Rock");
            reponse.innerHTML = "You Lose! Paper beats Rock"
            computerScore++
            console.log(computerScore);
            computerScorePara.textContent = `${computerScore}`
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors");
            reponse.innerHTML = "You Win! Rock beats Scissors"
            playerScore++
            console.log(playerScore);
            playerScorePara.textContent = `${playerScore}`
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log("You Win! Paper beats Rock");
            reponse.innerHTML = "You Win! Paper beats Rock"
            playerScore++
            console.log(playerScore);
            playerScorePara.textContent = `${playerScore}`
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper");
            reponse.innerHTML = "You Lose! Scissors beats Paper"
            computerScore++
            console.log(computerScore);
            computerScorePara.textContent = `${computerScore}`
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors");
            reponse.innerHTML = "You Lose! Rock beats Scissors"
            computerScore++
            console.log(computerScore);
            computerScorePara.textContent = `${computerScore}`
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper");
            reponse.innerHTML = "You Win! Scissors beats Paper"
            playerScore++
            console.log(playerScore);
            playerScorePara.textContent = `${playerScore}`
        } else {
            console.log("Tie");
            reponse.innerHTML = "Tie"
            tieScore++
        }
    }
}

let replay = document.querySelector("#replay");
replay.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    reponse.innerHTML = "WAITING FOR PLAYER CHOICE"
    playerScorePara.textContent = `${playerScore}`
    computerScorePara.textContent = `${computerScore}`
})
