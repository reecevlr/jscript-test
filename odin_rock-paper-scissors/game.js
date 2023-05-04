let playerSelection;
let computerSelection = getComputerChoice();

// Functions
function getComputerChoice() {
    let choice = Math.random();

    if (choice < 0.34) 
        return 'Rock';
    else if (choice >= 0.34 && choice < 0.67) 
        return 'Paper';
    else
        return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'Draw!';
    }
    
    // Player vs. Computer results
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper')
            return 'Computer wins!';
        else
            return 'You win!';
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') 
            return 'You win!';
        else
            return 'Computer wins!';
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock')
            return 'Computer wins!'
        else 
            return 'You win!';
    }
}