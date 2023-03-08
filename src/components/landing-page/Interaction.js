import React, { useState, useContext } from 'react';
import './Interaction.css'
import DifficultyContext from '../../context/gameContext';

import Button from '../actions/Button'

const Interaction = () => {
    const [showPlayBtn, setShowPlayBtn] = useState(true)
    const [showDifficultyButtons, setShowDifficultyButtons] = useState(false)
    const ctx = useContext(DifficultyContext)

    const beginGameHandler = () => {
        setShowPlayBtn(false)
        setShowDifficultyButtons(true)        
    }

    const difficultySubmitHandler = (e) => {
        e.preventDefault()
        ctx.setDifficulty(e.target.value)
        ctx.setIsGameOn(true)
    }

    return (
        <section>
            {showPlayBtn && <Button type='submit' value='Play' className='play-btn home-btns' onClick={beginGameHandler}/>}

            {showDifficultyButtons && (
                <form className='difficulty-btns'>
                    <Button type='submit' value='Beginner' className='home-btns set-level-btns' onClick={difficultySubmitHandler} />
                    <Button type='submit' value='Intermediate' className='home-btns set-level-btns' onClick={difficultySubmitHandler} />
                    <Button type='submit' value='Difficult' className='home-btns set-level-btns' onClick={difficultySubmitHandler} />
                </form>
            )}
        </section >
    );
};

export default Interaction;