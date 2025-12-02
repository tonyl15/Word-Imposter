import React from 'react';
import Button from '../UI/Button';

const WordReveal = ({
  currentPlayer,
  playerNumber,
  totalPlayers,
  gameWord,
  gameCategory,
  showCategory,
  isImposter,
  enableHints,
  hintLoading,
  hintError,
  imposterHint,
  onNextPlayer
}) => {
  return (
    <div>
      <h2 className="phase-title">Your Word</h2>
      <p><strong>{currentPlayer}</strong></p>
      <p style={{marginBottom: '30px'}}>Look at your word, memorize it, then pass the device</p>
      
      <div className="word-display">
        {showCategory && (
          <div className="category-display">
            Category: {gameCategory.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </div>
        )}
        {isImposter ? (
          <>
            <div className="imposter-title">
              *** YOU ARE THE IMPOSTER ***
            </div>
            <div className="imposter-instruction">
              Try to guess the word and blend in!
            </div>
            
            {/* Hint section for imposter - only show if hints are enabled */}
            {enableHints && (
              <div className="hint-container">
                <div className="hint-title">
                  Hint:
                </div>
                {hintLoading ? (
                  <div className="hint-loading">
                    Loading hint...
                  </div>
                ) : hintError ? (
                  <div className="hint-error">
                    Hint unavailable
                  </div>
                ) : imposterHint ? (
                  <div className="hint-text">
                    <strong>{imposterHint}</strong>
                  </div>
                ) : (
                  <div className="hint-none">
                    No hint available for this word
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            Your word is: <strong>{gameWord}</strong>
          </>
        )}
      </div>
      
      <Button onClick={onNextPlayer}>
        {playerNumber < totalPlayers ? 'Next Player' : 'Finish Round'}
      </Button>
    </div>
  );
};

export default WordReveal;