// Init Variables
let computerWins = 0;
let playerWins = 0;
let playerSelection;
const buttons = document.querySelectorAll('button');

// Listeners
buttons.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

buttons.forEach(btn => {
    btn.addEventListener('click', playRound)
});

// Functions
function handleClick(e) {
    playerSelection = e.target.textContent.toLowerCase();
}

function getComputerSelection() {
    let computerSelection = Math.floor(Math.random() * 3);
    // console.log(computerSelection);

    switch (computerSelection) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound() {
    let computerSelection = getComputerSelection();

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return console.log('DRAW!');
    }

    // Player win conditions
    if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' || 
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        playerWins++;
        return game('player');
    }

    // Computer win conditions
    if (computerSelection === 'rock' && playerSelection === 'scissors' || 
        computerSelection === 'paper' && playerSelection === 'rock' || 
        computerSelection === 'scissors' && playerSelection === 'paper'
    ) {
        computerWins++;
        return game('computer');
    }
}

function game(roundWinner) {
    // Display winner thru console.log
    if (roundWinner === 'player') {
        console.log(`Player wins! With a total of ${playerWins} points!`);
    }
    else {
        console.log(`Computer wins! With a total of ${computerWins} points!`);
    }
}

/* References
    1. Solution from: https://stackoverflow.com/questions/71974632/get-value-from-the-button-element-that-i-click
*/