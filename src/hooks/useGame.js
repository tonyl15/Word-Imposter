import { getWordHint } from '../services/wordHintService';

export const useGameState = () => {
  // This could be expanded to include more game state logic
  const generatePlayers = (playerCount) => {
    const playerNames = [];
    for (let i = 1; i <= playerCount; i++) {
      playerNames.push(`Player ${i}`);
    }
    return playerNames;
  };

  return { generatePlayers };
};

export const useHints = () => {
  const fetchImposterHint = async (word, enableHints, setters) => {
    const { setHintLoading, setHintError, setImposterHint } = setters;
    
    // Only fetch hints if the setting is enabled
    if (!enableHints) {
      setImposterHint(null);
      setHintError(null);
      setHintLoading(false);
      return;
    }

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

  return { fetchImposterHint };
};