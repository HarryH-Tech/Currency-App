import React, { useReducer } from "react";
import { Header, Segment, Icon, Button } from "semantic-ui-react";

import Question from "./Question";
import Answers from "./Answers";
import Progress from "./Progress";
import Results from "./Results";
import QuizNavigation from "./QuizNavigation";
import Errors from "./Errors";

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
    },
    {
      number: "3",
      question: "From which of the following regions does the Dinar come from?",
      a: "Middle East",
      b: "North America",
      c: "Western Europe",
      correct: "a"
    },
    {
      number: "4",
      question: "In which country was paper money introduced around 1200BC?",
      a: "China",
      b: "Korea",
      c: "Sweden",
      correct: "a"
    },
    {
      number: "5",
      question: "In which country was paper money introduced around 1200BC?",
      a: "China",
      b: "Korea",
      c: "Sweden",
      correct: "a"
    },
    {
      number: "6",
      question:
        "What was the name of the device invented in the early 1800's to combat the counterfeiting problem?",
      a: "Dandy Stool",
      b: "Dandy Roll",
      c: "Dandy Device",
      correct: "b"
    },
    {
      number: "7",
      question: "In which year was the U.S. mint created?",
      a: "1792",
      b: "1886",
      c: "1779",
      correct: "a"
    },
    {
      number: "8",
      question:
        "In what year and country did the watermark technique first appear to prevent counterfeiting?",
      a: "1282 in England",
      b: "1282 in Italy",
      c: "1283 in Russia",
      correct: "b"
    }
  ];

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: "",
    startQuiz: false,
    answers: [],
    correctAnswers: 0,
    showResults: false,
    showModal: false,
    errors: ""
  };

  const [state, dispatch] = useReducer(QuizReducer, initialState);

  const { startQuiz, showResults } = state;

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
            <Errors />

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
        <hr />
        <br />
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
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Button onClick={restartQuiz} color="green">
            Restart Quiz
          </Button>
        </div>

        <Results />
      </QuizContext.Provider>
    );
  }
};

export default Quiz;
