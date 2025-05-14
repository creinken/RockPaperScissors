
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
    let result = "";
    
    if ((humanChoice.toLowerCase() === "rock" && computerChoice === "Rock") || (humanChoice.toLowerCase() === "paper" && computerChoice === "Paper") || (humanChoice.toLowerCase() === "scissors" && computerChoice === "Scissors")) {
        result = "tie";
    } else if ((humanChoice.toLowerCase() === "rock" && computerChoice === "Paper") || (humanChoice.toLowerCase() === "paper" && computerChoice === "Scissors") || (humanChoice.toLowerCase() === "scissors" && computerChoice === "Rock")){
        result = "lose";
    } else if ((humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors") || (humanChoice.toLowerCase() === "paper" && computerChoice === "Rock") || (humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper")) {
        result = "win";
    }

    if (result == "win") {
        humanScore += 1;
    } else if (result == "lose") {
        computerScore += 1;
    }

    console.log("You " + result + ".");
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(humanSelection + " VS " + computerSelection);

        playRound(humanSelection, computerSelection);
        console.log("player score: " + humanScore + "   computer score: " + computerScore);
    }
    
}

playGame();