const scoreCounter = document.querySelector('.score');
const rulesButton = document.querySelector('.rulesButton');
const gameButtons = document.querySelectorAll('.gameButton');
const rulesModal = document.querySelector('.rulesModal');
const resultsModal = document.querySelector('.resultsModal');
const buttonPicker = document.querySelector('.buttonPicker');
const winStatus = document.querySelector('.winStatus');
const playAgain = document.querySelector('.playAgainButton');
const imgArr = ['<div class="gameButton" id="paper" data-choose="0"><div class="ringWhite"><img src="images/icon-paper.svg" alt="paperButton"></div></div>', '<div class="gameButton" id="scissors" data-choose="1"><div class="ringWhite"><img src="images/icon-scissors.svg" alt="scissorsButton"></div></div>', '<div class="gameButton" id="rock" data-choose="2"><div class="ringWhite"><img src="images/icon-rock.svg" alt="rockButton"></div></div>']

let status = '';
let score = 0;

function play() {
    
    const userChoice = parseInt(this.dataset.choose);
    const randomChoice = Math.floor(Math.random() * 3);
    const clicked = this;
    

    switch(userChoice) {
        case 0:
            switch(randomChoice) {
                case 0:
                  status = 'draw';
                  break;
                case 1:
                  status = 'lose';
                  break;
                case 2:
                  status = 'win';
                  break;
                default:
                  // code block
              }
          break;
        case 1:
            switch(randomChoice) {
                case 0:
                  status = 'win';
                  break;
                case 1:
                  status = 'draw';
                  break;
                case 2:
                  status = 'lose';
                  break;
                default:
                  // code block
              }
          break;
        case 2:
            switch(randomChoice) {
                case 0:
                  status = 'lose';
                  break;
                case 1:
                  status = 'win';
                  break;
                case 2:
                  status = 'draw';
                  break;
                default:
                  // code block
              }
          break;
        default:
          // code block
      }

      buttonPicker.classList.add('hidden');

      console.log({status});

      updateScore(status);
      handleModal(userChoice, randomChoice);
  
}

function handleModal(user, ran) {

    const userArea = resultsModal.querySelector('#userPick');
    const oppArea = resultsModal.querySelector('#oppPick');

    let winningButton;

    userArea.innerHTML = '';
    oppArea.innerHTML = '';

    let a = document.createElement('div');
    a.innerHTML = imgArr[user];
    userArea.appendChild(a);

    let b = document.createElement('div');
    b.innerHTML = imgArr[ran];
    oppArea.appendChild(b);

    resultsModal.classList.add('active');

    winStatus.innerHTML = `You ${status}`;
    

    if (status = 'win') {
        winningButton = userArea.querySelector('.gameButton');
    } else if (status = 'lose') {
        winningButton = oppArea.querySelector('.gameButton');
    }

    winningButton.classList.add('won');

}

function updateScore(status) {
    if (status == 'win') {
        score++;
        scoreCounter.textContent = score;
      }
}

function init() {
    resultsModal.classList.toggle('active');
    buttonPicker.classList.toggle('hidden');
}

gameButtons.forEach(button => button.addEventListener('click', play));
rulesButton.addEventListener('click', () => {rulesModal.classList.toggle('active')});
playAgain.addEventListener('click', init);