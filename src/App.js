import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";

//Custom Components
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
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
