import React, { useContext, useState } from "react";
import { store } from "./QuizStore";

const Question = () => {
  const quizState = useContext(store);
  const { questions } = quizState.state;

  return (
    <>
      <h1>Question</h1>
      {questions.map(question => (
        <p key={question.question}>{question.question}</p>
      ))}
    </>
  );
};

export default Question;
