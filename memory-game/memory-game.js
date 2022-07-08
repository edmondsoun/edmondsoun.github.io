"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

const colors = shuffle(COLORS);

createCards(colors);


/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(colors) {

  const gameBoard = document.getElementById('game');

  for (let color of colors) {
    let currentCard = document.createElement('div');
    currentCard.classList.add('hidden', color, 'card');
    gameBoard.appendChild(currentCard);
  }

} 


const cards = document.getElementById('game');
cards.addEventListener("click", flipCard);

/** Flip a card face-up. */
let counter = 0;
let finalCounter = 0;
let cooldown = false;

function flipCard(event) {

  if (cooldown === false) {
    let card = event.target;
    if (card.classList.contains('hidden')) {
      card.classList.remove('hidden');
      card.classList.add('check'); 
      counter++;
    }
  }

  if (counter === 2) {
    cooldown = true;
    checkCards();
  }

}


//checks to see if classes of two selected cards (i.e. background color) match. 

function checkCards() {

let flippedCards = document.querySelectorAll('.check');

if (flippedCards[0].classList.toString() === flippedCards[1].classList.toString()) {
    for (let result of flippedCards) {
      result.classList.remove('check');
      finalCounter ++;
    }
  counter = 0;
  resetCooldown();
} else {
  setTimeout(resetCards, FOUND_MATCH_WAIT_MSECS)}

if (finalCounter === COLORS.length) {
  alert("You did it!");
  }
} 

//returns unmatched cards with class "check" to "hidden" and resets cooldown

function resetCards() {

let flippedCards = document.querySelectorAll('.check');

  for (let result of flippedCards) {
    result.classList.remove('check');
    result.classList.add('hidden');
  }

  counter = 0;
  setTimeout(resetCooldown, 1000);

}

function resetCooldown() {
  let flippedCards = document.querySelectorAll('.check');
  cooldown = false;
}

