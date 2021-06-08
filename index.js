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
 
 let hand1 = 26;
 let hand2 = 26;
 let index = 0;
 /**
  * @description Play the game;
  * @todo This hacky at best but I ran out of time. 
  *       If time permitted I would have built a compare function along with a war function.
  *       The results of each hand should be added / removed from player 1 or 2 hand depending on winner.
  */
 const playGame = () => {
   while ( hand2 > 0 && hand1 > 0 ) {
     let output = '';
     if ( player1[index].value === player2[index].value ) {
       output = 'Tie';
       hand2 ++;
       hand1 ++;
     } else if (player1[index].value > player2[index].value) {
       output = 'Player 1';
       hand2 --;
     } else if (player2[index].value > player1[index].value) {
       output = 'Player 2';
       hand1 --;
     }
     // console.log(hand1, hand2);
     if ( hand1 === 0 ) {
       console.log();
       console.log('WINNER: Player 2');
       console.log();
     } else if ( hand2 === 0 ) {
       console.log();
       console.log('WINNER: Player 1');
       console.log();
     } else {
       console.log();
       console.log(`Round goes to: ${output}`);
       console.log();
     }
     if ( index === 25 ) {
       index = 0;
     } else {
       index ++;
     }
   }
 }
 
 playGame();
 