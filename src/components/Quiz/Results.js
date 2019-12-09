import React, { useContext } from "react";
import { Icon, Modal, Header, Button } from "semantic-ui-react";
import QuizContext from "./Context/QuizContext";
import { SET_SHOW_MODAL } from "./Context/types";
import styled from "styled-components";

const ResultSegment = styled.div`
  width: 80%;
  margin: auto;
  border: 2px solid #e2e2e2;
  border-radius: 10px;
  box-shadow: 5px 6px 4px #888888;
  text-align: center;
  margin-bottom: 25px;

  &:hover {
    box-shadow: 5px 12px 4px #888888;
  }
`;

const Results = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { answers, questions, correctAnswers, showModal } = state;

  const closeModal = () => {
    dispatch({ type: SET_SHOW_MODAL, showModal: false });
  };

  const showResultsData = () => {
    console.log(answers);
    console.log(questions);

    return answers.map(answer => {
      const question = questions.find(
        question => question.number === answer.questionId
      );
      console.log(question);

      return (
        <>
          <ResultSegment size="huge" key={question.number}>
            <h3>
              {question.question} {showResultMark(question, answer)}
            </h3>
          </ResultSegment>
        </>
      );
    });
  };

  const showResultMark = (question, answer) => {
    if (question.correct === answer.answer) {
      let answerKey = answer.answer;
      return (
        <div key={question.number}>
          <strong>
            You answered: {question[answerKey]} <br />
            <br />
          </strong>
          <span className="correct">
            <Icon name="thumbs up" size="small" color="green" /> Correct
          </span>
        </div>
      );
    }
    return (
      <div key={question.number}>
        <strong>
          Sorry, you got this question wrong. <br />
          <br />
        </strong>
        <span className="incorrect">
          <Icon name="thumbs down" size="small" color="red" /> Incorrect
        </span>
      </div>
    );
  };

  return (
    <>
      <Modal open={showModal} onClose={closeModal}>
        <Header icon="question circle" content="Final Score..." />
        <Modal.Content style={{ textAlign: "center" }}>
          <div>
            <h3>
              You scored {correctAnswers} out of {questions.length}
            </h3>

            {correctAnswers > 5 ? (
              <>
                <h2>Well Done! You Did Great :)</h2>
                <Icon name="smile outline" size="huge" />
              </>
            ) : (
              <>
                <h2>Nice Try, Keep On Learning :) </h2>
                <Icon name="thumbs up" size="huge" />
              </>
            )}
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={closeModal}>
            <Icon name="thumbs up" /> OK
          </Button>
        </Modal.Actions>
      </Modal>

      {showResultsData()}
    </>
  );
};

export default Results;
