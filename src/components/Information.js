import React from "react";
import { Grid, Segment, Header, Divider, Container } from "semantic-ui-react";

const Information = () => {
  return (
    <Grid.Column style={{ width: "70%" }}>
      <Segment inverted color="blue">
        <Header as="h1" textAlign="center">
          Information
        </Header>
      </Segment>
      <Divider inverted color="blue"></Divider>
      <Container fluid>
        <p>The word currency comes from </p>
      </Container>
    </Grid.Column>
  );
};

export default Information;
