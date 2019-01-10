const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');
const pResult = document.getElementById('result');
const pScore = document.getElementById('score');
const buttons = document.querySelectorAll('button');
const choices = ['piedra','papel','tijeras'];
const fileNames = {'piedra':'images/rock.png',
'papel':'images/paper.png',
'tijeras':'images/scissors.png'}
let positiveScore = 0, negaticeScore = 0;
buttons.forEach((button) =>
    button.addEventListener('click',statGame)
);

function statGame(event){
    const button = event.currentTarget;
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice);
    imgPlayerChoice.setAttribute('src',fileNames[playerChoice]);
    imgComputerChoice.setAttribute('src',fileNames[computerChoice]);
    let result;
    if (winner === 'player') {
        result = 'ganas';
        ++positiveScore;
    }else if (winner === 'computer') {
        result = 'pierdes';
        ++negaticeScore;
    } else {
        result = 'empatas';
    }
    pResult.innerHTML = `Tu ${result} escogiendo <strong>
                        ${playerChoice} </strong> en contra
                        de <strong> ${computerChoice} </strong>`;
    pScore.innerHTML = `Has ganado <strong>${positiveScore}</strong> veces. Has perdido <strong>${negaticeScore}</strong> veces.`;
}

function getComputerChoice(){
    const computerChoice = parseInt(Math.random() * 3);
    return choices[computerChoice];
}

function getWinner(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        return null
    }

    if (playerChoice === 'piedra') {
        if (computerChoice==='papel') {
            return 'computer';
        }else{
            return 'player';
        }
    } else if (playerChoice === 'papel') {
        if (computerChoice==='piedra') {
            return 'player';
        }else{
            return 'computer';
        }
    } else {
        if (computerChoice==='papel') {
            return 'player';
        }else{
            return 'computer';
        }
    }
}