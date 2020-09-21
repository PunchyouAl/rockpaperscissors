const scoreCounter = document.querySelector('.score');
const rulesButton = document.querySelector('.rulesButton');
const gameButtons = document.querySelectorAll('.gameButton');
const rulesModal = document.querySelector('.rulesModal');
const resultsModal = document.querySelector('.resultsModal');
let status = '';

let score = 0;

function play() {
    
    const userChoice = parseInt(this.dataset.choose);
    const randomChoice = Math.floor(Math.random() * 3);
    

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

      console.log({userChoice, randomChoice, status});

      updateScore(status);
      handleModal();
  
}

function handleModal(e) {
    
    resultsModal.classList.add('active');

    console.log(`You ${status}`);

}

function updateScore(status) {
    if (status == 'win') {
        score++;
        scoreCounter.textContent = score;
      }
}

gameButtons.forEach(button => button.addEventListener('click', play));
rulesButton.addEventListener('click', () => {rulesModal.classList.toggle('active')});