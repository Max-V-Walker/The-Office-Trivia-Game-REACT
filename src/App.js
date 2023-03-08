import React, { useState } from "react";
import "./App.css";

import DifficultyContext from "./context/gameContext";
import LandingPage from "./components/landing-page/LandingPage";
import GamePage from "./components/game-page/GamePage";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [difficulty, setDifficulty] = useState("");

  return (
    <DifficultyContext.Provider
      value={{
        difficulty: difficulty,
        setDifficulty: setDifficulty,
        setIsGameOn: setIsGameOn,
      }}
    >
      <div id="app">
        {!isGameOn && <LandingPage />}

        {isGameOn && <GamePage />}
      </div>
    </DifficultyContext.Provider>
  );
}

export default App;
