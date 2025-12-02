import React from 'react';

const CategorySetting = ({ showCategory, setShowCategory }) => {
  return (
    <div className="setting-item">
      <label className="setting-label">
        <input
          type="checkbox"
          checked={showCategory}
          onChange={(e) => setShowCategory(e.target.checked)}
          className="setting-checkbox"
        />
        <div>
          <strong>Show word category</strong>
          <div className="setting-description">
            Display the category (e.g., "Animals", "Food") along with each word
          </div>
        </div>
      </label>
    </div>
  );
};

export default CategorySetting;