import React, { useContext } from "react";
import QuizContext from "./Context/QuizContext";
import { Message } from "semantic-ui-react";

const Question = () => {
  const { state } = useContext(QuizContext);
  const { currentQuestion, questions } = state;
  const question = questions[currentQuestion];

  return (
    <>
      <Message color="green" size="large">
        {question.number}. {question.question}
      </Message>
    </>
  );
};

export default Question;
