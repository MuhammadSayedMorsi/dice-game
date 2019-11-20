var scores, roundScore, activePlayer, dice, gamingPlaying;
init();

// dice = Math.floor( Math.random() * 6 ) + 1;


document.querySelector('.btn-roll').addEventListener('click', () => {
  if (gamingPlaying) {
      // 1- randomNumber 
      var dice = Math.floor(Math.random() * 6 ) + 1;
      // select the dice image
      var diceDOM = document.querySelector('.dice');
      // display the dice image
      diceDOM.style.display = 'block';
        // show the right dice image based on the random number.
      diceDOM.src = 'dice-' + dice + '.png';
  
      // update the round score if the number not 1.
      if ( dice != 1) {
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
      }
      
      // if it 1.
      else {
        nextPlayer();
      }
  }
});


// hold function
document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamingPlaying) {
    // add current score to global score
    scores[activePlayer] += roundScore;
    // update the ui 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if the player won the game
    if (scores[activePlayer] >= 100) {
      // replace the content of the player with the winner word
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      // hide the dice image
      document.querySelector('.dice').style.display = 'none';
      
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamingPlaying = false;
    }
  else {
    nextPlayer();
  }
  }
});

// next player function 

function nextPlayer() {
    // secound plyer
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // prevent from complete from the number that another player reach.
    roundScore = 0;
    // make the cuurent button set to zero when next player play.
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // Toggle the background on active player.
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // remove the dice image if it 1.
    document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamingPlaying = true;
  document.querySelector('.dice').style.display = 'none';
  // set all values to zero
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'player 1';
  document.getElementById('name-1').textContent = 'player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');



} 