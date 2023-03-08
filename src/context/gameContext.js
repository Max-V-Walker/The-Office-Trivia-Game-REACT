import React from 'react';

const difficultyContext = React.createContext({
    difficulty: "",
    setDifficulty: () => {},
    setIsGameOn: () => {},
})

export default difficultyContext;