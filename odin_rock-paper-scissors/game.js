let computerWins = 0;
let playerWins = 0;

// Functions
function getComputerSelection() {
    let computerSelection = Math.floor(Math.random() * 3);
    // console.log(computerSelection);

    switch (computerSelection) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    let roundWinner = 'draw';

    if (playerSelection === computerSelection) {
        return roundWinner;
    }

    // Player win conditions
    if (playerSelection === 'rock' && computerSelection === 'scissors' || 
        playerSelection === 'paper' && computerSelection === 'rock' || 
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        playerWins++;
        return roundWinner = 'player';
    }

    // Computer win conditions
    if (computerSelection === 'rock' && playerSelection === 'scissors' || 
        computerSelection === 'paper' && playerSelection === 'rock' || 
        computerSelection === 'scissors' && playerSelection === 'paper'
    ) {
        computerWins++;
        return roundWinner = 'computer';
    }
}

function game() {
    let playerSelection;
    let computerSelection;

    // Loops for 5 games
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('What is thy selection?', '');
        computerSelection = getComputerSelection();

        switch (playRound(playerSelection, computerSelection)) {
            case 'player':
                console.log('The player wins!');
                break;
            case 'computer':
                console.log('A computer win!');
                break;
            default:
                console.log('Draw!');
        }
    }

    // Display winner thru console.log
    if (playerWins < computerWins) {
        console.log(`Computer wins! With a total of ${computerWins} points!`);
    }
    else {
        console.log(`Player wins! With a total of ${playerWins} points!`);
    }
}

game();

/* Validation checks
console.log(playerWins);
console.log(computerWins);
*/