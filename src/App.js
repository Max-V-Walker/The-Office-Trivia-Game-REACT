import React from 'react'
import './App.css';

import allQuestions from './data/triviaQuestions'
import LandingPage from './components/landing-page/LandPage'

function App() {


  return (
    <React.Fragment>
      <LandingPage />
    </React.Fragment>
  );
}

export default App;
