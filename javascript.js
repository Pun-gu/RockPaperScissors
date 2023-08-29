
    function getComputerChoice(){
let randomNum = Math.floor(Math.random()*3)+1; //This makes comp generate number between 1-3//
switch (randomNum) {
    case 1:
        return('rock');
        break;
    case 2:
        return('paper');
        break; 
    case 3:
        return('scissors');
}} //Depending on the number generated, it spits out R, P, S// 


function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("It is a tie")
    }else if(playerSelection == 'rock'){
        if(computerSelection == 'scissors'){
            console.log('playerWins')
        }else{
            console.log('playerLoses')
        }
    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            console.log('PlayerWins')
        }else{
            console.log('PlayerLoses')
        }
    }else if(playerSelection == "scissors"){
        if(computerSelection == 'paper'){
            console.log('PlayerWins')
        }else{
            console.log('PlayerLoses')
        }
    }
} // This code checks the who is winner of R,P,S//

function game(){
    let playerSelection;
    let computerSelection;
    for(let i = 0; i<5 ; i++){
        let playerSelection = prompt('Rock, Paper, Scissors');
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
}
}
game();