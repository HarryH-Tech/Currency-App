import React, { useCallback, useContext, useState } from "react";
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
import { REGISTER, HOME } from "../../constants/Routes";
import { ErrorMessage } from "../../constants/CustomStyledComponents";
import { Redirect } from "react-router";
import { AuthContext } from "../../Auth";
import firebase from "../../firebase";

const Login = ({ history }) => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });

  const [appDetails, setAppDetails] = useState({
    loading: false,
    errors: ""
  });
  const { email, password } = loginDetails;
  const { loading, errors } = appDetails;

  const handleLogin = useCallback(
    async e => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        setAppDetails({
          loading: false,
          errors: err.message
        });
      }
    },

    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Segment>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ width: "70%", height: 500 }}>
          <Form size="large" onSubmit={handleLogin}>
            <Segment>
              <Header as="h1" color="blue">
                Login
              </Header>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Email"
                type="email"
                onChange={e =>
                  setLoginDetails({
                    ...loginDetails,
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
                  setLoginDetails({
                    ...loginDetails,
                    [e.target.name]: e.target.value
                  })
                }
                value={password}
              ></Form.Input>
              {errors && <ErrorMessage>{errors}</ErrorMessage>}
              <Button color="green">
                <Icon name="sign in alternate" size="big" />
                Login
              </Button>
              <p style={{ marginTop: "12px" }}>
                Not a member yet? Click
                <Link to={REGISTER}> here </Link>
                to sign up.
              </p>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Login;
