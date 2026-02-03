const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

// GET /api/related-words?word=example
router.get('/related-words', async (req, res) => {
  const { word } = req.query;

  // Validate input
  if (!word || typeof word !== 'string') {
    console.warn('[hints] invalid word param:', word);
    return res.status(400).json({ success: false, error: 'Invalid word provided' });
  }

  const apiKey = process.env.WORDNIK_API_KEY;
  if (!apiKey) {
    console.error('[hints] WORDNIK_API_KEY missing');
    return res.status(500).json({ success: false, error: 'Wordnik API key is not configured' });
  }

  try {
    // Convert word to lowercase for API consistency
    const normalizedWord = String(word).toLowerCase();
    
    const url = `https://api.wordnik.com/v4/word.json/${encodeURIComponent(normalizedWord)}/relatedWords?useCanonical=false&relationshipTypes=same-context&limitPerRelationshipType=10&api_key=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      console.error('[hints] Wordnik API error:', response.status, response.statusText);
      return res.status(response.status).json({ 
        error: 'Failed to fetch related words',
        details: response.statusText 
      });
    }

    const data = await response.json();
    
    // Extract a random word from the same-context relationship type
    let hint = null;
    if (data && data.length > 0) {
      const sameContextRelation = data.find(relation => 
        relation.relationshipType === 'same-context' && 
        relation.words && 
        relation.words.length > 0
      );
      
      if (sameContextRelation) {
        const randomIndex = Math.floor(Math.random() * sameContextRelation.words.length);
        hint = sameContextRelation.words[randomIndex];
      }
    }

    return res.status(200).json({ 
      word: normalizedWord,
      hint,
      success: true 
    });
  } catch (error) {
    console.error('[hints] exception during fetch:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

module.exports = router;
