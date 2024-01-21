function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber =   Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection){
    playerSelection=prompt("pls input:");
    computerSelection=getComputerChoice();
    playerSelection=playerSelection.toLowerCase();
    if ((playerSelection== 'rock' && computerSelection=='paper' ) || (playerSelection== 'paper' && computerSelection=='scissors' ) || (playerSelection== 'scissors' && computerSelection=='rock' )){
        console.log("you lose");
        return [0,1,0];rock
    }
    else if ((playerSelection== 'rock' && computerSelection=='scissors' ) || (playerSelection== 'paper' && computerSelection=='rock' ) || (playerSelection== 'scissors' && computerSelection=='paper' )){
        console.log("you win");
        return [1,0,0];
    }
    else if (playerSelection==computerSelection) {
        console.log("draw");
        return [0,0,1];
    }
}

function game(){
    res = [0,0,0];
    for (let i=0; i<5; i++){
        playRound();
        for (let j=0; j<3; j++){
            res[j]+=playRound()[j];
        }
    }
    if (res[0]>res[1]){
        console.log("End:you win");
    }
    else if (res[0]<res[1]){
        console.log("End:you lose");
    }
    else{
        console.log("End:draw");
    }
   console.log(`you win ${res[0]} times, you lose ${res[1]} times, draw ${res[2]} times`);
   return;
}
game();