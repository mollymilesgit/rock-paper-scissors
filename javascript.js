// Make a random var that can be seperated thee ways
function getComputerChoice() {
    let compNum = (Math.random() * 3);
// Make the random var be Calculated into 3 categories: Rock Paper Scissors
    if (compNum <= 1) {return "rock"}
    else if (compNum <= 2 && compNum > 1) {return "paper"} 
    else {return "scissors"}
}
// Make values to keep track of score


// Calculate victor between human and computer
        let humanScore = 0;

        let computerScore = 0;
        const scoreDiv = document.querySelector("#resultsDiv")

        function playRound(humanChoice, computerChoice) {
            if (humanScore >= 5 || computerScore >= 5) {
                winnerAt5()
            }
            else if (humanChoice === computerChoice) {
                let roundPrompt = document.createElement("p");
                roundPrompt.textContent = "It's a tie"
                scoreDiv.textContent = (humanScore + " " + computerScore)
                scoreDiv.appendChild(roundPrompt)
                
            }
            else if (humanChoice === "rock"){
                if (computerChoice === "scissors"){
                    humanScore += 1;
                    scoreDiv.textContent = (humanScore + " " + computerScore)
                    
                    let roundPrompt = document.createElement("p");
                    roundPrompt.textContent = "You win, rock beats scissors!"
                    scoreDiv.appendChild(roundPrompt)
                }
                else if (computerChoice === "paper"){
                    computerScore += 1;
                    scoreDiv.textContent = (humanScore + " " + computerScore)
                    
                    let roundPrompt = document.createElement("p")
                    roundPrompt.textContent = "You lose, paper beats rock :("
                    scoreDiv.appendChild(roundPrompt)
                }
            }
            else if (humanChoice === "paper"){
                if (computerChoice === "rock") {
                    humanScore += 1;
                    scoreDiv.textContent = (humanScore + " " + computerScore)

                    let roundPrompt = document.createElement("p")
                    roundPrompt.textContent = "You win, paper beats rock!";
                    scoreDiv.appendChild(roundPrompt)
                }
                else if (computerChoice === "scissors") {
                    computerScore += 1;
                    scoreDiv.textContent = (humanScore + " " + computerScore)
                    
                    let roundPrompt = document.createElement("p") 
                    roundPrompt.textContent = "You lose, scissors beats paper :(";
                    scoreDiv.append(roundPrompt)
                }
            }
            else if (humanChoice === "scissors") {
                if (computerChoice === "paper") {
                    humanScore += 1;
                    scoreDiv.textContent = (humanScore + " " + computerScore)
                   
                    let roundPrompt = document.createElement("p");
                    roundPrompt.textContent = "You win, scissors beats paper!";
                    scoreDiv.append(roundPrompt)
                }
                else if (computerChoice === "rock"){
                    computerScore += 1;
                    scoreDiv.textContent = (humanScore + " " + computerScore)
                    
                    let roundPrompt = document.createElement("p")
                    roundPrompt.textContent = "You lose, rock beats paper :(";
                    scoreDiv.append(roundPrompt)
                }
               
            }
            }
            const rockButton = document.querySelector("#rockButton")
            rockButton.addEventListener("click", () => {
                 playRound("rock", getComputerChoice());
                });

            const paperButton = document.querySelector("#paperButton");
            paperButton.addEventListener("click", () => {
                playRound("paper", getComputerChoice());
            });

            const scissorsButton = document.querySelector("#scissorsButton")
            scissorsButton.addEventListener("click", () => {
                playRound("scissors", getComputerChoice());
            });
          


            function winnerAt5() {
            if (computerScore > humanScore) {
               scoreDiv.textContent = (humanScore + " " + computerScore)
                    
               let roundPrompt = document.createElement("p")
               roundPrompt.textContent = "You lose, the computer wins"
               scoreDiv.appendChild(roundPrompt)
            }
            else if (humanScore > computerScore) {
                scoreDiv.textContent = (humanScore + " " + computerScore)

                let roundPrompt = document.createElement("p");
                roundPrompt.textContent = "You win"
                scoreDiv.appendChild(roundPrompt)
            }
            else if (humanScore === computerScore){
                scoreDiv.textContent = (humanScore + " " + computerScore)

                let roundPrompt = document.createElement("p")
                roundPrompt.textContent = "It's a tie, try again!"
                scoreDiv.appendChild(roundPrompt)
            }
            else {
                console.log("This shouldn't happen")
            }
        }
            


