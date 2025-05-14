
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.ceil(Math.random() * 3)
    let choice = ""
    switch (number) {
        case 1:
            choice = "Rock";
            break;
        
        case 2:
            choice = "Paper";
            break;
        
        case 3:
            choice = "Scissors";
            break;
        default:
            break;
    }

    return choice;
}

function getHumanChoice() {
    let userChoice = prompt("Please enter a choice between Rock, Paper and Scissors");
    return userChoice;
}