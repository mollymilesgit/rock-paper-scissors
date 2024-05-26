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
    return  humanPrompt.toLowerCase();
}
// Make values to keep track of score


// Calculate victor between human and computer

    function playGame() {

        let humanScore = 0;

        let computerScore = 0;

        function playRound(humanChoice, computerChoice) {
        
            if (humanChoice === computerChoice) {
                console.log("It's a tie");
            }
            else if (humanChoice === "rock"){
                if (computerChoice === "scissors"){
                    humanScore += 1;
                    console.log("You win, rock beats scissors");
                }
                else if (computerChoice === "paper"){
                    computerScore += 1;
                    console.log("You lose, paper beats rock :(");
                }
            }
            else if (humanChoice === "paper"){
                if (computerChoice === "rock") {
                    humanScore += 1;
                    console.log("You win, paper beats rock");
                }
                else if (computerChoice === "scissors") {
                    computerScore += 1;
                    console.log("You lose, scissors beats paper :(");
                }
            }
            else if (humanChoice === "scissors") {
                if (computerChoice === "paper") {
                    humanScore += 1;
                    console.log("You win, scissors beats paper!");
                }
                else if (computerChoice === "rock"){
                    computerScore += 1;
                    console.log("You lose, rock beats paper :(");
                }
            else {
                console.log("Invalid response try again");
                playRound(getHumanChoice(), getComputerChoice());
            }
               
            }
            }
            playRound(getHumanChoice(), getComputerChoice());
            playRound(getHumanChoice(), getComputerChoice());
            playRound(getHumanChoice(), getComputerChoice());
            playRound(getHumanChoice(), getComputerChoice());
            playRound(getHumanChoice(), getComputerChoice());

            if (computerScore > humanScore) {
                console.log("You lose, the computer wins")
            }
            else if (humanScore > computerScore) {
                console.log("You win")
            }
            else if (humanScore === computerScore){
                console.log("It's a tie, try again!")
            }
            else {
                console.log("This shouldn't happen")
            }
           
            


    }
playGame();