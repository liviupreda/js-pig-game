//************************************/
// The Pig Game
// by Liviu Preda 2019
// HTML & CSS ©Jonas Schmedtman
//************************************/

let scores, roundScore, currentPlayer;

scores = [0, 0]; // Array for P1 and P2 scores
roundScore = 0;
currentPlayer = 0; // P1 = 0 ; P2 = 1

// Setter; sets the textContent value
document.getElementById('current-' + currentPlayer).textContent = dice;

// document.getElementById('current-' + currentPlayer).innerHTML = `
//   <em>${dice}</em>
// `;

// Getter; gets the round score textContent value
let x = document.getElementById('score-0').textContent;
console.log(x);

// Hide dice image at the beginning
document.querySelector('.dice').style.display = 'none';

// Roll dice
document.querySelector('.btn-roll').addEventListener('click', rollDice);

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1; // Random integer between 1 and 6
  // Display dice roll
  const diceToDOM = (document.querySelector('.dice').style.display = 'block');
}
