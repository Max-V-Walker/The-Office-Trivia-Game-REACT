import React, { useState } from 'react';

const Score = ({questionObj}) => {
    const [score, setScore] = useState(0)

    

    // if(selectedAnswer === correctAnswer){
    //     setScore(prevState => prevState += 5)
    // }

    return (
        <div>
            Score: {score}
        </div>
    );
};

export default Score;