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
        <br />
        <p>
          These metals allowed goods to be traded across empires and vast
          expanses of land without the need for the actual commodities to be
          carried around. Carrying metals around though does have the
          significant problem of requiring the transport of large amounts of
          metal when exchanging large sums. Around 1200BC in China, paper money
          was invented. It took about 400 years for it to become completely
          adopted around the empire. These first paper notes acted as a means
          for merchants to exchange for coinage which could in turn be exchanged
          for commodities . Eventually it became simpler just to use the paper
          to exchange for the commodity.
        </p>
        <hr />
        <p>
          During the 7th - 12th centuries in the middle east a monetary economy
          was rapidly growing based on the circulation of a stable high-value
          currency, the Dinar. Innovative monetary ideas such as the use of
          credit, cheques and banks for loans and deposits were introduced
          around this period.
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

        <hr />
        <p>
          Paper money was first introduced in Europe in 1661 by Sweden due to
          its abundant supplies of copper. Sweden also created the worlds first
          central bank in 1668. With the growing amount of paper currency in
          circulation, the problem of counterfeiting also increased. One of the
          early successful techniques was the use of watermarking, a technique
          used to make a physical impression on bills. The technique first
          appeared in Italy around 1282 and was later advanced in the early
          1800's by John Marshall with his invention of a rolling impression
          device called the "dandy roll". In 1786 the US congress authorized the
          issuance of the dollar (from the German "thaler" which reffered to
          coins minted in the 1500s in the region of Saint Joachim's valley in
          Bohemia) and in 1792 the government created the U.S. mint to
          manufacture and circulate coins. It wasn't until the Civil War began
          in 1861 that the government began regularly printing U.S. dollar bills
          for general circulation and redemption upon demand.
        </p>
      </Container>
      <Segment secondary style={{ width: "40%", margin: "auto" }}>
        <Header>Information from:</Header>
        <a
          href="https://www.fxcm.com/uk/insights/the-history-of-currency/"
          target="blank"
        >
          FXCM - The History Of Currency
        </a>
        <br />
        <a href="https://en.wikipedia.org/wiki/History_of_money" target="blank">
          Wikipedia - The History Of Currency
        </a>
        <br />
        <a
          href="https://www.investopedia.com/articles/07/roots_of_money.asp"
          target="blank"
        >
          Investopedia - The History Of Money
        </a>
        <br />
        <a
          href="http://www.historyworld.net/wrldhis/plaintexthistories.asp?historyid=ab14"
          target="blank"
        >
          History World - The History Of Money
        </a>
      </Segment>
    </Grid.Column>
  );
};

export default Information;
