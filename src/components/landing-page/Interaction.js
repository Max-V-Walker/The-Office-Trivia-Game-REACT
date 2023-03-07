import React, { useState } from 'react';

import Button from '../actions/Button'

const Interaction = () => {
    const [showPlayBtn, setShowPlayBtn] = useState(true)
    const [showDifficultyButtons, setShowDifficultyButtons] = useState(false)

    const beginGame = () => {
        setShowPlayBtn(false)
        setShowDifficultyButtons(true)        
    }

    return (
        <section className='home-btns play-btn'>
            {showPlayBtn && <Button type='submit' value='Play' className='play-btn' onClick={beginGame}/>}

            {showDifficultyButtons && (
                <section className='difficulty-btns'>
                    <Button type='submit' value='Beginner'/>
                    <Button type='submit' value='Medium'/>
                    <Button type='submit' value='Difficult'/>
                </section>
            )}
        </section >
    );
};

export default Interaction;