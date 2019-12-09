import React, { useContext } from "react";
import QuizContext from "./Context/QuizContext";
import { SET_CURRENT_ANSWER } from "./Context/types";
import { Button } from "semantic-ui-react";

const Answers = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { currentQuestion, questions, currentAnswer } = state;
  const answer = questions[currentQuestion];

  const handleAnswerSelection = e => {
    console.log(e.target.value);
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: e.target.value });
    //dispatch({ type: SET_ERROR, error: "" });
  };

  return (
    <>
      <Button
        selected={currentAnswer === "a"}
        answer={answer.a}
        onClick={handleAnswerSelection}
        value={"a"}
        color="green"
        size="huge"
        style={{ marginBottom: "8px" }}
      >
        {answer.a}
      </Button>

      <Button
        selected={currentAnswer === "b"}
        answer={answer.b}
        onClick={handleAnswerSelection}
        value={"b"}
        color="green"
        size="huge"
        style={{ marginBottom: "8px" }}
      >
        {answer.b}
      </Button>
      <Button
        selected={currentAnswer === "c"}
        answer={answer.c}
        onClick={handleAnswerSelection}
        value={"c"}
        color="green"
        size="huge"
        style={{ marginBottom: "8px" }}
      >
        {answer.c}
      </Button>
      <br />
      <br />
    </>
  );
};

export default Answers;
