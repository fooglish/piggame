let scores, roundScore, gamePlaying, winningCondition, setScoreWrapper; 

init(); //Initializing the game

document.querySelector('.btn-roll').addEventListener('click', function() { //onclick event to roll the dice
    if(gamePlaying) {
        //1. Generate a random number
        var dice = Math.floor(Math.random()*6) + 1;
        //2. Display the result in img
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';
        //3. Update the CURRENT round score IF the rolled number was NOT a 1
        if (dice !== 1) { 
            //Add score 
            roundScore += dice; 
            //display roundscore in UI
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else { 
            //Next player's turn
            nextPlayer();
        }
    }
}); 

document.querySelector('.btn-hold').addEventListener('click', function () { //HOLD button
    if(gamePlaying) {
        //Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        //Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        //Check if the player won the game
        if (scores[activePlayer] >= winningCondition) { //Display congratulatory message and clear the UI if he/she did
            document.getElementById('name-' + activePlayer).textContent = 'W I N N E R';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
            setScoreWrapper.style.display = 'none';
            gamePlaying = false;
        } else { //Proceed with the game if not
            nextPlayer();
        }
    }
});

//New game button
document.querySelector('.btn-new').addEventListener('click', init); 
//Set winning score button
document.querySelector('.btn-addscore').addEventListener('click', changeScore);

function init() {
    gamePlaying = true;
    currentScore = 0;
    previousScore = 0;
    winningCondition = 100;
    scores = [0, 0]; 
    roundScore = 0;
    activePlayer = 0;
    setScoreWrapper = document.querySelector('.setscore-wrapper');
    //Reset all the UI
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';  
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2'; 
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.add('active');  
    document.querySelector('.player-1-panel').classList.remove('active'); 
    setScoreWrapper.style.display = 'block'; 
}

function nextPlayer() {
    //Reset the previous player-related UI
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active'); 
    document.querySelector('.player-1-panel').classList.toggle('active');
    //Change the current player and reset the round score
    (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;

    document.querySelector('.dice').style.display = 'none';
}

//Manually change the winning score
function changeScore () { 
    if (!isNaN(document.getElementById("score").value) && document.getElementById("score").value > 20) { //Number type check
        winningCondition = document.getElementById("score").value;
        document.getElementById('score').value = ''; 
    } else { 
        alert("Enter a proper number greater than 20");
    }
}