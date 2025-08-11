// Word lists for the Word Imposter game
// Each category contains words that are related to each other
// The imposter won't know the category or specific word

export const WORD_CATEGORIES = {
  animals: [
    'Dog', 'Cat', 'Elephant', 'Lion', 'Tiger', 'Bear', 
    'Rabbit', 'Horse', 'Cow', 'Pig', 'Monkey', 'Giraffe',
    'Zebra', 'Penguin', 'Dolphin', 'Shark'
  ],
  
  food: [
    'Pizza', 'Burger', 'Pasta', 'Sushi', 'Tacos', 'Ice cream', 
    'Chocolate', 'Apple', 'Banana', 'Bread', 'Sandwich', 'Salad',
    'Soup', 'Steak', 'Cake', 'Cookie'
  ],
  
  objects: [
    'Chair', 'Table', 'Phone', 'Computer', 'Car', 'Book', 
    'Pen', 'Clock', 'Mirror', 'Lamp', 'Television', 'Refrigerator',
    'Bicycle', 'Guitar', 'Camera', 'Wallet'
  ],
  
  places: [
    'Beach', 'Mountain', 'Forest', 'City', 'School', 'Hospital', 
    'Library', 'Park', 'Mall', 'Airport', 'Restaurant', 'Cinema',
    'Museum', 'Zoo', 'Stadium', 'Hotel'
  ],
  
  activities: [
    'Swimming', 'Running', 'Reading', 'Cooking', 'Dancing', 'Singing', 
    'Drawing', 'Writing', 'Gaming', 'Shopping', 'Hiking', 'Painting',
    'Gardening', 'Fishing', 'Camping', 'Photography'
  ],

  professions: [
    'Doctor', 'Teacher', 'Engineer', 'Chef', 'Artist', 'Musician',
    'Lawyer', 'Nurse', 'Firefighter', 'Police Officer', 'Pilot', 'Writer',
    'Scientist', 'Architect', 'Photographer', 'Mechanic'
  ],

  colors: [
    'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange',
    'Pink', 'Brown', 'Black', 'White', 'Gray', 'Turquoise',
    'Maroon', 'Navy', 'Gold', 'Silver'
  ],

  sports: [
    'Football', 'Basketball', 'Tennis', 'Baseball', 'Soccer', 'Golf',
    'Swimming', 'Boxing', 'Hockey', 'Volleyball', 'Cricket', 'Rugby',
    'Skiing', 'Surfing', 'Wrestling', 'Cycling'
  ]
};

// Helper function to get a random word from a random category
export const getRandomWord = () => {
  const categories = Object.keys(WORD_CATEGORIES);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const words = WORD_CATEGORIES[randomCategory];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  
  return {
    word: randomWord,
    category: randomCategory
  };
};

// Helper function to get all categories
export const getCategories = () => {
  return Object.keys(WORD_CATEGORIES);
};

// Helper function to get words from a specific category
export const getWordsFromCategory = (category) => {
  return WORD_CATEGORIES[category] || [];
};
