const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const footer = document.querySelector('footer');
const popup = document.getElementById('popup');
const gameBody = document.getElementById('game-body');
const popupHeader = document.getElementById("popup-header");
const popupBody = document.getElementById('popup-body');

var resultScorePlayer = document.getElementById('nigger');
var resultScoreComputer = document.getElementById('nigga');

const tie = `It's a tie!`;
const playerWon = `Thats a point for you!`;
const computerWon = `Better luck next time!`;
const winner = 'Congrats, you are the winner of the whole game!';
const loser = 'You just lost to the computer haha!';
const tieGame = `Well it's only a tie...`;

var roundCount = 0;
var playerPoints = 0;
var computerPoints = 0;

const rps = ['rock', 'paper', 'scissors'];

function rockFunction(){
    let rpsNmbr = Math.floor(Math.random()*rps.length);
    let computerPick = rps[rpsNmbr];
    if(roundCount > 4){ 
        if(playerPoints > computerPoints){
            popupHeader.innerText = winner;
            console.log(winner);
        }else if(playerPoints < computerPoints){
            popupHeader.innerText = loser;
            console.log(loser);
        }else {console.log(tieGame);
            popupHeader.innerText = tieGame;};
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        popup.style = "visibility: visible";
        gameBody.style = "opacity: 0.3";
        return;
    };
    switch (computerPick){
        case 'rock':
            console.log(tie);
            roundCount++
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✊</div>`);
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✊</div>`);
            break;
        case 'paper':
            console.log(computerWon);
            computerPoints++
            roundCount++
            resultScoreComputer.innerHTML = `${computerPoints}`;
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection">✊</div>`);
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✋</div>`);
            break;
        case 'scissors':
            console.log(playerWon);
            playerPoints++
            roundCount++
            resultScorePlayer.innerHTML = `${playerPoints}`;
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✊</div>`);
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection">✌</div>`);
            break;
    };
    console.log(playerPoints, computerPoints, roundCount);
}; 
function paperFunction(){
    let rpsNmbr = Math.floor(Math.random()*rps.length);
    let computerPick = rps[rpsNmbr];
    if(roundCount >= 5){ 
        if(playerPoints > computerPoints){
            popupHeader.innerText = winner;
            console.log(winner);
        }else if(playerPoints < computerPoints){
            popupHeader.innerText = loser;
            console.log(loser);
        }else {console.log(tieGame);
            popupHeader.innerText = tieGame;};
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        popup.style = "visibility: visible";
        gameBody.style = "opacity: 0.3";
        return;
    };
    switch (computerPick){
        case 'rock':
            console.log(playerWon);
            playerPoints++
            roundCount++
            resultScorePlayer.innerHTML = `${playerPoints}`;
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✋</div>`);
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection">✊</div>`);
            break;
        case 'paper':
            console.log(tie);
            roundCount++
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✋</div>`);
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✋</div>`);
            break;
        case 'scissors':
            console.log(computerWon);
            computerPoints++
            roundCount++
            resultScoreComputer.innerHTML = `${computerPoints}`;
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection">✋</div>`);
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✌</div>`);
            break;
    };
    console.log(playerPoints, computerPoints, roundCount);
};
function scissorsFunction(){
    let rpsNmbr = Math.floor(Math.random()*rps.length);
    let computerPick = rps[rpsNmbr];
    if(roundCount >= 5){ 
        if(playerPoints > computerPoints){
            popupHeader.innerText = winner;
            console.log(winner);
        }else if(playerPoints < computerPoints){
            popupHeader.innerText = loser;
            console.log(loser);
        }else {console.log(tieGame);
            popupHeader.innerText = tieGame;};
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        popup.style = "visibility: visible";
        gameBody.style = "opacity: 0.3";
        return;
    };
    switch (computerPick){
        case 'rock':
            console.log(computerWon);
            roundCount++
            computerPoints++
            resultScoreComputer.innerHTML = `${computerPoints}`;
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection">✌</div>`);
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✊</div>`);
            break;
        case 'paper':
            console.log(playerWon);
            roundCount++
            playerPoints++
            resultScorePlayer.innerHTML = `${playerPoints}`;
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✌</div>`);
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection">✋</div>`);
            break;
        case 'scissors':
            console.log(tie);
            roundCount++
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✌</div>`);
            footer.insertAdjacentHTML("beforeend",`<div class="result-selection winner">✌</div>`);
            break;
    };
    console.log(playerPoints, computerPoints, roundCount);
};

function playAgain(){
    document.location.reload();
};

rockBtn.addEventListener('click',rockFunction);
paperBtn.addEventListener('click',paperFunction);
scissorsBtn.addEventListener('click',scissorsFunction);
popupBody.addEventListener('click', playAgain);