import React, { useContext } from "react";
import QuizContext from "./Context/QuizContext";
import { Progress as P } from "semantic-ui-react";

const Progress = () => {
  const { state } = useContext(QuizContext);
  const { questions, currentQuestion } = state;
  let percentUploaded = ((currentQuestion / questions.length) * 100).toFixed();

  return (
    <>
      <h3>
        Question {currentQuestion + 1} of {questions.length}
      </h3>
      <P percent={percentUploaded} progress success />
    </>
  );
};

export default Progress;
