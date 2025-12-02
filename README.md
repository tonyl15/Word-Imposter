# Word Imposter

A React-based social deduction party game where players try to identify the imposter among them using word clues. Features a beautiful gradient interface with over 1,100 words across 47 categories.

## 🎮 How to Play

1. **Setup**: Choose 3-10 players for the game
2. **Settings** (Optional): Configure game options like category display and imposter hints
3. **Word Reveal**: Each player privately views their assigned word on the shared device
   - **Regular players** see the same secret word
   - **The imposter** gets notified they're the imposter but doesn't see the word
4. **Discussion**: Players discuss and give clues about their word to identify who doesn't belong
5. **Deduction**: Through conversation, players try to figure out who the imposter is
6. **New Round**: Start another round with a different word and new imposter

## 🎯 Game Rules

- **Regular Players**: All get the same word and must work together to identify the imposter through discussion
- **Imposter**: Doesn't know the word but must blend in by listening to clues and trying not to be discovered
- **Strategy**: Regular players give clues that are specific enough to exclude the imposter but vague enough to not give away the word immediately

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

3. Set up Wordnik API for hints (optional):
   - Get a free API key from [Wordnik Developer](https://developer.wordnik.com/)
   - Copy `.env.example` to `.env.local`
   - Add your API key to `.env.local`:
     ```
     WORDNIK_API_KEY=your_actual_api_key_here
     ```
   - **Note**: If you skip this step, the game will still work, but imposters won't get hints

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser to `http://localhost:3000` and start playing!

### Building for Production

To create a production build:
```bash
npm run build
```

The build folder will contain the optimized production files ready for deployment.

## Features

- **Modern UI Design**: Beautiful gradient backgrounds with a clean, centered interface
- **Flexible Player Count**: Supports 3-10 players per game
- **Optional Imposter Hints**: Intelligent hints for imposters using Wordnik API to make gameplay more balanced
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
  - Toggle imposter hints on/off for difficulty adjustment
- **Pass-and-Play Design**: Single device gameplay perfect for parties and social gatherings
- **Responsive Interface**: Clean, intuitive design optimized for all screen sizes
- **Instant Setup**: No accounts or complex setup required
- **Continuous Play**: Easy transition between rounds with different words and imposters
- **Secure API Integration**: Backend serverless functions protect API keys from client exposure

## Game Flow

1. **Setup Phase**: Select number of players (3-10)
2. **Settings** (Optional): Configure word categories display and imposter hints
3. **Word Distribution**: Device is passed to each player in turn to see their word privately
4. **Discussion Phase**: Players discuss and give clues (no timer - play at your own pace)
5. **New Round**: Start fresh with a new random word and different imposter

## Technologies Used

- **React 18**: Modern React with hooks for state management and component architecture
- **Create React App**: Zero-configuration setup and build tooling
- **CSS3**: Custom gradient styling with smooth animations and responsive design
- **JavaScript ES6+**: Modern JavaScript features and syntax
- **Wordnik API**: External API integration for intelligent hint generation
- **Vercel Serverless Functions**: Secure backend API endpoints for external service integration

## Deployment
### Deploying with Hints Feature

To deploy with the imposter hints feature:

1. **Vercel**: 
   - Connect your repository to Vercel
   - Add `WORDNIK_API_KEY` in the Environment Variables section
   - Deploy

2. **Other Platforms**: 
   - Ensure your hosting platform supports serverless functions
   - Add the `WORDNIK_API_KEY` environment variable
   - Deploy the `/api` folder as serverless functions

**Note**: The game works without the hints feature on any static hosting platform.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or additional word categories!
