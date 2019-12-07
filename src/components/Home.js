import React, { useContext, useEffect, useState } from "react";
import firebase from "../firebase";
import { AuthContext } from "../Auth";
import {
  Segment,
  List,
  Header,
  Button,
  Icon,
  Grid,
  Divider,
  Container
} from "semantic-ui-react";
import axios from "axios";
import Quiz from "./Quiz/Quiz";

function Home() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const signOut = () => {
    console.log("so");
    firebase.auth().signOut();
  };

  const [data, setData] = useState({});
  useEffect(() => {
    //Make API request
    const fetchData = async () => {
      const result = await axios(
        "https://api.exchangeratesapi.io/latest?base=GBP"
      );

      setData(result.data.rates);
    };
    fetchData();
  }, []);

  const option = {
    precision: 3
  };

  return (
    <>
      <Button onClick={signOut}>Log Out</Button>
      <Grid textAlign="left">
        <Grid.Column style={{ width: "30%" }}>
          <Segment>
            <List inverted animated celled relaxed>
              {Object.entries(data).map(([key, value]) => (
                <List.Item key={key}>
                  {key} - {value}
                </List.Item>
              ))}
            </List>
          </Segment>
        </Grid.Column>

        <Grid.Column style={{ width: "70%" }}>
          <Segment inverted color="blue">
            <Header as="h1">Information</Header>
          </Segment>
          <Divider inverted color="blue"></Divider>
          <Container fluid>
            <p>The word currency comes from </p>
          </Container>
        </Grid.Column>
      </Grid>

      <Quiz />
    </>
  );
}

export default Home;
