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
import { REGISTER } from "../../constants/Routes";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: ""
  });

  const handleLogin = () => {};

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
                    [e.target.name]: [e.target.value]
                  })
                }
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
                    [e.target.name]: [e.target.value]
                  })
                }
              ></Form.Input>
              <Button color="green">
                <Icon name="sign in alternate" size="big" color="white" />
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
