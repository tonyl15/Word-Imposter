# Word Imposter

A React-based social deduction party game where players try to identify the imposter among them using word clues.

## How to Play

1. **Setup**: Choose 3-10 players for the game
2. **Word Reveal**: Each player privately views their assigned word on the shared device
   - **Regular players** see the same secret word
   - **The imposter** gets notified they're the imposter but doesn't see the word
3. **Discussion**: Players discuss and give clues about their word to identify who doesn't belong
4. **Deduction**: Through conversation, players try to figure out who the imposter is
5. **New Round**: Start another round with a different word and new imposter

## Game Rules

- **Regular Players**: All get the same word and must work together to identify the imposter through discussion
- **Imposter**: Doesn't know the word but must blend in by listening to clues and trying not to be discovered
- **Strategy**: Regular players give clues that are specific enough to exclude the imposter but vague enough to not give away the word immediately
- **No Voting System**: The game focuses on discussion and social deduction rather than formal voting

## Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/tonyl15/Word-Imposter.git
   cd Word-Imposter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to `http://localhost:3000` and start playing!

### Building for Production

To create a production build:
```bash
npm run build
```

The build folder will contain the optimized production files ready for deployment.

## Features

- **Flexible Player Count**: Supports 3-10 players per game
- **Extensive Word Library**: Over 1,100 words across 47 diverse categories including:
  - Animals, Food, Objects, Places, Activities
  - Professions, Sports, Vehicles, Clothing, Furniture
  - Kitchen Items, School Subjects, Weather, Emotions
  - Music Instruments, Board Games, Technology, Body Parts
  - Movies, Fruits, Vegetables, Drinks, Colors, Countries
  - Space & Planets, Sea Creatures, Insects, Birds, Flowers
  - And many more specialized categories
- **Customizable Settings**: 
  - Option to show/hide word categories to players
  - Helpful for balancing game difficulty
- **Pass-and-Play Design**: Single device gameplay perfect for parties and social gatherings
- **Clean Interface**: Simple, intuitive design that works on all screen sizes
- **Instant Setup**: No accounts or complex setup required
- **Continuous Play**: Easy transition between rounds with different words and imposters

## Game Flow

1. **Setup Phase**: Select number of players (3-10)
2. **Settings** (Optional): Choose whether to display word categories
3. **Word Distribution**: Device is passed to each player in turn to see their word privately
4. **Discussion Phase**: Players discuss and give clues (no timer - play at your own pace)
5. **New Round**: Start fresh with a new random word and different imposter

## Technologies Used

- **React 18**: Modern React with hooks for state management
- **Create React App**: Zero-configuration setup and build tooling
- **CSS3**: Custom styling with animations and responsive design
- **JavaScript ES6+**: Modern JavaScript features and syntax

## Deployment

This game is optimized for deployment on platforms like:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

The game works entirely in the browser with no backend requirements.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or additional word categories!
