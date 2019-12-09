import React, { useReducer, useContext } from "react";
import { Header, Segment, Icon, Button } from "semantic-ui-react";

import Question from "./Question";
import Answers from "./Answers";
import Progress from "./Progress";
import Results from "./Results";
import QuizNavigation from "./QuizNavigation";

import { AuthContext } from "../../Auth";

import QuizContext from "./Context/QuizContext";
import {
  SET_START_QUIZ,
  SET_CURRENT_QUESTION,
  SET_FINISH_QUIZ,
  SET_CURRENT_ANSWER,
  SET_ANSWERS
} from "./Context/types";
import QuizReducer from "./Context/QuizReducer";

const Quiz = () => {
  const { currentUser } = useContext(AuthContext);
  const questions = [
    {
      number: "1",
      question: "What year was the pound sterling created?",
      a: "1901",
      b: "1081",
      c: "775",
      correct: "c"
    },
    {
      number: "2",
      question: "Which country has the oldest central bank in the world?",
      a: "England",
      b: "Sweden",
      c: "Italy",
      correct: "b"
    }
  ];

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: "",
    startQuiz: false,
    currentAnswer: "",
    answers: [],
    correctAnswers: 0,
    showResults: false,
    showModal: false
  };

  const [state, dispatch] = useReducer(QuizReducer, initialState);

  const { startQuiz, answers, showResults } = state;

  const beginQuiz = () => {
    dispatch({ type: SET_START_QUIZ, startQuiz: true });
  };

  const restartQuiz = () => {
    dispatch({ type: SET_START_QUIZ, startQuiz: true });
    dispatch({ type: SET_CURRENT_QUESTION, currentQuestion: 0 });
    dispatch({ type: SET_FINISH_QUIZ, showResults: false });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });
    dispatch({ type: SET_ANSWERS, answers: [] });
  };

  if (startQuiz) {
    return (
      <>
        <QuizContext.Provider value={{ state, dispatch }}>
          <Segment
            style={{ width: "90%", margin: "auto", marginTop: "10px" }}
            inverted
            color="blue"
            tertiary
            textAlign="center"
          >
            <Question />
            <Answers />
            <QuizNavigation />
            <Progress />
          </Segment>
          <br />
          <br />
        </QuizContext.Provider>
      </>
    );
  } else if (!startQuiz && !showResults) {
    return (
      <>
        <Segment
          inverted
          color="teal"
          style={{
            width: "95%",
            margin: "20px auto 20px auto",
            textAlign: "center"
          }}
        >
          <Header as="h1" textAlign="center" icon>
            <Icon name="question circle" size="small" />
            Currency Quiz
          </Header>
          <Button color="blue" onClick={beginQuiz}>
            Start Quiz
          </Button>
        </Segment>
      </>
    );
  } else if (showResults) {
    console.log(showResults);
    return (
      <QuizContext.Provider value={{ state, dispatch }}>
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={restartQuiz}
            color="green"
            style={{ textAlign: "center" }}
          >
            Restart Quiz
          </Button>
        </div>

        <Results />
      </QuizContext.Provider>
    );
  }
};

export default Quiz;
