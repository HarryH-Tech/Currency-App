import React from "react";
import "./App.css";
import { Header, Icon, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { FirebaseContext } from "./components/Firebase";

function App() {
  return (
    <>
      <Segment className="App" inverted color="blue">
        <Header as="h1" icon color="blue" block>
          Currency History
          <Header.Subheader>
            A History of some of the worlds major currencies.
          </Header.Subheader>
        </Header>
        <br />
        <Icon name="dollar sign" size="big" />
        <Icon name="euro sign" size="big" />
        <Icon name="pound sign" size="big" />
        <Icon name="rupee sign" size="big" />
        <Icon name="yen sign" size="big" />
      </Segment>

      <Router>
        <Switch>
          <Route path="/register">
            <FirebaseContext.Consumer>
              {firebase => <Register firebase={firebase} />}
            </FirebaseContext.Consumer>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
