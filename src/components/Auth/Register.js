import React, { useState } from "react";
import {
  Grid,
  Segment,
  Header,
  Icon,
  Button,
  Form,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../constants/Routes";

const Register = ({ firebase }) => {
  const [registerDetails, setRegisterDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [appDetails, setAppDetails] = useState({
    loading: false,
    errors: []
  });

  const handleRegister = e => {
    e.preventDefault();
    console.log("r");
    firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        setRegisterDetails({ ...registerDetails });
      })
      .catch(err => {
        setAppDetails({
          loading: false,
          errors: err.message
        });
      });
  };

  const { username, email, password, confirmPassword } = registerDetails;

  const isInvalid =
    password !== confirmPassword ||
    password === "" ||
    email === "" ||
    username === "";

  return (
    <Segment>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ width: "70%", height: 500 }}>
          <Form size="large" onSubmit={handleRegister}>
            <Segment>
              <Header as="h1" color="blue">
                Register
              </Header>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                type="text"
                onChange={e =>
                  setRegisterDetails({
                    ...registerDetails,
                    [e.target.name]: e.target.value
                  })
                }
                value={username}
              ></Form.Input>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email"
                type="email"
                onChange={e =>
                  setRegisterDetails({
                    ...registerDetails,
                    [e.target.name]: e.target.value
                  })
                }
                value={email}
              ></Form.Input>
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={e =>
                  setRegisterDetails({
                    ...registerDetails,
                    [e.target.name]: e.target.value
                  })
                }
                value={password}
              ></Form.Input>
              <Form.Input
                fluid
                name="confirmPassword"
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
                onChange={e =>
                  setRegisterDetails({
                    ...registerDetails,
                    [e.target.name]: e.target.value
                  })
                }
                value={confirmPassword}
              ></Form.Input>

              {appDetails.errors && <p>{appDetails.errors}</p>}
              <Button color="green">
                <Icon name="user" size="big" />
                Register
              </Button>
              <p style={{ marginTop: "12px" }}>
                Already a member? Click
                <Link to={LOGIN}> here </Link>
                to login.
              </p>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Register;
