import {
  SET_CURRENT_ANSWER,
  SET_CURRENT_QUESTION,
  SET_ANSWERS,
  SET_START_QUIZ,
  SET_CORRECT_ANSWERS,
  SET_FINISH_QUIZ,
  SET_SHOW_MODAL,
  SET_ERRORS
} from "./types";

const QuizReducer = (state, action) => {
  switch (action.type) {
    case SET_START_QUIZ:
      return {
        ...state,
        startQuiz: action.startQuiz
      };
    case SET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: action.currentAnswer
      };

    case SET_ANSWERS:
      return {
        ...state,
        answers: action.answers
      };

    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.currentQuestion
      };

    case SET_CORRECT_ANSWERS:
      return {
        ...state,
        correctAnswers: action.correctAnswers
      };

    case SET_FINISH_QUIZ:
      return {
        ...state,
        showResults: action.showResults
      };

    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.showModal
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: action.errors
      };

    default:
      return state;
  }
};

export default QuizReducer;
