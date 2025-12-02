import React from 'react';
import Button from './UI/Button';

const PlayerSetup = ({ 
  playerCount, 
  setPlayerCount, 
  onStartGame, 
  onGoToSettings 
}) => {
  return (
    <div>
      <h2 className="phase-title">Game Setup</h2>
      <p style={{marginBottom: '25px'}}>Select the number of players for the game</p>
      
      <div style={{marginBottom: '30px'}}>
        <label htmlFor="playerCount" style={{fontSize: '1.2rem', fontWeight: '500', marginRight: '15px'}}>
          Number of Players:
        </label>
        <select
          id="playerCount"
          value={playerCount}
          onChange={(e) => setPlayerCount(parseInt(e.target.value))}
          style={{
            padding: '10px 15px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '2px solid rgba(255,255,255,0.3)',
            background: 'rgba(255,255,255,0.9)',
            color: '#333',
            marginRight: '20px'
          }}
        >
          {[3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num}>{num} Players</option>
          ))}
        </select>
      </div>
      
      <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Button onClick={onStartGame}>
          Start Game
        </Button>
        <Button variant="secondary" onClick={onGoToSettings}>
          Settings
        </Button>
      </div>
    </div>
  );
};

export default PlayerSetup;