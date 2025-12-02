import React from 'react';
import Button from '../components/UI/Button';
import CategorySetting from './CategorySetting';
import HintSetting from './HintSetting';

const GameSettings = ({
  showCategory,
  setShowCategory,
  enableHints,
  setEnableHints,
  onGoBackToSetup
}) => {
  return (
    <div>
      <h2 className="phase-title">Game Settings</h2>
      <p style={{fontSize: '1.1rem', marginBottom: '30px'}}>Customize your Word Imposter experience</p>
      
      <div className="settings-container">
        <CategorySetting 
          showCategory={showCategory}
          setShowCategory={setShowCategory}
        />
        
        <HintSetting 
          enableHints={enableHints}
          setEnableHints={setEnableHints}
        />
      </div>
      
      <Button variant="secondary" onClick={onGoBackToSetup}>
        Back to Setup
      </Button>
    </div>
  );
};

export default GameSettings;