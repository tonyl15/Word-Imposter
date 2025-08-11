import React, { useState, useEffect } from 'react';
import { getRandomWord } from './wordCategories';

const GAME_PHASES = {
  SETUP: 'setup',
  PLAYER_READY: 'player_ready',
  WORD_REVEAL: 'word_reveal',
  ROUND_COMPLETE: 'round_complete'
};

function App() {
  const [gamePhase, setGamePhase] = useState(GAME_PHASES.SETUP);
  const [playerCount, setPlayerCount] = useState(3);
  const [players, setPlayers] = useState([]);
  const [gameWord, setGameWord] = useState('');
  const [imposterIndex, setImposterIndex] = useState(-1);
  const [currentRevealIndex, setCurrentRevealIndex] = useState(0);

  // Generate player names based on count
  const generatePlayers = () => {
    const playerNames = [];
    for (let i = 1; i <= playerCount; i++) {
      playerNames.push(`Player ${i}`);
    }
    return playerNames;
  };

  const startGame = () => {
    const generatedPlayers = generatePlayers();
    
    // Get random word and category
    const { word: randomWord } = getRandomWord();
    
    // Select random imposter
    const randomImposter = Math.floor(Math.random() * generatedPlayers.length);
    
    setPlayers(generatedPlayers);
    setGameWord(randomWord);
    setImposterIndex(randomImposter);
    setGamePhase(GAME_PHASES.PLAYER_READY);
    setCurrentRevealIndex(0);
  };

  const nextPlayerReveal = () => {
    if (currentRevealIndex < players.length - 1) {
      setCurrentRevealIndex(currentRevealIndex + 1);
      setGamePhase(GAME_PHASES.PLAYER_READY);
    } else {
      setGamePhase(GAME_PHASES.ROUND_COMPLETE);
    }
  };

  const startNewRound = () => {
    // Keep the same players, just get new word and imposter
    const { word: randomWord } = getRandomWord();
    const randomImposter = Math.floor(Math.random() * players.length);
    
    setGameWord(randomWord);
    setImposterIndex(randomImposter);
    setGamePhase(GAME_PHASES.PLAYER_READY);
    setCurrentRevealIndex(0);
  };

  const resetGame = () => {
    setGamePhase(GAME_PHASES.SETUP);
    setPlayers([]);
    setPlayerCount(3);
    setGameWord('');
    setImposterIndex(-1);
    setCurrentRevealIndex(0);
  };

  const showPlayerWord = () => {
    setGamePhase(GAME_PHASES.WORD_REVEAL);
  };

  return (
    <div className="app">
      <div className="game-container">
        <h1 className="title">Word Imposter</h1>
        
        {gamePhase === GAME_PHASES.SETUP && (
          <div>
            <h2 className="phase-title">Game Setup</h2>
            <p>Select the number of players for the game</p>
            
            <div style={{margin: '30px 0'}}>
              <label htmlFor="playerCount" style={{fontSize: '1.2em', marginRight: '15px'}}>
                Number of Players:
              </label>
              <select
                id="playerCount"
                value={playerCount}
                onChange={(e) => setPlayerCount(parseInt(e.target.value))}
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '2px solid #ddd',
                  marginRight: '20px'
                }}
              >
                {[3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num} Players</option>
                ))}
              </select>
            </div>
            
            <button className="btn btn-primary" onClick={startGame}>
              Start Game
            </button>
          </div>
        )}

        {gamePhase === GAME_PHASES.PLAYER_READY && (
          <div>
            <h2 className="phase-title">Get Ready</h2>
            <p style={{fontSize: '1.2em', marginBottom: '30px'}}>
              Showing word for: <strong style={{color: '#667eea'}}>{players[currentRevealIndex]}</strong>
            </p>
            <p>Player {currentRevealIndex + 1} of {players.length}</p>
            <p style={{color: '#666', marginBottom: '40px'}}>
              Make sure only <strong>{players[currentRevealIndex]}</strong> can see the screen, then click "Show Word"
            </p>
            
            <button className="btn btn-primary" onClick={showPlayerWord}>
              Show Word
            </button>
          </div>
        )}

        {gamePhase === GAME_PHASES.WORD_REVEAL && (
          <div>
            <h2 className="phase-title">Your Word</h2>
            <p><strong>{players[currentRevealIndex]}</strong></p>
            <p style={{marginBottom: '30px'}}>Look at your word, memorize it, then pass the device</p>
            
            <div className="word-display">
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
              {currentRevealIndex < players.length - 1 ? 'Next Player' : 'Finish Round'}
            </button>
          </div>
        )}

        {gamePhase === GAME_PHASES.ROUND_COMPLETE && (
          <div>
            <h2 className="phase-title">Round Complete!</h2>
            <p style={{fontSize: '1.2em', marginBottom: '30px'}}>
              All players have seen their words. You can now discuss and try to identify the imposter!
            </p>
            
            <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button className="btn btn-primary" onClick={startNewRound}>
                Start New Round
              </button>
              <button className="btn btn-secondary" onClick={resetGame}>
                Change Players
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
