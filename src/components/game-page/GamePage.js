import React from 'react';

import gamePageBackgroundImage from '../../data/images/questionsPageBackground.jpg'

import GameQuestions from '../game-questions/GameQuestions'

const GamePage = () => {
    return (
        <div style={{backgroundImage: `url(${gamePageBackgroundImage})`, position: 'fixed', minWidth: '100%', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', top: 0, left: 0}}>
            <GameQuestions />
        </div>
    );
};

export default GamePage;