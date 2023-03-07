import React, { useState } from 'react'
import './App.css';

import allQuestions from './data/triviaQuestions'
import LandingPage from './components/landing-page/LandPage'

function App() {
  const [hasGameBegan, setHasGameBegan] = useState(false)

  return (
    <div id='app'>
      {!hasGameBegan && <LandingPage />}
      {/* {hasGameBegan && <GamePage />} */}
    </div>
  );
}

export default App;
