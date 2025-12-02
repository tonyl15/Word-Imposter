import React, { useState } from 'react';
import { getRandomWord } from './wordCategories';
import { GAME_PHASES } from './constants/gamePhases';
import { useGameState, useHints } from './hooks/useGame';

// Components
import PlayerSetup from './components/PlayerSetup';
import GameSettings from './settings/GameSettings';
import Discussion from './components/GamePhases/Discussion';
import WordReveal from './components/GamePhases/WordReveal';
import GameComplete from './components/GamePhases/GameComplete';

function App() {
  const [gamePhase, setGamePhase] = useState(GAME_PHASES.SETUP);
  const [playerCount, setPlayerCount] = useState(3);
  const [players, setPlayers] = useState([]);
  const [gameWord, setGameWord] = useState('');
  const [gameCategory, setGameCategory] = useState('');
  const [imposterIndex, setImposterIndex] = useState(-1);
  const [currentRevealIndex, setCurrentRevealIndex] = useState(0);
  const [showCategory, setShowCategory] = useState(false);
  const [enableHints, setEnableHints] = useState(true);
  const [imposterHint, setImposterHint] = useState(null);
  const [hintLoading, setHintLoading] = useState(false);
  const [hintError, setHintError] = useState(null);

  const { generatePlayers } = useGameState();
  const { fetchImposterHint } = useHints();

  const startGame = () => {
    const generatedPlayers = generatePlayers(playerCount);
    
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
    fetchImposterHint(randomWord, enableHints, {
      setHintLoading,
      setHintError,
      setImposterHint
    });
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
    fetchImposterHint(randomWord, enableHints, {
      setHintLoading,
      setHintError,
      setImposterHint
    });
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
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
      <div className="game-container">
        <h1 style={{fontSize: '3.5rem', fontWeight: 'bold', color: '#667eea', marginBottom: '20px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)', textAlign: 'center'}}>Word Imposter</h1>
        
        {gamePhase === GAME_PHASES.SETUP && (
          <PlayerSetup
            playerCount={playerCount}
            setPlayerCount={setPlayerCount}
            onStartGame={startGame}
            onGoToSettings={goToSettings}
          />
        )}

        {gamePhase === GAME_PHASES.SETTINGS && (
          <GameSettings
            showCategory={showCategory}
            setShowCategory={setShowCategory}
            enableHints={enableHints}
            setEnableHints={setEnableHints}
            onGoBackToSetup={goBackToSetup}
          />
        )}

        {gamePhase === GAME_PHASES.PLAYER_READY && (
          <Discussion
            currentPlayer={players[currentRevealIndex]}
            playerNumber={currentRevealIndex + 1}
            totalPlayers={players.length}
            onShowPlayerWord={showPlayerWord}
          />
        )}

        {gamePhase === GAME_PHASES.WORD_REVEAL && (
          <WordReveal
            currentPlayer={players[currentRevealIndex]}
            playerNumber={currentRevealIndex + 1}
            totalPlayers={players.length}
            gameWord={gameWord}
            gameCategory={gameCategory}
            showCategory={showCategory}
            isImposter={currentRevealIndex === imposterIndex}
            enableHints={enableHints}
            hintLoading={hintLoading}
            hintError={hintError}
            imposterHint={imposterHint}
            onNextPlayer={nextPlayerReveal}
          />
        )}

        {gamePhase === GAME_PHASES.ROUND_COMPLETE && (
          <GameComplete
            onStartNewRound={startNewRound}
            onResetGame={resetGame}
          />
        )}
      </div>
    </div>
  );
}

export default App;
