// Make a random var
function getComputerChoice() {
    let compNum = (Math.random() * 3);
// Make the random var be Calculated into 3 categories: Rock Paper Scissors
    if (compNum <= 1) {return "Rock"}
    else if (compNum <= 2 && compNum > 1) {return "Paper"} 
    else {return "Scissors"}
}
function getHumanChoice() {
    let humanPrompt = prompt("Please Enter Your Choice");
    lowcaseHumanValue = humanPrompt.toLowerCase;
    return  humanPrompt
}
// Get the human response of Rock Paper Scissors
// Calculate victor between human and computer
// Return appropriate string for win or loss