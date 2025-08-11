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
  ],

  fruits: [
    'Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Blueberry',
    'Pineapple', 'Mango', 'Watermelon', 'Peach', 'Pear', 'Cherry',
    'Kiwi', 'Lemon', 'Lime', 'Coconut', 'Avocado', 'Papaya',
    'Pomegranate', 'Raspberry', 'Blackberry', 'Cantaloupe', 'Plum', 'Apricot'
  ],

  vegetables: [
    'Carrot', 'Broccoli', 'Spinach', 'Potato', 'Tomato', 'Cucumber',
    'Onion', 'Garlic', 'Pepper', 'Corn', 'Lettuce', 'Cabbage',
    'Celery', 'Mushroom', 'Eggplant', 'Zucchini', 'Asparagus', 'Cauliflower',
    'Brussels Sprouts', 'Radish', 'Beet', 'Turnip', 'Pumpkin', 'Squash'
  ],

  drinks: [
    'Water', 'Coffee', 'Tea', 'Soda', 'Juice', 'Milk',
    'Beer', 'Wine', 'Cocktail', 'Smoothie', 'Lemonade', 'Energy Drink',
    'Hot Chocolate', 'Iced Tea', 'Sports Drink', 'Milkshake', 'Kombucha', 'Seltzer',
    'Cider', 'Champagne', 'Whiskey', 'Vodka', 'Rum', 'Gin'
  ],

  colors: [
    'Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange',
    'Pink', 'Brown', 'Black', 'White', 'Gray', 'Silver',
    'Gold', 'Turquoise', 'Maroon', 'Navy', 'Teal', 'Magenta',
    'Coral', 'Crimson', 'Indigo', 'Violet', 'Beige', 'Tan'
  ],

  countries: [
    'United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'Chile',
    'United Kingdom', 'France', 'Germany', 'Italy', 'Spain', 'Russia',
    'China', 'Japan', 'India', 'Australia', 'Egypt', 'South Africa',
    'Nigeria', 'Kenya', 'Thailand', 'Vietnam', 'Turkey', 'Greece'
  ],

  languages: [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese',
    'Chinese', 'Japanese', 'Korean', 'Arabic', 'Russian', 'Hindi',
    'Dutch', 'Swedish', 'Norwegian', 'Finnish', 'Polish', 'Czech',
    'Hungarian', 'Romanian', 'Greek', 'Turkish', 'Hebrew', 'Thai'
  ],

  planets_space: [
    'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn',
    'Uranus', 'Neptune', 'Sun', 'Moon', 'Star', 'Galaxy',
    'Asteroid', 'Comet', 'Meteor', 'Nebula', 'Black Hole', 'Satellite',
    'Space Station', 'Rocket', 'Astronaut', 'Telescope', 'Solar System', 'Universe'
  ],

  sea_creatures: [
    'Fish', 'Shark', 'Whale', 'Dolphin', 'Octopus', 'Squid',
    'Jellyfish', 'Crab', 'Lobster', 'Shrimp', 'Seahorse', 'Starfish',
    'Sea Turtle', 'Seal', 'Walrus', 'Stingray', 'Eel', 'Clam',
    'Oyster', 'Coral', 'Seaweed', 'Plankton', 'Barnacle', 'Sea Urchin'
  ],

  insects: [
    'Ant', 'Bee', 'Butterfly', 'Spider', 'Fly', 'Mosquito',
    'Beetle', 'Grasshopper', 'Cricket', 'Dragonfly', 'Moth', 'Wasp',
    'Ladybug', 'Caterpillar', 'Cockroach', 'Termite', 'Flea', 'Tick',
    'Praying Mantis', 'Firefly', 'Centipede', 'Millipede', 'Scorpion', 'Tarantula'
  ],

  birds: [
    'Eagle', 'Owl', 'Robin', 'Sparrow', 'Cardinal', 'Blue Jay',
    'Crow', 'Raven', 'Hawk', 'Falcon', 'Parrot', 'Canary',
    'Flamingo', 'Peacock', 'Turkey', 'Chicken', 'Duck', 'Goose',
    'Swan', 'Pelican', 'Seagull', 'Penguin', 'Ostrich', 'Hummingbird'
  ],

  flowers: [
    'Rose', 'Tulip', 'Daisy', 'Sunflower', 'Lily', 'Orchid',
    'Carnation', 'Daffodil', 'Iris', 'Peony', 'Chrysanthemum', 'Hydrangea',
    'Marigold', 'Pansy', 'Violet', 'Poppy', 'Hibiscus', 'Jasmine',
    'Lavender', 'Dandelion', 'Geranium', 'Begonia', 'Azalea', 'Camellia'
  ],

  trees: [
    'Oak', 'Pine', 'Maple', 'Birch', 'Willow', 'Cedar',
    'Elm', 'Ash', 'Cherry', 'Apple', 'Palm', 'Redwood',
    'Fir', 'Spruce', 'Poplar', 'Magnolia', 'Dogwood', 'Hickory',
    'Walnut', 'Pecan', 'Bamboo', 'Eucalyptus', 'Sequoia', 'Cypress'
  ],

  gemstones: [
    'Diamond', 'Ruby', 'Emerald', 'Sapphire', 'Pearl', 'Amethyst',
    'Topaz', 'Opal', 'Garnet', 'Turquoise', 'Jade', 'Onyx',
    'Quartz', 'Agate', 'Jasper', 'Moonstone', 'Peridot', 'Aquamarine',
    'Citrine', 'Tanzanite', 'Malachite', 'Lapis Lazuli', 'Hematite', 'Obsidian'
  ],

  metals: [
    'Gold', 'Silver', 'Copper', 'Iron', 'Steel', 'Aluminum',
    'Platinum', 'Titanium', 'Zinc', 'Lead', 'Tin', 'Bronze',
    'Brass', 'Nickel', 'Chromium', 'Cobalt', 'Mercury', 'Magnesium',
    'Calcium', 'Sodium', 'Potassium', 'Lithium', 'Uranium', 'Tungsten'
  ],

  natural_disasters: [
    'Earthquake', 'Hurricane', 'Tornado', 'Flood', 'Drought', 'Wildfire',
    'Volcano', 'Tsunami', 'Blizzard', 'Avalanche', 'Landslide', 'Hailstorm',
    'Lightning', 'Thunderstorm', 'Cyclone', 'Typhoon', 'Mudslide', 'Sinkhole',
    'Ice Storm', 'Heat Wave', 'Cold Snap', 'Dust Storm', 'Sandstorm', 'Monsoon'
  ],

  mythical_creatures: [
    'Dragon', 'Unicorn', 'Phoenix', 'Griffin', 'Centaur', 'Mermaid',
    'Fairy', 'Elf', 'Dwarf', 'Giant', 'Troll', 'Goblin',
    'Vampire', 'Werewolf', 'Zombie', 'Ghost', 'Angel', 'Demon',
    'Witch', 'Wizard', 'Cyclops', 'Minotaur', 'Pegasus', 'Sphinx'
  ],

  holidays: [
    'Christmas', 'New Year', 'Easter', 'Halloween', 'Thanksgiving', 'Valentine\'s Day',
    'Independence Day', 'Memorial Day', 'Labor Day', 'Mother\'s Day', 'Father\'s Day', 'Birthday',
    'Anniversary', 'Wedding', 'Graduation', 'Hanukkah', 'Diwali', 'Ramadan',
    'Chinese New Year', 'St. Patrick\'s Day', 'Cinco de Mayo', 'Mardi Gras', 'Carnival', 'Festival'
  ],

  hobbies: [
    'Reading', 'Painting', 'Drawing', 'Photography', 'Gardening', 'Cooking',
    'Baking', 'Knitting', 'Sewing', 'Woodworking', 'Pottery', 'Sculpting',
    'Collecting', 'Hiking', 'Camping', 'Fishing', 'Hunting', 'Bird Watching',
    'Star Gazing', 'Chess', 'Crosswords', 'Puzzles', 'Board Games', 'Video Games'
  ],

  office_supplies: [
    'Pen', 'Pencil', 'Paper', 'Stapler', 'Scissors', 'Ruler',
    'Eraser', 'Highlighter', 'Marker', 'Glue', 'Tape', 'Folder',
    'Binder', 'Notebook', 'Calendar', 'Calculator', 'Printer', 'Computer',
    'Desk', 'Chair', 'Filing Cabinet', 'Shredder', 'Hole Punch', 'Paper Clips'
  ],

  medical_terms: [
    'Doctor', 'Nurse', 'Hospital', 'Medicine', 'Surgery', 'X-ray',
    'Stethoscope', 'Thermometer', 'Bandage', 'Injection', 'Pill', 'Tablet',
    'Prescription', 'Emergency', 'Ambulance', 'Patient', 'Diagnosis', 'Treatment',
    'Recovery', 'Fever', 'Pain', 'Injury', 'Infection', 'Allergy'
  ],

  construction: [
    'Hammer', 'Nail', 'Screw', 'Drill', 'Saw', 'Wrench',
    'Screwdriver', 'Pliers', 'Level', 'Tape Measure', 'Ladder', 'Blueprint',
    'Brick', 'Concrete', 'Wood', 'Steel', 'Paint', 'Brush',
    'Roller', 'Sandpaper', 'Glue', 'Cement', 'Tile', 'Roof'
  ],

  baby_items: [
    'Crib', 'Stroller', 'Car Seat', 'Diaper', 'Bottle', 'Pacifier',
    'Bib', 'Blanket', 'Toy', 'Rattle', 'Mobile', 'High Chair',
    'Baby Food', 'Formula', 'Wipes', 'Lotion', 'Powder', 'Onesie',
    'Sleeper', 'Socks', 'Hat', 'Mittens', 'Booties', 'Teething Ring'
  ],

  card_games: [
    'Poker', 'Blackjack', 'Bridge', 'Rummy', 'Go Fish', 'Old Maid',
    'War', 'Solitaire', 'Hearts', 'Spades', 'Whist', 'Cribbage',
    'Pinochle', 'Euchre', 'Gin Rummy', 'Canasta', 'Baccarat', 'Texas Hold\'em',
    'Five Card Stud', 'Seven Card Stud', 'Omaha', 'Crazy Eights', 'Uno', 'Skip-Bo'
  ],

  dance_styles: [
    'Ballet', 'Jazz', 'Hip Hop', 'Tap', 'Modern', 'Contemporary',
    'Ballroom', 'Latin', 'Salsa', 'Tango', 'Waltz', 'Foxtrot',
    'Swing', 'Lindy Hop', 'Break Dancing', 'Folk', 'Irish', 'Scottish',
    'Flamenco', 'Belly Dance', 'Pole Dancing', 'Square Dancing', 'Line Dancing', 'Country'
  ],

  art_supplies: [
    'Paint', 'Brush', 'Canvas', 'Easel', 'Pencil', 'Charcoal',
    'Pastel', 'Marker', 'Crayon', 'Palette', 'Sketchbook', 'Paper',
    'Eraser', 'Blending Stump', 'Fixative', 'Varnish', 'Glue', 'Scissors',
    'Ruler', 'Compass', 'Protractor', 'Stencil', 'Template', 'Frame'
  ],

  camping_gear: [
    'Tent', 'Sleeping Bag', 'Backpack', 'Flashlight', 'Lantern', 'Compass',
    'Map', 'First Aid Kit', 'Water Bottle', 'Canteen', 'Cooler', 'Stove',
    'Matches', 'Lighter', 'Rope', 'Knife', 'Multi-tool', 'Binoculars',
    'Camera', 'Sunscreen', 'Bug Spray', 'Hat', 'Boots', 'Rain Gear'
  ],

  video_game_genres: [
    'Action', 'Adventure', 'RPG', 'Strategy', 'Simulation', 'Sports',
    'Racing', 'Fighting', 'Puzzle', 'Platform', 'Shooter', 'Horror',
    'Survival', 'Sandbox', 'MMORPG', 'Battle Royale', 'Tower Defense', 'Real-time Strategy',
    'Turn-based', 'Stealth', 'Rhythm', 'Educational', 'Casual', 'Indie'
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
