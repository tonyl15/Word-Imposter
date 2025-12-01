/**
 * Test script for the Wordnik API integration
 * Run this to test if the hints are working properly
 */

import { getWordHint } from '../src/api/wordHintService.js';

// Test words
const testWords = ['musician', 'elephant', 'pizza', 'computer', 'ocean'];

async function testWordHints() {
  console.log('Testing Word Hints API...\n');
  
  for (const word of testWords) {
    console.log(`Testing word: "${word}"`);
    
    try {
      const { hint, error } = await getWordHint(word);
      
      if (error) {
        console.log(`  [ERROR] ${error}`);
      } else if (hint) {
        console.log(`  [SUCCESS] Hint: "${hint}"`);
      } else {
        console.log(`  [WARNING] No hint available`);
      }
    } catch (err) {
      console.log(`  [EXCEPTION] ${err.message}`);
    }
    
    console.log(''); // Empty line for readability
  }
}

// Run tests
testWordHints();