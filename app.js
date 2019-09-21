//************************************/
// The Pig Game
// by Liviu Preda 2019
// HTML & CSS ©Jonas Schmedtman
//************************************/

let scores, currScore, currPlayer;

scores = [0, 0]; // Array for P1 and P2 scores
currScore = 0;
currPlayer = 0; // P1 = 0 ; P2 = 1

// Setter; sets the textContent value
// document.getElementById('current-' + currentPlayer).textContent = dice;

// document.getElementById('current-' + currentPlayer).innerHTML = `
//   <em>${dice}</em>
// `;

// Getter; gets the total score textContent value
// let x = document.getElementById('score-0').textContent;
// console.log(x);

// Hide dice image at the beginning
document.querySelector('.dice').style.display = 'none';

// Reset the current and total scores for P1 and P2
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Roll dice
document.querySelector('.btn-roll').addEventListener('click', rollDice);

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1; // Random integer between 1 and 6
  // Display dice roll
  const diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = `dice-${dice}.png`;

  // Update current score only IF the rolled number != 1
  if (dice !== 1) {
    // Display & Add current score to current score
    currScore += dice;
    document.getElementById('current-' + currPlayer).textContent = currScore;
  } else {
    // Switch player
    if (currPlayer === 0) {
      document
        .querySelector('.player-' + currPlayer + '-panel')
        .classList.remove('active');
      currPlayer = 1;
    } else {
      document
        .querySelector('.player-' + currPlayer + '-panel')
        .classList.remove('active');
      currPlayer = 0;
    }

    document
      .querySelector('.player-' + currPlayer + '-panel')
      .classList.add('active');
    // Hide dice
    diceDOM.style.display = 'none';
    // Reset current score for current player
    currScore = 0;
    document.getElementById(
      'current-' + currPlayer
    ).textContent = `${currScore}`;
  }
}
