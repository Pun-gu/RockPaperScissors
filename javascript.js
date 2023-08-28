function getComputerChoice(){
let randomNumber;
randomNumber = Math.floor(Math.random()*3)+1; //This makes comp generate number between 1-3//
switch (randomNumber) {
    case 1:
        return('Rock');
        break;
    case 2:
        return('Paper');
        break; 
    case 3:
        return('Scissors');
}} //Depending on the number generated, it spits out R, P, S// 



function playRound (playerSelection, computerSelection){
    const playerSelection = 'ROCK'
    const computerSelection = getComputerChoice();
}

