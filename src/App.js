import React, { useState, useEffect } from 'react';

// Word lists for the game
const WORD_CATEGORIES = {
  animals: ['Dog', 'Cat', 'Elephant', 'Lion', 'Tiger', 'Bear', 'Rabbit', 'Horse', 'Cow', 'Pig'],
  food: ['Pizza', 'Burger', 'Pasta', 'Sushi', 'Tacos', 'Ice cream', 'Chocolate', 'Apple', 'Banana', 'Bread'],
  objects: ['Chair', 'Table', 'Phone', 'Computer', 'Car', 'Book', 'Pen', 'Clock', 'Mirror', 'Lamp'],
  places: ['Beach', 'Mountain', 'Forest', 'City', 'School', 'Hospital', 'Library', 'Park', 'Mall', 'Airport'],
  activities: ['Swimming', 'Running', 'Reading', 'Cooking', 'Dancing', 'Singing', 'Drawing', 'Writing', 'Gaming', 'Shopping']
};

const GAME_PHASES = {
  SETUP: 'setup',
  WORD_REVEAL: 'word_reveal',
  TIMER: 'timer',
  VOTING: 'voting',
  RESULTS: 'results'
};

function App() {
  const [gamePhase, setGamePhase] = useState(GAME_PHASES.SETUP);
  const [players, setPlayers] = useState([]);
  const [currentPlayerInput, setCurrentPlayerInput] = useState('');
  const [gameWord, setGameWord] = useState('');
  const [imposterIndex, setImposterIndex] = useState(-1);
  const [currentRevealIndex, setCurrentRevealIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [votes, setVotes] = useState({});
  const [hasVoted, setHasVoted] = useState({});
  const [gameResults, setGameResults] = useState(null);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (gamePhase === GAME_PHASES.TIMER && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && gamePhase === GAME_PHASES.TIMER) {
      setGamePhase(GAME_PHASES.VOTING);
    }
    return () => clearInterval(interval);
  }, [gamePhase, timeLeft]);

  const addPlayer = () => {
    if (currentPlayerInput.trim() && !players.includes(currentPlayerInput.trim())) {
      setPlayers([...players, currentPlayerInput.trim()]);
      setCurrentPlayerInput('');
    }
  };

  const removePlayer = (playerToRemove) => {
    setPlayers(players.filter(player => player !== playerToRemove));
  };

  const startGame = () => {
    if (players.length >= 3) {
      // Select random word from random category
      const categories = Object.keys(WORD_CATEGORIES);
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const words = WORD_CATEGORIES[randomCategory];
      const randomWord = words[Math.floor(Math.random() * words.length)];
      
      // Select random imposter
      const randomImposter = Math.floor(Math.random() * players.length);
      
      setGameWord(randomWord);
      setImposterIndex(randomImposter);
      setGamePhase(GAME_PHASES.WORD_REVEAL);
      setCurrentRevealIndex(0);
      
      // Initialize voting state
      const initialVotes = {};
      const initialHasVoted = {};
      players.forEach(player => {
        initialVotes[player] = 0;
        initialHasVoted[player] = false;
      });
      setVotes(initialVotes);
      setHasVoted(initialHasVoted);
    }
  };

  const nextPlayerReveal = () => {
    if (currentRevealIndex < players.length - 1) {
      setCurrentRevealIndex(currentRevealIndex + 1);
    } else {
      setGamePhase(GAME_PHASES.TIMER);
    }
  };

  const skipTimer = () => {
    setGamePhase(GAME_PHASES.VOTING);
  };

  const vote = (voterIndex, targetPlayer) => {
    if (!hasVoted[players[voterIndex]]) {
      setVotes(prev => ({
        ...prev,
        [targetPlayer]: prev[targetPlayer] + 1
      }));
      setHasVoted(prev => ({
        ...prev,
        [players[voterIndex]]: true
      }));
    }
  };

  const finishVoting = () => {
    // Find player with most votes
    let maxVotes = 0;
    let votedOutPlayer = '';
    Object.entries(votes).forEach(([player, voteCount]) => {
      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        votedOutPlayer = player;
      }
    });

    // Determine winner
    const imposterName = players[imposterIndex];
    const imposterVotedOut = votedOutPlayer === imposterName;
    
    setGameResults({
      votedOut: votedOutPlayer,
      imposter: imposterName,
      word: gameWord,
      imposterWins: !imposterVotedOut,
      votes: { ...votes }
    });
    
    setGamePhase(GAME_PHASES.RESULTS);
  };

  const resetGame = () => {
    setGamePhase(GAME_PHASES.SETUP);
    setPlayers([]);
    setCurrentPlayerInput('');
    setGameWord('');
    setImposterIndex(-1);
    setCurrentRevealIndex(0);
    setTimeLeft(120);
    setVotes({});
    setHasVoted({});
    setGameResults(null);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      <div className="game-container">
        <h1 className="title">Word Imposter</h1>
        
        {gamePhase === GAME_PHASES.SETUP && (
          <div>
            <h2 className="phase-title">Player Setup</h2>
            <p>Add 3 or more players to start the game</p>
            
            <div className="player-input">
              <input
                type="text"
                value={currentPlayerInput}
                onChange={(e) => setCurrentPlayerInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addPlayer()}
                placeholder="Enter player name"
              />
              <button className="btn btn-primary" onClick={addPlayer}>
                Add Player
              </button>
            </div>
            
            <div className="players-list">
              <h3>Players ({players.length}):</h3>
              {players.map((player, index) => (
                <div key={index} className="player-item">
                  {player}
                  <button 
                    className="btn btn-danger" 
                    style={{marginLeft: '10px', padding: '5px 10px', fontSize: '12px'}}
                    onClick={() => removePlayer(player)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            
            {players.length >= 3 && (
              <button className="btn btn-primary" onClick={startGame}>
                Start Game
              </button>
            )}
            
            {players.length < 3 && (
              <p style={{color: '#e74c3c'}}>Need at least 3 players to start</p>
            )}
          </div>
        )}

        {gamePhase === GAME_PHASES.WORD_REVEAL && (
          <div>
            <h2 className="phase-title">Word Reveal</h2>
            <p>Player {currentRevealIndex + 1} of {players.length}: <strong>{players[currentRevealIndex]}</strong></p>
            <p>Look at your word, then pass the device to the next player</p>
            
            <div className={`word-display ${currentRevealIndex === imposterIndex ? 'imposter-display' : ''}`}>
              {currentRevealIndex === imposterIndex ? (
                <>
                  *** YOU ARE THE IMPOSTER ***
                  <br />
                  <span style={{fontSize: '0.6em'}}>Try to guess the word and blend in!</span>
                </>
              ) : (
                <>
                  Your word is: <strong>{gameWord}</strong>
                </>
              )}
            </div>
            
            <button className="btn btn-primary" onClick={nextPlayerReveal}>
              {currentRevealIndex < players.length - 1 ? 'Next Player' : 'Start Discussion'}
            </button>
          </div>
        )}

        {gamePhase === GAME_PHASES.TIMER && (
          <div style={{position: 'relative'}}>
            <button className="btn btn-secondary skip-btn" onClick={skipTimer}>
              Skip Timer
            </button>
            <h2 className="phase-title">Discussion Time</h2>
            <p>Discuss and try to figure out who the imposter is!</p>
            <p>The imposter should try to blend in without knowing the word.</p>
            
            <div className="timer">
              {formatTime(timeLeft)}
            </div>
            
            {timeLeft <= 10 && (
              <p style={{color: '#e74c3c', fontSize: '1.2em'}}>
                Time's almost up!
              </p>
            )}
          </div>
        )}

        {gamePhase === GAME_PHASES.VOTING && (
          <div>
            <h2 className="phase-title">Voting Time</h2>
            <p>Each player votes for who they think is the imposter</p>
            
            <div className="voting-grid">
              {players.map((player, playerIndex) => (
                <div key={player} className="vote-card">
                  <h3>{player}</h3>
                  <div className="vote-count">Votes: {votes[player] || 0}</div>
                  {players.map((voter, voterIndex) => (
                    <button
                      key={`${voter}-votes-for-${player}`}
                      className={`btn btn-primary`}
                      style={{
                        margin: '2px',
                        padding: '5px 8px',
                        fontSize: '12px',
                        opacity: hasVoted[voter] ? 0.5 : 1
                      }}
                      onClick={() => vote(voterIndex, player)}
                      disabled={hasVoted[voter] || voter === player}
                    >
                      {voter} votes
                    </button>
                  ))}
                </div>
              ))}
            </div>
            
            <div style={{marginTop: '20px'}}>
              <p>Voted: {Object.values(hasVoted).filter(Boolean).length} / {players.length}</p>
              {Object.values(hasVoted).every(Boolean) && (
                <button className="btn btn-primary" onClick={finishVoting}>
                  See Results
                </button>
              )}
            </div>
          </div>
        )}

        {gamePhase === GAME_PHASES.RESULTS && gameResults && (
          <div className="results">
            <h2 className="phase-title">Game Results</h2>
            
            <div className="reveal">
              <h3>The word was: <strong>{gameResults.word}</strong></h3>
              <h3>The imposter was: <strong>{gameResults.imposter}</strong></h3>
              <h3>Voted out: <strong>{gameResults.votedOut}</strong></h3>
            </div>
            
            <div className="winner">
              {gameResults.imposterWins ? (
                <>*** IMPOSTER WINS! ***<br />
                The imposter successfully avoided detection!</>
              ) : (
                <>*** CITIZENS WIN! ***<br />
                The imposter was caught!</>
              )}
            </div>
            
            <div>
              <h4>Final Vote Count:</h4>
              {Object.entries(gameResults.votes).map(([player, voteCount]) => (
                <div key={player} style={{margin: '5px 0'}}>
                  {player}: {voteCount} votes
                  {player === gameResults.imposter && ' [IMPOSTER]'}
                </div>
              ))}
            </div>
            
            <button className="btn btn-primary" onClick={resetGame}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
