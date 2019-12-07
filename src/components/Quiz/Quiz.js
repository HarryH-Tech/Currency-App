import React, { useReducer } from "react";
import { Header, Segment, Icon, Divider, Form } from "semantic-ui-react";

import Question from "./Question";
import Answers from "./Answers";
import Score from "./Score";
import Results from "./Results";

import { QuizStateProvider } from "./QuizStore";

const Quiz = () => {
  return (
    <>
      <Segment
        inverted
        color="teal"
        style={{ width: "90%", margin: "auto", marginTop: "20px" }}
      >
        <Header as="h1" textAlign="center" icon>
          <Icon name="question circle" size="small" />
          Currency Quiz
        </Header>
      </Segment>

      <QuizStateProvider>
        <Question />
        <Answers />
        <Score />
        <Results />
      </QuizStateProvider>
    </>
  );
};

export default Quiz;
