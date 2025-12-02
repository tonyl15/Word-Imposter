/**
 * Service for fetching word hints from the backend API
 */

/**
 * Fetches a hint for the given word using the Wordnik API
 * @param {string} word - The word to get a hint for
 * @returns {Promise<{hint: string | null, error: string | null}>}
 */
export async function getWordHint(word) {
  if (!word || typeof word !== 'string') {
    return { hint: null, error: 'Invalid word provided' };
  }

  // In development, return a mock hint for testing
  if (process.env.NODE_ENV === 'development') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return { hint: 'MOCK HINT', error: null };
  }

  try {
    const response = await fetch(
      `/api/related-words?word=${encodeURIComponent(word)}`,
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
  // Always available in development (mock) and production
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  
  try {
    const response = await fetch(`/api/related-words?word=test`);
    return response.status !== 404; // API exists even if it fails with test word
  } catch (error) {
    return false;
  }
}