function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber =   Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');
rock_btn.onclick = function(){
    // console.log("rock");
    playRound('rock');
}
paper_btn.onclick = function(){
    playRound('paper');
}
scissors_btn.onclick = function(){
    playRound('scissors');
}
const result = document.querySelector('#result');
const score = document.querySelector('#score')
score.textContent = `you win 0 times, you lose 0 times, draw 0 times`;
let res = [0,0,0];

function play(){
    res = [0,0,0];
    const result = document.querySelector('#result');
    const score = document.querySelector('#score')
    result.textContent = 'game start';  
    score.textContent = `you win 0 times, you lose 0 times, draw 0 times`;
}

function playRound(playerSelection){
    // playerSelection=prompt("pls input:");
    if(res[0]==5 || res[1]==5){
        result.textContent = 'game over';  
        if (res[0]>res[1]){
            result.textContent += 'you win';
        }else{
            result.textContent += 'you lose';
        } 
        return;
    }
    computerSelection=getComputerChoice();
    playerSelection=playerSelection.toLowerCase();
    if ((playerSelection== 'rock' && computerSelection=='paper' ) || (playerSelection== 'paper' && computerSelection=='scissors' ) || (playerSelection== 'scissors' && computerSelection=='rock' )){
        console.log("you lose");
        result.textContent = 'you lose';
        res[1]++;
        score.textContent = `you win ${res[0]} times, you lose ${res[1]} times, draw ${res[2]} times`;
        // return [0,1,0];
    }
    else if ((playerSelection== 'rock' && computerSelection=='scissors' ) || (playerSelection== 'paper' && computerSelection=='rock' ) || (playerSelection== 'scissors' && computerSelection=='paper' )){
        console.log("you win");
        result.textContent = 'you win';
        res[0]++;
        
        score.textContent = `you win ${res[0]} times, you lose ${res[1]} times, draw ${res[2]} times`;
        // return [1,0,0];
    }
    else if (playerSelection==computerSelection) {
        console.log("draw");
        result.textContent = 'draw';
        res[2]++;
        score.textContent = `you win ${res[0]} times, you lose ${res[1]} times, draw ${res[2]} times`;
        // return [0,0,1];
    }
    
}

