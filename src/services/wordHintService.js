/**
 * Service for fetching word hints from the backend API
 */

// Backend base URL: use env if provided, else default to same-origin /api
const API_BASE_URL = process.env.REACT_APP_API_URL || '';

// Env-only toggle: REACT_APP_USE_HINT_MOCK === 'true' enables mock hints,
// === 'false' disables; if undefined, default ON in development, OFF otherwise.
const USE_HINT_MOCK =
  process.env.REACT_APP_USE_HINT_MOCK === 'true' ||
  (process.env.REACT_APP_USE_HINT_MOCK === undefined && process.env.NODE_ENV === 'development');

/**
 * Fetches a hint for the given word using the Wordnik API
 * @param {string} word - The word to get a hint for
 * @returns {Promise<{hint: string | null, error: string | null}>}
 */
export async function getWordHint(word) {
  if (!word || typeof word !== 'string') {
    return { hint: null, error: 'Invalid word provided' };
  }

  // Return a mock hint when mock mode is enabled
  if (USE_HINT_MOCK) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return { hint: 'MOCK HINT', error: null };
  }

  try {
    const base = API_BASE_URL || '';
    const url = `${base}/api/related-words?word=${encodeURIComponent(word)}`;
    const response = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { 
        hint: null, 
        error: errorData.error || `HTTP ${response.status}: ${response.statusText}` 
      };
    }

    const data = await response.json();
    
    if (data.success && data.hint) {
      return { hint: data.hint, error: null };
    } else {
      return { hint: null, error: 'No hint found for this word' };
    }

  } catch (error) {
    console.error('Error fetching word hint:', error);
    return { 
      hint: null, 
      error: 'Failed to connect to hint service' 
    };
  }
}

/**
 * Checks if the hint service is available
 * @returns {Promise<boolean>}
 */
export async function isHintServiceAvailable() {
  // Always available when mock mode is enabled
  if (USE_HINT_MOCK) {
    return true;
  }
  
  try {
    const base = API_BASE_URL || '';
    const response = await fetch(`${base}/api/related-words?word=test`);
    return response.status !== 404; // API exists even if it fails with test word
  } catch (error) {
    return false;
  }
}
