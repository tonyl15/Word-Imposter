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
  console.log('Received word:', word);

  if (!word) {
    return res.status(400).json({ error: 'Word parameter is required' });
  }

  // Check if API key is configured
  const apiKey = process.env.WORDNIK_API_KEY;
  console.log('API key exists:', !!apiKey);
  console.log('Environment variables:', Object.keys(process.env).filter(key => key.includes('WORDNIK')));
  if (!apiKey) {
    return res.status(500).json({ error: 'Wordnik API key not configured' });
  }

  try {
    // Convert word to lowercase for API consistency
    const normalizedWord = word.toLowerCase();
    console.log('Making request to Wordnik API for word:', normalizedWord);
    
    // Make request to Wordnik API
    const response = await fetch(
      `https://api.wordnik.com/v4/word.json/${encodeURIComponent(normalizedWord)}/relatedWords?useCanonical=false&relationshipTypes=same-context&limitPerRelationshipType=10&api_key=${apiKey}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    console.log('Wordnik API response status:', response.status);

    if (!response.ok) {
      console.error(`Wordnik API error: ${response.status} ${response.statusText}`);
      return res.status(response.status).json({ 
        error: 'Failed to fetch related words',
        details: response.statusText 
      });
    }

    const data = await response.json();
    console.log('Wordnik API data length:', data?.length || 0);
    
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
        console.log('Found hint:', hint);
      } else {
        console.log('No same-context relation found');
      }
    } else {
      console.log('No data returned from Wordnik API');
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