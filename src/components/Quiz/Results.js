import React, { useContext } from "react";
import { Icon, Segment, Modal, Header, Button } from "semantic-ui-react";
import QuizContext from "./Context/QuizContext";
import { SET_SHOW_MODAL } from "./Context/types";

const Results = () => {
  const { state, dispatch } = useContext(QuizContext);
  const {
    answers,
    questions,
    currentQuestion,
    currentAnswer,
    correctAnswers,
    showModal
  } = state;

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
          <Segment size="huge" key={question.number}>
            <div style={{ textAlign: "center" }}>
              {question.question} {showResultMark(question, answer)}
              <br />
              <br />
              <br />
            </div>
          </Segment>
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
            <br />
          </strong>
          <span className="correct">
            <Icon name="thumbs up" size="small" /> Correct
          </span>
        </div>
      );
    }
    return (
      <div key={question.number}>
        <strong>
          Sorry, you got this question wrong. <br />
          <br />
          <br />
        </strong>
        <span className="incorrect">
          <Icon name="thumbs down" size="small" /> Incorrect
        </span>
      </div>
    );
  };

  return (
    <>
      <Modal open={showModal} onClose={closeModal}>
        <Header icon="question circle" content="Final Score..." />
        <Modal.Content>
          <div style={{ textAlign: "center" }}>
            <h3 style={{ textAlign: "center" }}>
              You scored {correctAnswers} out of {questions.length}
            </h3>

            {correctAnswers > 8 ? (
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
