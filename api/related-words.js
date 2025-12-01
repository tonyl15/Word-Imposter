export default async function handler(req, res) {
  // Enable CORS for the frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { word } = req.query;

  if (!word) {
    return res.status(400).json({ error: 'Word parameter is required' });
  }

  // Check if API key is configured
  const apiKey = process.env.WORDNIK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Wordnik API key not configured' });
  }

  try {
    // Make request to Wordnik API
    const response = await fetch(
      `https://api.wordnik.com/v4/word.json/${encodeURIComponent(word)}/relatedWords?useCanonical=false&relationshipTypes=same-context&limitPerRelationshipType=10&api_key=${apiKey}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.error(`Wordnik API error: ${response.status} ${response.statusText}`);
      return res.status(response.status).json({ 
        error: 'Failed to fetch related words',
        details: response.statusText 
      });
    }

    const data = await response.json();
    
    // Extract the first word from the same-context relationship type
    let hint = null;
    if (data && data.length > 0) {
      const sameContextRelation = data.find(relation => 
        relation.relationshipType === 'same-context' && 
        relation.words && 
        relation.words.length > 0
      );
      
      if (sameContextRelation) {
        hint = sameContextRelation.words[0];
      }
    }

    return res.status(200).json({ 
      word,
      hint,
      success: true 
    });

  } catch (error) {
    console.error('Error fetching related words:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
}