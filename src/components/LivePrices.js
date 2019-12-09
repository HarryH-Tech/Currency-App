import React, { useEffect, useState } from "react";
import { Grid, Segment, List } from "semantic-ui-react";
import axios from "axios";

const LivePrices = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.exchangeratesapi.io/latest?base=GBP")
      .then(response => setData(response.data.rates));
  }, []);

  const returnPrices = () => {
    for (var i in data) {
      console.log(i);
      if (i == "ISK") {
        delete data[i];
      }
    }

    return Object.entries(data).map(([key, value]) => (
      <List.Item key={key}>
        {key} - {value}
      </List.Item>
    ));
  };

  return (
    <Grid.Column style={{ width: "30%" }}>
      <Segment>
        <List inverted animated celled relaxed></List>
        {returnPrices()}
      </Segment>
    </Grid.Column>
  );
};

export default LivePrices;
