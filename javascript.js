
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
            console.log('Player Wins Round')
        }else{
            console.log('Computer Wins Round')
        }
    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            console.log('Player Wins Round')
        }else{
            console.log('Computer Wins Round')
        }
    }else if(playerSelection == "scissors"){
        if(computerSelection == 'paper'){
            console.log('Player Wins Round')
        }else{
            console.log('Computer Wins Round')
        }
    }
} // This code checks the who is winner of R,P,S//

let playerScore = 0; //Variables to hold score for player and computer//
let computerScore = 0;
function game(){
    let playerSelection;
    let computerSelection;
    for(let i = 0; i<5 ; i++){
        let playerSelection = prompt('Rock, Paper, Scissors').toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
        if(playerSelection ==  computerSelection){
            console.log(`It is a Tie! Player Score is ${playerScore},Computer Score is ${computerScore}`);
        }else if(playerSelection == 'rock'&& computerSelection=='scissors'){
            playerScore++;
            console.log(`Player Score is ${playerScore},Computer Score is ${computerScore}`);
        }else if(playerSelection == 'scissors'&& computerSelection=='paper'){
            playerScore++;
            console.log(`Player Score is ${playerScore},Computer Score is ${computerScore}`);
        }else if(playerSelection == 'paper'&& computerSelection=='rock'){
            playerScore++;
            console.log(`Player Score is ${playerScore},Computer Score is ${computerScore}`);
        }else{
            computerScore++;
            console.log(`Player Score is ${playerScore},Computer Score is ${computerScore}`);
        }
}}
//this runs all the functions and also keeps track of the scores and outputs the scores in console//
game();