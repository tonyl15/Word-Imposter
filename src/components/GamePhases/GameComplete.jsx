import React from 'react';
import Button from '../UI/Button';

const GameComplete = ({
  onStartNewRound,
  onResetGame
}) => {
  return (
    <div>
      <h2 className="phase-title">Round Complete!</h2>
      <p style={{fontSize: '1.2em', marginBottom: '30px'}}>
        All players have seen their words. You can now discuss and try to identify the imposter!
      </p>
      
      <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Button onClick={onStartNewRound}>
          Start New Round
        </Button>
        <Button variant="secondary" onClick={onResetGame}>
          Change Players
        </Button>
      </div>
    </div>
  );
};

export default GameComplete;