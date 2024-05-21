// Make a random var that can be seperated thee ways
function getComputerChoice() {
    let compNum = (Math.random() * 3);
// Make the random var be Calculated into 3 categories: Rock Paper Scissors
    if (compNum <= 1) {return "rock"}
    else if (compNum <= 2 && compNum > 1) {return "paper"} 
    else {return "scissors"}
}
// Get the human response of Rock Paper Scissors
function getHumanChoice() {
    let humanPrompt = prompt("Please Enter Your Choice");
    return  humanPrompt
}
// Make values to keep track of score
let humanScore = 0
let computerScore = 0

// Calculate victor between human and computer
function playRound(humanChoice, computerChoice) {
    let playerChoice = humanChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        return "It's a tie";
    }
    else if (playerChoice = "rock"){
        if (computerChoice = "scissors"){
            humanScore += 1;
            return "You win, rock beats scissors";
        }
        else if (computerChoice = "paper"){
            computerScore += 1;
            return "You lose, paper beats rock :(";
        }
    else if (playerChoice = "paper"){
        if (computerChoice = "rock") {
            humanScore += 1;
            return "You win, paper beats rock";
        }
        else if (computerChoice = "scissors") {
            computerScore += 1;
            return "You lose, scissors beats paper :(";
        }
    else if (playerChoice = "scissors") {
        if (computerChoice = "paper") {
            humanScore += 1;
            return "You win, scissors beats paper!";
        }
        else if (computerChoice = "rock"){
            computerScore += 1;
            return "You lose, rock beats paper :(";
        }
       
    }
    // Failsafe for invalid value
    else {
        return "test failed";

    }
    }

    }


    
}
const computerSelection = getComputerChoice();
const playerSelection = getHumanChoice();

playRound(playerSelection, computerSelection);
// Return appropriate string for win or loss