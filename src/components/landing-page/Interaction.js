import React, { useState } from 'react';
import './Interaction.css'

import Button from '../actions/Button'

const Interaction = () => {
    const [showPlayBtn, setShowPlayBtn] = useState(true)
    const [showDifficultyButtons, setShowDifficultyButtons] = useState(false)

    const beginGame = () => {
        setShowPlayBtn(false)
        setShowDifficultyButtons(true)        
    }

    return (
        <section>
            {showPlayBtn && <Button type='submit' value='Play' className='play-btn home-btns' onClick={beginGame}/>}

            {showDifficultyButtons && (
                <section className='difficulty-btns'>
                    <Button type='submit' value='Beginner' className='home-btns set-level-btns' />
                    <Button type='submit' value='Medium' className='home-btns set-level-btns' />
                    <Button type='submit' value='Difficult' className='home-btns set-level-btns' />
                </section>
            )}
        </section >
    );
};

export default Interaction;