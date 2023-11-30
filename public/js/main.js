console.log("Hello World");


// PlayerChoice function
// function getPlayerChoice() {
    // let j = prompt("Enter rock, paper or scissors").toLowerCase();
    
    // if (j == "rock" || j == "paper" || j == "scissors") {
        //     return j;
        // } else {
            //     alert("Error");
            //     return getPlayerChoice();
            // }
            
            // }
            
            // let rock = document.querySelector("#rock");
// rock.addEventListener("click", () => {
    //     console.log('rock');
    //     playRound("rock", getComputerChoice());
    // })
    // let paper = document.querySelector("#paper");
    // paper.addEventListener("click", () => {
        //     console.log('paper')
        //     playRound("rock", getComputerChoice());
        // })
        // let scissors = document.querySelector("#scissors");
        // scissors.addEventListener("click", () => {
            //     console.log('scissors')
            //     playRound("rock", getComputerChoice());
            // })
            
            
var reponse = document.querySelector("#reponse");
            
// Computer variable
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


let playerScore = 0;
let computerScore = 0;
let roundWinner = ''
var playerScorePara = document.querySelector('#playerScore');
var computerScorePara = document.querySelector('#computerScore');


// Play a round function
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        reponse.innerHTML = "You Lose! Paper beats Rock"
        computerScore++
        console.log(computerScore);
        computerScorePara.textContent = `${computerScore}`
        // roundWinner = 'computer'
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
        reponse.innerHTML = "You Win! Rock beats Scissors"
        playerScore++
        console.log(playerScore);
        playerScorePara.textContent = `${playerScore}`
        // roundWinner = 'player'
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        reponse.innerHTML = "You Win! Paper beats Rock"
        playerScore++
        console.log(playerScore);
        playerScorePara.textContent = `${playerScore}`
        // roundWinner = 'player'
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper");
        reponse.innerHTML = "You Lose! Scissors beats Paper"
        computerScore++
        console.log(computerScore);
        computerScorePara.textContent = `${computerScore}`
        // roundWinner = 'computer'
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors");
        reponse.innerHTML = "You Lose! Rock beats Scissors"
        computerScore++
        console.log(computerScore);
        computerScorePara.textContent = `${computerScore}`
        // roundWinner = 'computer'
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper");
        reponse.innerHTML = "You Win! Scissors beats Paper"
        playerScore++
        console.log(playerScore);
        playerScorePara.textContent = `${playerScore}`
        // roundWinner = 'player'
    } else {
        console.log("Tie");
        reponse.innerHTML = "Tie"
        // roundWinner = 'tie'
    }
}

// Game function
// function game() {
    // var playerScore = 0;
    // var computerScore = 0;

//     for (let round = 0; round < 5; round++) {

//         // var computerSelection = getComputerChoice();
//         // var playerSelection = getPlayerChoice();
//         var result = getPlayerChoice()

//         if (result == "player") {
//             playerScore++;
//         } else if (result == "computer") {
//             computerScore++;
//         }
//     }

//     console.log("Game Over!");
//     console.log("Player Score: " + playerScore);
//     console.log("Computer Score: " + computerScore);

//     if (playerScore > computerScore) {
//         console.log("You win the game!");
//     } else if (playerScore < computerScore) {
//         console.log("You lose the game!");
//     } else {
//         console.log("It's a tie!");
//     }
// }

// Start the game
// game();