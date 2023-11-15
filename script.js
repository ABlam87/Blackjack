// Functions

function randomHand (min, max) {
    min = Math.ceil(4);
    max = Math.floor(21);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function dealCard (min, max) {
    min = Math.ceil(2);
    max = Math.floor(11);
    let card = Math.floor(Math.random() * (max - min + 1) + min);
    playerHand = (playerHand += card)
}

function hitOrStay (question, yes, no) {
    question = confirm('You score is ' + playerHand + '. Press Ok to hit. Press Cancel to stay');
    if (question == true) {
        dealCard();
        if (playerHand <= 21) {
        hitOrStay();
        } else {
        alert('Your total is now ' + playerHand + '. You are bust! Refresh the page to play again');
    }
    } else if (question == false) {
        dealerPlay();
    }
}

function dealerPlay () {
    let card = Math.floor(Math.random() * (11 - 2 + 1) + 2);
    if (pcHand < 17) {
        pcHand == (pcHand += card);
        alert('the dealer drew a ' + card + '. Their total is now ' + pcHand)
    }; 
    if (pcHand < 17) {
        dealerPlay();
    } else if (pcHand >= 17 && pcHand <= 21 && pcHand < playerHand) {
        alert('The dealer stands at ' + pcHand + '. You win! Refresh to try again')
    } else if (pcHand >= 17 && pcHand <=21 && pcHand > playerHand) {
        alert('The dealer stands at ' + pcHand + '. You lose! Refresh to try again')
    } else if (pcHand >= 17 && pcHand <=21 && pcHand === playerHand) {
        alert('The dealer stands at ' + pcHand + '. It\'s a tie! Refresh to try again')
    } else if (pcHand > 21) {
        alert ('Dealer is bust! You win! Refresh to try again')
    }
}

// Order of play

playerHand = randomHand()
pcHand = randomHand()

alert('Hi Player, you\'ve been dealt ' + playerHand + ' and the Dealer has been dealt ' + pcHand);

if (playerHand === 21) {
    alert('That\s a natural blackjack! You win! Refresh the page to play again')
} else if (pcHand ===21) {
    alert('The PC got a natural blackjack. You lose! Refresh the page to play again')
}  else {
      hitOrStay();
}



