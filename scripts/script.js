const scoreCounter = document.querySelector('.score');
const gameButtons = document.querySelectorAll('.gameButton');

let score = 0;

function play() {
    
    const userChoice = parseInt(this.dataset.choose);
    const randomChoice = Math.floor(Math.random() * 3);
    let status = '';

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
      
}

function updateScore(status) {
    if (status == 'win') {
        score++;
        scoreCounter.textContent = score;
      }
}

gameButtons.forEach(button => button.addEventListener('click', play));