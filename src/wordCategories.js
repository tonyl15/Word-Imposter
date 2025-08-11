// Word lists for the Word Imposter game
// Each category contains words that are related to each other
// The imposter won't know the category or specific word

export const WORD_CATEGORIES = {
  animals: [
    'Dog', 'Cat', 'Elephant', 'Lion', 'Tiger', 'Bear', 
    'Rabbit', 'Horse', 'Cow', 'Pig', 'Monkey', 'Giraffe',
    'Zebra', 'Penguin', 'Dolphin', 'Shark', 'Eagle', 'Owl',
    'Snake', 'Frog', 'Butterfly', 'Ant', 'Spider', 'Whale'
  ],
  
  food: [
    'Pizza', 'Burger', 'Pasta', 'Sushi', 'Tacos', 'Ice cream', 
    'Chocolate', 'Apple', 'Banana', 'Bread', 'Sandwich', 'Salad',
    'Soup', 'Steak', 'Cake', 'Cookie', 'Cheese', 'Rice', 
    'Noodles', 'Pancakes', 'Waffles', 'Donut', 'Muffin', 'Bagel'
  ],
  
  objects: [
    'Chair', 'Table', 'Phone', 'Computer', 'Car', 'Book', 
    'Pen', 'Clock', 'Mirror', 'Lamp', 'Television', 'Refrigerator',
    'Bicycle', 'Guitar', 'Camera', 'Wallet', 'Keys', 'Scissors',
    'Umbrella', 'Backpack', 'Pillow', 'Blanket', 'Toothbrush', 'Hammer'
  ],
  
  places: [
    'Beach', 'Mountain', 'Forest', 'City', 'School', 'Hospital', 
    'Library', 'Park', 'Mall', 'Airport', 'Restaurant', 'Cinema',
    'Museum', 'Zoo', 'Stadium', 'Hotel', 'Church', 'Bank',
    'Post Office', 'Gas Station', 'Grocery Store', 'Pharmacy', 'Office', 'Factory'
  ],
  
  activities: [
    'Swimming', 'Running', 'Reading', 'Cooking', 'Dancing', 'Singing', 
    'Drawing', 'Writing', 'Gaming', 'Shopping', 'Hiking', 'Painting',
    'Gardening', 'Fishing', 'Camping', 'Photography', 'Knitting', 'Jogging',
    'Cycling', 'Skiing', 'Surfing', 'Climbing', 'Bowling', 'Yoga'
  ],

  professions: [
    'Doctor', 'Teacher', 'Engineer', 'Chef', 'Artist', 'Musician',
    'Lawyer', 'Nurse', 'Firefighter', 'Police Officer', 'Pilot', 'Writer',
    'Scientist', 'Architect', 'Photographer', 'Mechanic', 'Dentist', 'Veterinarian',
    'Farmer', 'Electrician', 'Plumber', 'Carpenter', 'Barber', 'Librarian'
  ],

  sports: [
    'Football', 'Basketball', 'Tennis', 'Baseball', 'Soccer', 'Golf',
    'Swimming', 'Boxing', 'Hockey', 'Volleyball', 'Cricket', 'Rugby',
    'Skiing', 'Surfing', 'Wrestling', 'Cycling', 'Badminton', 'Ping Pong',
    'Gymnastics', 'Track and Field', 'Archery', 'Fencing', 'Karate', 'Judo'
  ],

  vehicles: [
    'Car', 'Bus', 'Train', 'Airplane', 'Bicycle', 'Motorcycle',
    'Truck', 'Boat', 'Ship', 'Submarine', 'Helicopter', 'Taxi',
    'Ambulance', 'Fire Truck', 'Police Car', 'Scooter', 'Van', 'Limousine',
    'Tractor', 'Bulldozer', 'Rocket', 'Hot Air Balloon', 'Skateboard', 'Roller Skates'
  ],

  clothing: [
    'Shirt', 'Pants', 'Dress', 'Jacket', 'Hat', 'Shoes',
    'Socks', 'Underwear', 'Sweater', 'Scarf', 'Gloves', 'Belt',
    'Tie', 'Skirt', 'Shorts', 'Coat', 'Boots', 'Sandals',
    'Pajamas', 'Swimsuit', 'Uniform', 'Apron', 'Mittens', 'Vest'
  ],

  furniture: [
    'Sofa', 'Chair', 'Table', 'Bed', 'Desk', 'Bookshelf',
    'Dresser', 'Wardrobe', 'Cabinet', 'Stool', 'Bench', 'Ottoman',
    'Nightstand', 'Coffee Table', 'Dining Table', 'Armchair', 'Recliner', 'Futon',
    'Filing Cabinet', 'TV Stand', 'Mirror', 'Lamp', 'Curtains', 'Rug'
  ],

  kitchen_items: [
    'Knife', 'Fork', 'Spoon', 'Plate', 'Bowl', 'Cup',
    'Pan', 'Pot', 'Oven', 'Microwave', 'Blender', 'Toaster',
    'Refrigerator', 'Dishwasher', 'Cutting Board', 'Spatula', 'Whisk', 'Strainer',
    'Can Opener', 'Coffee Maker', 'Kettle', 'Mixer', 'Grill', 'Freezer'
  ],

  school_subjects: [
    'Math', 'Science', 'English', 'History', 'Geography', 'Art',
    'Music', 'Physical Education', 'Chemistry', 'Biology', 'Physics', 'Literature',
    'Foreign Language', 'Computer Science', 'Psychology', 'Philosophy', 'Economics', 'Statistics',
    'Drama', 'Photography', 'Journalism', 'Creative Writing', 'Public Speaking', 'Debate'
  ],

  weather: [
    'Sunny', 'Rainy', 'Cloudy', 'Snowy', 'Windy', 'Foggy',
    'Stormy', 'Hot', 'Cold', 'Humid', 'Dry', 'Freezing',
    'Thunder', 'Lightning', 'Hail', 'Drizzle', 'Sleet', 'Hurricane',
    'Tornado', 'Blizzard', 'Mist', 'Rainbow', 'Frost', 'Dewdrops'
  ],

  emotions: [
    'Happy', 'Sad', 'Angry', 'Excited', 'Nervous', 'Calm',
    'Surprised', 'Confused', 'Proud', 'Embarrassed', 'Jealous', 'Grateful',
    'Anxious', 'Relieved', 'Frustrated', 'Content', 'Disappointed', 'Amazed',
    'Worried', 'Confident', 'Bored', 'Curious', 'Hopeful', 'Scared'
  ],

  music_instruments: [
    'Piano', 'Guitar', 'Violin', 'Drums', 'Flute', 'Trumpet',
    'Saxophone', 'Clarinet', 'Cello', 'Harp', 'Banjo', 'Accordion',
    'Harmonica', 'Trombone', 'Oboe', 'Bassoon', 'French Horn', 'Tuba',
    'Xylophone', 'Tambourine', 'Triangle', 'Cymbals', 'Organ', 'Ukulele'
  ],

  board_games: [
    'Chess', 'Checkers', 'Monopoly', 'Scrabble', 'Risk', 'Clue',
    'Battleship', 'Connect Four', 'Jenga', 'Twister', 'Sorry', 'Life',
    'Trivial Pursuit', 'Pictionary', 'Charades', 'Uno', 'Go Fish', 'Poker',
    'Backgammon', 'Dominos', 'Mahjong', 'Yahtzee', 'Boggle', 'Othello'
  ],

  technology: [
    'Computer', 'Phone', 'Tablet', 'Television', 'Radio', 'Camera',
    'Printer', 'Scanner', 'Router', 'Keyboard', 'Mouse', 'Monitor',
    'Laptop', 'Smartwatch', 'Headphones', 'Speaker', 'Microphone', 'Projector',
    'GPS', 'Remote Control', 'Charger', 'Hard Drive', 'Flash Drive', 'Webcam'
  ],

  body_parts: [
    'Head', 'Eyes', 'Nose', 'Mouth', 'Ears', 'Hair',
    'Arms', 'Hands', 'Fingers', 'Legs', 'Feet', 'Toes',
    'Neck', 'Shoulders', 'Back', 'Chest', 'Stomach', 'Knee',
    'Elbow', 'Wrist', 'Ankle', 'Thumb', 'Palm', 'Forehead'
  ],

  shapes: [
    'Circle', 'Square', 'Triangle', 'Rectangle', 'Pentagon', 'Hexagon',
    'Octagon', 'Oval', 'Diamond', 'Star', 'Heart', 'Crescent',
    'Cylinder', 'Cube', 'Sphere', 'Cone', 'Pyramid', 'Prism',
    'Parallelogram', 'Rhombus', 'Trapezoid', 'Arrow', 'Cross', 'Spiral'
  ],

  movies_genres: [
    'Comedy', 'Drama', 'Action', 'Horror', 'Romance', 'Thriller',
    'Science Fiction', 'Fantasy', 'Mystery', 'Adventure', 'Animation', 'Documentary',
    'Musical', 'Western', 'Crime', 'Biography', 'War', 'History',
    'Family', 'Superhero', 'Zombie', 'Vampire', 'Pirate', 'Spy'
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
