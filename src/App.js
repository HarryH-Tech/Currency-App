import React, { useState } from "react";
import "./App.css";
import { Header, Icon, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";

//Custom Components
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import PrivateRoute from "./PrivateRoute";

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

      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
