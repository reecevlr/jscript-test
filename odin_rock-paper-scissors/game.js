console.log("Hello, World!");

// Functions
function playRound(playerSelection, computerSelection) {
    /*
        plays a single round
        returns String that declares the winner
        playerSelection (player's choice) must be case insensitive
    */
}

function getComputerChoice() {
    let choice = Math.random();

    if (choice < 0.34) 
        return 'Rock';
    else if (choice >= 0.34 && choice < 0.67) 
        return 'Paper';
    else
        return 'Scissors';
}

// Values
const playerSelection = '';
const computerSelection = getComputerChoice();

// console.log(choice + ' ' + computerSelection);

// console.log(playRound(playRound(playerSelection, computerSelection)));