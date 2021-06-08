const suits = [ 'spades', 'hearts', 'diamonds', 'clubs' ];
const ranks = [ 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace' ];
const deck = [];

/**
 * @description Build the deck with suits, ranks and value
 */
for (const suit of suits ) {
  for (const [index, rank] of ranks.entries() ) {
    deck.push({
      suit: suit,
      rank: rank,
      value: index + 1
    });
  }
}
// console.log('deck', deck, deck.length);

/**
 * @description Shuffle the deck
 */
const shuffledDeck = deck.sort(() => Math.random() - 0.5);
// console.log('shuffledDeck', shuffledDeck, shuffledDeck.length);

/**
 * @description Get Player 1 hand (Array elements with index 0 - 25)
 */
 const player1 = shuffledDeck.filter((value, index) => index < 26 );
 // console.log('player1', player1, player1.length);
 
 /**
  * @description Get Player 2 hand (Array elements with index 26 - 52)
  */
 const player2 = shuffledDeck.filter((value, index) => index >= 26 );
 // console.log('player2', player2, player2.length);
 