import React from "react";

const IntroField = () => {
  return (
    <section className="start-field">
      <h1>The Office Trivia</h1>
      <h3 class="introText">
        Play Our Free Trivia Game Based On NBC's, The Office
      </h3>

      <div id="introText">
        <p>
          Select your level of difficulty and proceed through the provided
          questions that are designed to be answered correctly, only by a true
          Office fan! 
          <br />
          You'll gain 5 points for every correctly answered question
          and should you get one incorrect, no harm to your total score! Venture
          through and see what your fan total is by the end of the game.
          <br />
          If you think you should've performed better, watch another few rounds of the
          series and come back when you've put in the time!
        </p>
      </div>
    </section>
  );
};

export default IntroField;
