import React from 'react';

const HintSetting = ({ enableHints, setEnableHints }) => {
  return (
    <div className="setting-item">
      <label className="setting-label">
        <input
          type="checkbox"
          checked={enableHints}
          onChange={(e) => setEnableHints(e.target.checked)}
          className="setting-checkbox"
        />
        <div>
          <strong>Enable hints for imposter</strong>
          <div className="setting-description">
            Show a related word hint to help the imposter blend in
          </div>
        </div>
      </label>
    </div>
  );
};

export default HintSetting;