import React, { useContext } from "react";
import QuizContext from "./Context/QuizContext";
import { Button } from "semantic-ui-react";
import {
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_CORRECT_ANSWERS,
  SET_ANSWERS,
  SET_FINISH_QUIZ,
  SET_START_QUIZ,
  SET_SHOW_MODAL
} from "./Context/types";

const QuizNavigation = () => {
  const { state, dispatch } = useContext(QuizContext);
  const {
    questions,
    currentQuestion,
    currentAnswer,
    answers,
    correctAnswers
  } = state;
  const question = questions[currentQuestion];

  const previousQuestion = () => {
    dispatch({
      type: SET_CURRENT_QUESTION,
      currentQuestion: currentQuestion - 1
    });
  };

  const submitAnswer = () => {
    const answer = { questionId: question.number, answer: currentAnswer };
    answers.push(answer);
    dispatch({
      type: SET_ANSWERS,
      answers: answers
    });
    dispatch({
      type: SET_CURRENT_ANSWER,
      currentAnswer: ""
    });
    if (currentQuestion + 1 < questions.length) {
      if (answer.answer === question.correct) {
        dispatch({
          type: SET_CORRECT_ANSWERS,
          correctAnswers: correctAnswers + 1
        });
      }
      dispatch({
        type: SET_CURRENT_QUESTION,
        currentQuestion: currentQuestion + 1
      });
    }
    if (currentQuestion + 1 === questions.length) {
      dispatch({ type: SET_FINISH_QUIZ, showResults: true });
      dispatch({ type: SET_SHOW_MODAL, showModal: true });
      dispatch({ type: SET_START_QUIZ, startQuiz: false });
    }
  };

  return (
    <>
      {currentQuestion + 1 !== 1 ? (
        <>
          <Button color="blue" onClick={previousQuestion}>
            Previous Question
          </Button>
        </>
      ) : (
        ""
      )}

      <Button onClick={submitAnswer} color="blue">
        {currentQuestion + 1 === questions.length
          ? "End Quiz"
          : "Next Question"}
      </Button>
    </>
  );
};

export default QuizNavigation;
