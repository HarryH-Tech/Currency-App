import React, { useState, useCallback } from "react";
import { Grid, Segment, Header, Icon, Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { LOGIN } from "../../constants/Routes";
import { ErrorMessage } from "../../constants/CustomStyledComponents";
import firebase from "../../firebase";
import { withRouter } from "react-router";

const Register = ({ history }) => {
  const [registerDetails, setRegisterDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [appDetails, setAppDetails] = useState({
    loading: false,
    errors: ""
  });

  const { username, email, password, confirmPassword } = registerDetails;

  const { loading, errors } = appDetails;

  //Validate Form Submission called in handleSubmit Function
  const validateForm = () => {
    console.log("validateForm");

    if (isFormEmpty(registerDetails)) {
      setAppDetails({ errors: "Please fill in all fields" });
      console.log("fill in all fields");
      return false;
    } else if (!isPasswordValid(registerDetails)) {
      console.log("password invalid");
      setAppDetails({
        errors:
          "Password is invalid. It must be at least 6 letters long and both passwords must match."
      });
      return false;
    } else {
      return true;
    }
  };

  //Check if all form fields are filled in, called in validateForm function
  const isFormEmpty = ({ username, email, password, confirmPassword }) => {
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !confirmPassword.length
    );
  };

  // Validate password, called in validateForm function
  const isPasswordValid = ({ password, confirmPassword }) => {
    if (password.length < 6 || confirmPassword.length < 6) {
      return false;
    } else if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };

  const handleRegister = useCallback(
    async e => {
      e.preventDefault();
      console.log("r");
      const { email, password } = e.target.elements;
      try {
        console.log(email);

        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (err) {
        console.log(err);
        setAppDetails({
          loading: false,
          errors: err.message
        });
      }
    },
    [history]
  );

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

              {errors && <ErrorMessage>{errors}</ErrorMessage>}
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

export default withRouter(Register);
