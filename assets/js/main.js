// Add a start game and end game function
// Add timer. Done. Make it work. Done
// Add score

document.addEventListener('DOMContentLoaded', ()=>{
  //List fo cards
  const cardArray = [
      {
          name: 'amethyst',
          img: 'assets/images/amethyst.jpg'
      },
      {
          name: 'calcite',
          img: 'assets/images/calcite.jpg'
      },
      {
          name: 'quartz',
          img: 'assets/images/clear-quartz.jpg'
      },
       {
          name: 'dreamcatcher',
          img: 'assets/images/dreamcatcher.jpg'
      },
      {
          name: 'moon',
          img: 'assets/images/moon.jpg'
      },
      {
          name: 'rosequartz',
          img: 'assets/images/rose-quartz.jpg'
      },
      {
          name: 'sage',
          img: 'assets/images/sage.jpg'
      },
       {
          name: 'flowers',
          img: 'assets/images/spring-flowers.jpg'
      },
  ]
  
  const grid = document.querySelector('.grid')

  function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement('img')
          card.setAttribute('src', 'assets/images/backside-image.jpg')
          card.setAttribute('data-id', i)
        //  card.addEventListener('click', flipCard)
        grid.appendChild(card)
    } 
  }
  createBoard()



})



/*const cards = document.querySelectorAll('.card');
const resultDisplay = document.querySelector('#points');
let timeLeft = 75;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard; 

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.startgame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // game.filpCard();
        });
    });
}

    // Timer code
let timer = setInterval(function(){
  if(timeLeft <= 0) {
    clearInterval(timer);
    document.getElementById("time-left") = gameOver(); // call the gameOver function properly  
  } else {
    document.getElementById("time-left").innerHTML = timeLeft;
  }
  timeLeft -= 1;
}, 1000);

// Code inspired from freeCodeCamp on YouTube
    // Flip card Code
function filpCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

  this.classList.add('flip');
  if(!hasFlippedCard){
      hasFlippedCard = true;
      firstCard = this;
  } else {
      hasFlippedCard = false;
      secondCard = this;

    // Match card code 
  if(firstCard.dataset.framework === secondCard.dataset.framework) {
      firstCard.removeEventListener('click', filpCard);
      secondCard.removeEventListener('click', filpCard);
      resetBoard();
      // Change alert to toast
      // Add an array of angel numbers that displays randomly for each match
      alert("Display angel numbers" 
    } else {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
        resetBoard();
    }, 1500);
    }
  }  
}

 function gameOver() {
     clearInterval(this.countdown);
     document.getElementById('game-over-text').classList.add('visible');
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function newBoard() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', filpCard));
// End freeCodeCamp code */