
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

function playRound(humanChoice, computerChoice) {
    let result = ""
    switch (humanChoice.toLowerCase()) {
        case "rock":
            switch (computerChoice) {
                case "Rock":
                    result = "tie";
                    break;
                case "Paper":
                    result = "lose";
                    break;
        
                case "Scissors":
                    result = "win";
                    break;

                default:
                    break;
            }
            break;
        
        case "paper":
            switch (computerChoice) {
                case "Rock":
                    result = "win";
                    break;
                case "Paper":
                    result = "tie";
                    break;
        
                case "Scissors":
                    result = "lose";
                    break;

                default:
                    break;
            }
            break;
        
        case "scissors":
            switch (computerChoice) {
                case "Rock":
                    result = "lose";
                    break;
                case "Paper":
                    result = "win";
                    break;
        
                case "Scissors":
                    result = "tie";
                    break;

                default:
                    break;
            }
            break;
        
        default:
            break;
    } // end of humanChoice switch

    if (result = "win") {
        humanScore += 1;
    } else if (result = "lose") {
        computerScore += 1;
    }

    console.log("You " + result + ".");
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);