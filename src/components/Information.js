import React from "react";
import {
  Grid,
  Segment,
  Header,
  Divider,
  Container,
  Image
} from "semantic-ui-react";
import OldestCoin from "../images/OldestCoin.jpg";
import Dinar from "../images/Dinar.jpg";

import styled from "styled-components";

const ImageContainer = styled.div`
  padding: 6px;
  border: 2px solid #ddd;
  width: 80%;
  border-radius: 10px;
  margin: auto;
  text-align: center;

  small {
    font-weight: bold;
  }
`;

const Information = () => {
  return (
    <Grid.Column style={{ width: "100%" }}>
      <Segment inverted color="blue">
        <Header as="h1" textAlign="center">
          Historical Information
        </Header>
      </Segment>
      <Divider inverted color="blue"></Divider>
      <Container fluid textAlign="justified" style={{ padding: "12px" }}>
        <p>
          The word currency comes from middle English <em>'curraunt'</em>
          The first currencies were a form of receipt representing grain stored
          in temple granaries in Sumer around 2000BC. These receipts often came
          in the form of metals and were the basis of trade in the eastern
          mediterranean for over 1500 years.
        </p>
        <ImageContainer>
          <Image
            src={OldestCoin}
            size="small"
            circular
            centered
            alt="The worlds oldest coin"
          />
          <small>
            The worlds oldest coin. Known as the Lydian Lion, the coin was
            created in the ancient Kingdom of Lydia, in modern-day western
            Turkey. It is thought to have been created around 600 bc.
          </small>
        </ImageContainer>
        <p>
          These metals allowed ghhoods to be traded across empires and vast
          expanses of land without the need for the actual commodities to be
          carried around. Carrying metals around though does have the
          significant problem of requiring the transport of large amounts of
          metal when exchanging large sums.
        </p>
        <hr />
        <p>
          Around 1200BC in China, paper money was invented. It took about 400
          years for it to become completely adopted around the empire. These
          first paper notes acted as a means for merchats to exchange for
          coinage wwhich could in turn be exchanged for commodoties. Eventually
          it became simpler just to use the paper to exchange for the commodity.
        </p>
        <hr />
        <p>
          During the 7th - 12th centuries in the middle east a monetary economy
          was rapidly growing based on the circlation of a stable high-value
          currency, the Dinar
        </p>
        <ImageContainer>
          <Image
            src={Dinar}
            size="medium"
            circular
            centered
            alt="The worlds oldest coin"
          />
          <small>
            A medieval Dinar from North Africa or Spain, created around 1191AD.
          </small>
        </ImageContainer>
        <p>
          Innovative monetary ideas such as the use of credit, cheques and banks
          for loans and deposits were introduced around this period.
        </p>
        <hr />
        <p>
          Paper money was first introduced in Europe in 1661 by Sweden due to
          its abundant supplies of copper. Sweden also created the worlds first
          central bank in 1668.
        </p>
      </Container>
    </Grid.Column>
  );
};

export default Information;
