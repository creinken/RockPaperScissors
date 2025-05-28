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

function playRound(humanChoice, computerChoice) {
    let result = "";
    
    if ((humanChoice.toLowerCase() === "rock" && computerChoice === "Rock") || (humanChoice.toLowerCase() === "paper" && computerChoice === "Paper") || (humanChoice.toLowerCase() === "scissors" && computerChoice === "Scissors")) {
        result = "tie";
    } else if ((humanChoice.toLowerCase() === "rock" && computerChoice === "Paper") || (humanChoice.toLowerCase() === "paper" && computerChoice === "Scissors") || (humanChoice.toLowerCase() === "scissors" && computerChoice === "Rock")){
        result = "lose";
    } else if ((humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors") || (humanChoice.toLowerCase() === "paper" && computerChoice === "Rock") || (humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper")) {
        result = "win";
    }
    return result;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    window.addEventListener('DOMContentLoaded', () => {
        let buttons = document.querySelectorAll("button");
        let humanScoreDisplay = document.querySelector("#humanScore");
        let computerScoreDisplay = document.querySelector("#computerScore");
        let resultsDisplay = document.querySelector("#results");

        buttons.forEach((button) => {
            button.onclick = (e) => {
                let computerChoice = getComputerChoice();
                let roundResult = playRound(e.target.innerText, computerChoice);

                resultsDisplay.innerText = e.target.innerText + " VS " + computerChoice;

                if (roundResult == "win") {
                    humanScore += 1;
                    humanScoreDisplay.innerText = "Player: " + humanScore;
                } else if (roundResult == "lose") {
                    computerScore += 1;
                    computerScoreDisplay.innerText = "Computer: " + computerScore;
                }

                if (humanScore == 5 || computerScore == 5) {
                    alert("GAME OVER!");
                }
            }
        });
    });   
}

playGame();