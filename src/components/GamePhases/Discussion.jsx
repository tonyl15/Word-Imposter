import React from 'react';
import Button from '../UI/Button';

const Discussion = ({
  currentPlayer,
  playerNumber,
  totalPlayers,
  onShowPlayerWord
}) => {
  return (
    <div>
      <h2 className="phase-title">Get Ready</h2>
      <p style={{fontSize: '1.5rem', marginBottom: '30px'}}>
        Showing word for: <strong>{currentPlayer}</strong>
      </p>
      <p style={{marginBottom: '10px'}}>Player {playerNumber} of {totalPlayers}</p>
      <p style={{marginBottom: '40px'}}>
        Make sure only <strong>{currentPlayer}</strong> can see the screen, then click "Show Word"
      </p>
      
      <Button onClick={onShowPlayerWord}>
        Show Word
      </Button>
    </div>
  );
};

export default Discussion;