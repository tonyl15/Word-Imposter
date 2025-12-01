import React, { useState, useEffect } from 'react';
import { getRandomWord } from './wordCategories';
import { getWordHint } from './api/wordHintService';

const GAME_PHASES = {
  SETUP: 'setup',
  SETTINGS: 'settings',
  PLAYER_READY: 'player_ready',
  WORD_REVEAL: 'word_reveal',
  ROUND_COMPLETE: 'round_complete'
};

function App() {
  const [gamePhase, setGamePhase] = useState(GAME_PHASES.SETUP);
  const [playerCount, setPlayerCount] = useState(3);
  const [players, setPlayers] = useState([]);
  const [gameWord, setGameWord] = useState('');
  const [gameCategory, setGameCategory] = useState('');
  const [imposterIndex, setImposterIndex] = useState(-1);
  const [currentRevealIndex, setCurrentRevealIndex] = useState(0);
  const [showCategory, setShowCategory] = useState(false);
  const [imposterHint, setImposterHint] = useState(null);
  const [hintLoading, setHintLoading] = useState(false);
  const [hintError, setHintError] = useState(null);

  // Generate player names based on count
  const generatePlayers = () => {
    const playerNames = [];
    for (let i = 1; i <= playerCount; i++) {
      playerNames.push(`Player ${i}`);
    }
    return playerNames;
  };

  // Fetch hint for the imposter
  const fetchImposterHint = async (word) => {
    setHintLoading(true);
    setHintError(null);
    setImposterHint(null);

    try {
      const { hint, error } = await getWordHint(word);
      
      if (error) {
        setHintError(error);
      } else {
        setImposterHint(hint);
      }
    } catch (err) {
      setHintError('Failed to fetch hint');
      console.error('Error fetching hint:', err);
    } finally {
      setHintLoading(false);
    }
  };

  const startGame = () => {
    const generatedPlayers = generatePlayers();
    
    // Get random word and category
    const { word: randomWord, category: randomCategory } = getRandomWord();
    
    // Select random imposter
    const randomImposter = Math.floor(Math.random() * generatedPlayers.length);
    
    setPlayers(generatedPlayers);
    setGameWord(randomWord);
    setGameCategory(randomCategory);
    setImposterIndex(randomImposter);
    setGamePhase(GAME_PHASES.PLAYER_READY);
    setCurrentRevealIndex(0);
    
    // Reset hint state
    setImposterHint(null);
    setHintError(null);
    setHintLoading(false);
    
    // Fetch hint for the imposter
    fetchImposterHint(randomWord);
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
    const { word: randomWord, category: randomCategory } = getRandomWord();
    const randomImposter = Math.floor(Math.random() * players.length);
    
    setGameWord(randomWord);
    setGameCategory(randomCategory);
    setImposterIndex(randomImposter);
    setGamePhase(GAME_PHASES.PLAYER_READY);
    setCurrentRevealIndex(0);
    
    // Reset hint state and fetch new hint
    setImposterHint(null);
    setHintError(null);
    setHintLoading(false);
    fetchImposterHint(randomWord);
  };

  const goToSettings = () => {
    setGamePhase(GAME_PHASES.SETTINGS);
  };

  const goBackToSetup = () => {
    setGamePhase(GAME_PHASES.SETUP);
  };

  const resetGame = () => {
    setGamePhase(GAME_PHASES.SETUP);
    setPlayers([]);
    setPlayerCount(3);
    setGameWord('');
    setGameCategory('');
    setImposterIndex(-1);
    setCurrentRevealIndex(0);
    setImposterHint(null);
    setHintError(null);
    setHintLoading(false);
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
            
            <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <button className="btn btn-primary" onClick={startGame}>
                Start Game
              </button>
              <button className="btn btn-secondary" onClick={goToSettings}>
                Settings
              </button>
            </div>
          </div>
        )}

        {gamePhase === GAME_PHASES.SETTINGS && (
          <div>
            <h2 className="phase-title">Game Settings</h2>
            <p>Customize your Word Imposter experience</p>
            
            <div style={{margin: '30px 0', textAlign: 'left', maxWidth: '400px', margin: '30px auto'}}>
              <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #ddd'
              }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  fontSize: '1.1em',
                  cursor: 'pointer'
                }}>
                  <input
                    type="checkbox"
                    checked={showCategory}
                    onChange={(e) => setShowCategory(e.target.checked)}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer'
                    }}
                  />
                  <div>
                    <strong>Show word category</strong>
                    <div style={{fontSize: '0.9em', color: '#666', marginTop: '5px'}}>
                      Display the category (e.g., "Animals", "Food") along with each word
                    </div>
                  </div>
                </label>
              </div>
            </div>
            
            <button className="btn btn-secondary" onClick={goBackToSetup}>
              Back to Setup
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
              {showCategory && (
                <>
                  <div style={{fontSize: '0.7em', color: '#667eea', marginBottom: '10px'}}>
                    Category: {gameCategory.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                </>
              )}
              {currentRevealIndex === imposterIndex ? (
                <>
                  <div style={{color: '#667eea', fontWeight: 'bold', marginBottom: '20px'}}>
                    *** YOU ARE THE IMPOSTER ***
                  </div>
                  <div style={{fontSize: '0.8em', marginBottom: '15px', color: '#666'}}>
                    Try to guess the word and blend in!
                  </div>
                  
                  {/* Hint section for imposter */}
                  <div style={{
                    background: '#e0e7ff', 
                    borderRadius: '8px', 
                    padding: '15px',
                    margin: '15px 0'
                  }}>
                    <div style={{fontSize: '0.9em', fontWeight: 'bold', color: '#667eea', marginBottom: '8px'}}>
                      Hint:
                    </div>
                    {hintLoading ? (
                      <div style={{color: '#666', fontSize: '0.8em'}}>
                        Loading hint...
                      </div>
                    ) : hintError ? (
                      <div style={{color: '#666', fontSize: '0.8em'}}>
                        Hint unavailable
                      </div>
                    ) : imposterHint ? (
                      <div style={{color: '#856404', fontSize: '0.9em'}}>
                        <strong>{imposterHint}</strong>
                        <div style={{fontSize: '0.75em', marginTop: '5px', color: '#6c757d'}}>
                          (A word related to the secret word)
                        </div>
                      </div>
                    ) : (
                      <div style={{color: '#666', fontSize: '0.8em'}}>
                        No hint available for this word
                      </div>
                    )}
                  </div>
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
