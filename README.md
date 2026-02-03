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
- MongoDB Atlas account (for user accounts)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/tonyl15/Word-Imposter.git
   cd Word-Imposter
   ```

2. Install dependencies:
   ```bash
   npm install
   cd backend && npm install && cd ..
   ```

3. Configure environment variables:
   - Create `backend/.env`:
     ```
     MONGODB_URI=your_mongodb_atlas_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Update `frontend/.env.local`:
     ```
     REACT_APP_API_URL=http://localhost:5000
     WORDNIK_API_KEY=your_wordnik_api_key (optional)
     ```

4. Start both frontend and backend:
   ```bash
   npm run dev
   ```
   This starts the React frontend (port 3000) and Node.js backend (port 5000)

5. Open `http://localhost:3000` to play!

### Guest Play
- No account required to play
- Create an account anytime via the Sign Up button in the header
- Logged-in users can create custom dictionaries and view their profile (coming soon)

## Features

- **Guest & Account System**: Play as guest or create an account for custom dictionaries
- **Modern UI Design**: Beautiful gradient backgrounds with clean, responsive interface
- **Flexible Player Count**: Supports 3-10 players per game
- **Optional Imposter Hints**: Intelligent hints for imposters using Wordnik API
- **Extensive Word Library**: 1,100+ words across 47 categories
- **Customizable Settings**: Show/hide categories and toggle hints
- **Mobile Friendly**: Responsive design for all screen sizes
- **Pass-and-Play Design**: Perfect for parties and social gatherings

## Technologies Used

**Frontend:**
- React 18 with React Router for navigation
- Axios for API communication
- Context API for authentication state management

**Backend:**
- Node.js & Express for REST API
- MongoDB & Mongoose for database
- JWT for authentication
- Bcrypt for password hashing

**Deployment:**
- Frontend: Vercel
- Backend: Railway/Render/Heroku (your choice)
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
