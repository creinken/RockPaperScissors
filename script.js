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

function playRound(humanChoice, humanScore, computerChoice, computerScore) {
    let results = ['', 0, 0]

    if (humanScore == 5 || computerScore == 5) {
        alert("GAME OVER!");
        return;
    }
    
    if ((humanChoice == "Rock" && computerChoice == "Rock") || (humanChoice == "Paper" && computerChoice == "Paper") || (humanChoice == "Scissors" && computerChoice == "Scissors")) {
        results[0] = "tie";
    } else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock")) {
        results[0] = "lose";
        results[2]= 1;
    } else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
        results[0] = "win";
        results[1] = 1;
    }
    return results;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    window.addEventListener('DOMContentLoaded', () => {
        let buttons = document.querySelectorAll("button");
        let resultsDisplay = document.querySelector("#results");
        let humanScoreDisplay = document.querySelector("#humanScore");
        let computerScoreDisplay = document.querySelector("#computerScore");

        buttons.forEach((button) => {
            button.onclick = (e) => {
                let computerChoice = getComputerChoice();
                let roundResult = playRound(e.target.innerText, humanScore, computerChoice, computerScore);
                humanScore += roundResult[1];
                computerScore += roundResult[2];
                humanScoreDisplay.innerText = "Player: " + humanScore;
                computerScoreDisplay.innerText = "Computer: " + computerScore;

                resultsDisplay.innerText = e.target.innerText + " VS " + computerChoice + "\nYou " + roundResult[0];
            }
        });
    });   
}

playGame();