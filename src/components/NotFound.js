import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import { Link } from "react-router-dom";
import { Segment, Header, Button } from "semantic-ui-react";
import { LOGIN, HOME } from "../constants/Routes";

function NotFound(props) {
  const { currentUser } = useContext(AuthContext);

  return (
    <Segment
      inverted
      textAlign="center"
      color="red"
      tertiary
      style={{ width: "80%", margin: "auto" }}
    >
      <Header>
        Sorry, this page doesn't exist.{" "}
        <span role="img" aria-label="meh emoji">
          😞
        </span>
        <br />
        <br /> Click the button below to go back. <br />
      </Header>

      <Segment.Inline>
        {currentUser ? (
          <Button color="blue">
            <Link style={{ color: "white" }} to={HOME}>
              Home
            </Link>
          </Button>
        ) : (
          <Button positive>
            <Link style={{ color: "white" }} to={LOGIN}>
              Login
            </Link>
          </Button>
        )}
      </Segment.Inline>
    </Segment>
  );
}

export default NotFound;
