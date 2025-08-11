# Word Imposter

A React-based Mafia-style word guessing game where players must identify the imposter among them.

## How to Play

1. **Setup**: Add 3 or more players to the game
2. **Word Reveal**: Each player views their assigned word privately (except the imposter who gets notified they're the imposter)
3. **Discussion**: A 2-minute timer starts for players to discuss and try to identify the imposter
4. **Voting**: All players vote for who they think is the imposter
5. **Results**: The game reveals who the imposter was and declares the winner

## Game Rules

- **Citizens**: Get the same word and must identify the imposter
- **Imposter**: Doesn't know the word but must blend in and avoid detection
- **Winning**: Citizens win if they vote out the imposter; Imposter wins if they avoid being voted out

## Installation and Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Open your browser to `http://localhost:3000`

## Features

- Supports 3+ players
- Multiple word categories (animals, food, objects, places, activities)
- 2-minute discussion timer with skip option
- Voting system with real-time vote counting
- Game results showing winner and vote breakdown
- Responsive design for different screen sizes

## Technologies Used

- React 18
- CSS3 with animations
- Create React App
