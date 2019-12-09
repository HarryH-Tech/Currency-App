import React, { useContext } from "react";
import { Segment, Header as H, Icon, Button } from "semantic-ui-react";
import { AuthContext } from "./Auth";
import firebase from "./firebase";

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <Segment className="App" inverted color="blue">
      <H as="h1" icon color="blue" block>
        Currency History
        <H.Subheader>
          A History of some of the worlds major currencies.
        </H.Subheader>
        {!!currentUser && (
          <Button color="red" onClick={signOut}>
            <Button.Content visible>Log Out</Button.Content>
          </Button>
        )}
      </H>

      <br />
      <Icon name="dollar sign" size="big" />
      <Icon name="euro sign" size="big" />
      <Icon name="pound sign" size="big" />
      <Icon name="rupee sign" size="big" />
      <Icon name="yen sign" size="big" />
    </Segment>
  );
};

export default Header;
