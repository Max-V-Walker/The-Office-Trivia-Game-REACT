import React, { useState, useContext } from "react";

import "./GameQuestions.css";

import allQuestions from "../../data/triviaQuestions";
import GameContext from "../../context/gameContext";
import Button from "../actions/Button";
import Modal from "../overlays/Modal";

const GameQuestions = () => {
  const ctx = useContext(GameContext);

  let filteredQuestions = allQuestions.filter(
    (question) => question.difficulty === ctx.difficulty
  );

  filteredQuestions = filteredQuestions.sort(() => 0.5 - Math.random());

  const [gameQuestions, setGameQuestions] = useState(filteredQuestions);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [correctAnswerGuessed, setCorrectAnswerGuessed] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const nextQuestionHandler = () => {
    setQuestionIndex((prevState) => (prevState += 1));
    setQuestionAnswered(false);
    checkForGameCompleteHandler();
  };

  const validateAnswerHandler = (e) => {
    e.preventDefault();
    const selectedAnswer = e.target.value;

    if (selectedAnswer === gameQuestions[questionIndex].answer) {
      e.target.style.backgroundColor = "lightgreen";
      setCorrectAnswerGuessed(true);
      setScore((prevState) => {
        return (prevState += 5);
      });
    } else {
      setCorrectAnswerGuessed(false);
      e.target.style.color = "#ffffbf";
      e.target.style.backgroundColor = "red";
    }

    setTimeout(() => {
      setQuestionAnswered(true);
      if (selectedAnswer === gameQuestions[questionIndex].answer) {
        e.target.style.backgroundColor = "#ffffbf";
      } else {
        e.target.style.color = "black";
        e.target.style.backgroundColor = "#ffffbf";
      }
    }, 650);
  };

  const checkForGameCompleteHandler = () => {
    // LEFT OFF HERE. NEED TO END GAME AT THE 10TH QUESTION AND GO FROM THERE.
    if (questionIndex >= 9) {
      setGameOver(true);
    }
  };

  return (
    <div>
      <h2 className="score-track">Score: {score}</h2>
      <section className="game-section">
        <h3 className="question-container">
          {gameQuestions[questionIndex].question}
        </h3>
        <div className="answer-btns">
          <Button
            className="option-btn"
            value={gameQuestions[questionIndex].options[0]}
            onClick={validateAnswerHandler}
          />
          <Button
            className="option-btn"
            value={gameQuestions[questionIndex].options[1]}
            onClick={validateAnswerHandler}
          />
          <Button
            className="option-btn"
            value={gameQuestions[questionIndex].options[2]}
            onClick={validateAnswerHandler}
          />
          <Button
            className="option-btn"
            value={gameQuestions[questionIndex].options[3]}
            onClick={validateAnswerHandler}
          />
        </div>
      </section>

      {questionAnswered && (
        <Modal>
          {correctAnswerGuessed && (
            <h4 className="answer-confirm-container">Correct!</h4>
          )}
          {!correctAnswerGuessed && (
            <h4 className="answer-confirm-container">Wrong!</h4>
          )}
          <img
            src={gameQuestions[questionIndex].image}
            alt="Office"
            className="game-images"
          />
          <br />
          <Button
            value="Next"
            onClick={nextQuestionHandler}
            className="next-question-btn"
          />
        </Modal>
      )}

      {gameOver && (
        <Modal>
          <h4>Game complete!</h4>
          <p>See how you performed below!</p>
        </Modal>
      )}
    </div>
  );
};

export default GameQuestions;
