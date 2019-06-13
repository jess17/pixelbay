let cards = document.querySelectorAll('.card');

let flippedCard = false;
let result = false;
let firstCard, secondCard;

function flipCard() {
    if (result) {
        return;
    }
    if (this == firstCard) {
        return;
    }

    this.classList.add('flip');

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.id == secondCard.dataset.id;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    result = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 500);
}

function resetBoard() {
    [flippedCard, result] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(i => {
        let randomPos = Math.floor(Math.random() * 16);
        i.style.order = randomPos;
    });
})();

cards.forEach(i => i.addEventListener('click', flipCard));

// let refresh = document.location.reload(true);

function refreshing(){
    document.location.reload(true);   
}
const refreshBtn = document.querySelector('.refreshButton');
refreshBtn.addEventListener('click',refreshing);