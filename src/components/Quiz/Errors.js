import React, { useContext } from "react";
import QuizContext from "./Context/QuizContext";
import { Message } from "semantic-ui-react";

function Errors() {
  const { state } = useContext(QuizContext);
  const { errors } = state;

  return <>{errors ? <Message color="red">{errors}</Message> : ""}</>;
}

export default Errors;
