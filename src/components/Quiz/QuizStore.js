import React, { createContext, useReducer } from "react";

const questions = [
  {
    question: "In what year was the GBP created?",
    a: "1864",
    b: "1789",
    c: "1901"
  },
  {
    question: "Which country uses the dong as its native currency?",
    a: "Taiwan",
    b: "Korea",
    c: "Vietnam"
  }
];

const initialState = {
  questions,
  currentQuestion: 0,
  currentAnswer: "",
  answers: [],
  showResults: false,
  error: "",
  startQuiz: false,
  timerFinished: false,
  correctAnswers: 0,
  modal: false,
  primaryColor: "#4444FF"
};

const store = React.createContext(null);
const { Provider } = store;

const QuizStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "START_QUIZ":
        return {
          ...state,
          startQuiz: true
        };

      default:
        return state;
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, QuizStateProvider };
