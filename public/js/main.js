console.log("Hello World");




function getComputerChoice() {
    
    // Computer variable
    let answer = null;
    let answers = [ "rock",
    "paper",
    "scissors"];
        
    let index = Math.floor(Math.random() * answers.length);
    
    // User variable
    let userAnswer = prompt("Enter rock, paper or scissors").toLowerCase();

    if (userAnswer == "rock") {
        playRound(userAnswer, answers[index])
    }
    else if (userAnswer == "paper") {
        playRound(userAnswer, answers[index])
    }
    else if (userAnswer == "scissors") {
        playRound(userAnswer, answers[index])
    }
    else {
        alert("Error : Incorrect enter")
        getComputerChoice()
    }
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock")
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors")
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock")
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper")
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors")
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper")
    }
    else {
        console.log("Tie");
    }
    
}

getComputerChoice()