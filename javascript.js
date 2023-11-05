
function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3)+1; 
    switch (randomNum) {
        case 1:
            return('rock');
            break;
        case 2:
            return('paper');
            break; 
        case 3:
            return('scissors');
    }} 
    
    function playRound(playerSelection, computerSelection){
        if(playerSelection == computerSelection){
            result = "It is a tie";
        }else if(playerSelection == 'rock'){
            if(computerSelection == 'scissors'){
                playerScore ++;
                result = 'Player Wins ';
            }else{
                computerScore ++;
                result = 'Computer Wins ';
            }
        }else if(playerSelection == 'paper'){
            if(computerSelection == 'rock'){
                playerScore ++;
                result = 'Player Wins ';
            }else{
                computerScore ++;
                result = 'Computer Wins ';
            }
        }else if(playerSelection == "scissors"){
            if(computerSelection == 'paper'){
                playerScore ++;
                result = 'Player Wins ';
            }else{
                computerScore++;
                result = 'Computer Wins ';
            }
        }
    } 
let selectionButtons = document.querySelectorAll(".playerSelect");
let playerText = document.querySelector("#playerText");
let computerText = document.querySelector("#computerText")
let resultText = document.querySelector(".results")
let playerSelection;
let computerSelection;    
let playerScore = 0;
let computerScore = 0;
let result;


selectionButtons.forEach(selectedButton => {
    selectedButton.addEventListener('click', e => {
        const playerSelection = selectedButton.dataset.selection
        const computerSelection = getComputerChoice();
        playerText.textContent = `Player: ${playerScore}`
        computerText.textContent = `Computer: ${computerScore}`
        resultText.textContent = `Result: ${result}`
        playRound(playerSelection, computerSelection)
    })
})


//hiiiiii 