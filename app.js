//************************************/
// The Pig Game
// by Liviu Preda 2019
// HTML & CSS ©Jonas Schmedtman
//************************************/

let totalScores, currScore, currPlayer, gamePlaying;
gamePlaying = true; // state variable; becomes false once Winner => game over
appInit();

// -- New Game ; Init
document.querySelector('.btn-new').addEventListener('click', appInit);

// -- Roll dice
document.querySelector('.btn-roll').addEventListener('click', rollDice);

// -- Hold button
document.querySelector('.btn-hold').addEventListener('click', holdRoll);

function appInit() {
  // totalScores[0] P1; totalScores[1] P2
  totalScores = [0, 0]; // Array for P1 and P2 total scores
  currScore = 0;
  currPlayer = 0; // P1 = 0 ; P2 = 1
  gamePlaying = true;

  // Hide dice image at the beginning
  document.querySelector('.dice').style.display = 'none';

  // Reset the current and total scores for P1 and P2
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
}

function rollDice() {
  if (gamePlaying) {
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
      switchPlayer();
    }
  }
}

function holdRoll() {
  if (gamePlaying) {
    // Add currScore to totalScore
    totalScores[currPlayer] += currScore;
    // Update UI
    document.getElementById('score-' + currPlayer).textContent =
      totalScores[currPlayer];
    // Check if currPlayer won the game
    if (totalScores[currPlayer] >= 100) {
      document.getElementById('name-' + currPlayer).textContent = 'Winner!';
      document
        .querySelector('.player-' + currPlayer + '-panel')
        .classList.add('winner');
      document
        .querySelector('.player-' + currPlayer + '-panel')
        .classList.remove('active');

      document.querySelector('.dice').style.display = 'none';
      gamePlaying = false;
    } else switchPlayer();
  }
}

function switchPlayer() {
  currPlayer === 0 ? (currPlayer = 1) : (currPlayer = 0);
  currScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';

  // if (currPlayer === 0) {
  //   document
  //     .querySelector('.player-' + currPlayer + '-panel')
  //     .classList.remove('active');
  //   currPlayer = 1;
  // } else {
  //   document
  //     .querySelector('.player-' + currPlayer + '-panel')
  //     .classList.remove('active');
  //   currPlayer = 0;
  // }

  // document
  //   .querySelector('.player-' + currPlayer + '-panel')
  //   .classList.add('active');
  // // Hide dice
  // diceDOM.style.display = 'none';
  // // Reset current score for current player
  // currScore = 0;
  // document.getElementById(
  //   'current-' + currPlayer
  // ).textContent = `${currScore}`;
}
