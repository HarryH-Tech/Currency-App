import React, { useEffect, useState } from "react";
import { Grid, Segment, List, Dropdown } from "semantic-ui-react";
import axios from "axios";
import NumericLabel from "react-pretty-numbers";

const LivePrices = () => {
  const [data, setData] = useState({});

  const currencyOptions = [
    {
      key: "GBP",
      text: "Great British Pound (£)",
      value: "GBP"
    },
    {
      key: "USD",
      text: "United States Dollar ($)",
      value: "USD"
    },
    {
      key: "CAD",
      text: "Canadian Dollar ($)",
      value: "CAD"
    },
    {
      key: "CNY",
      text: "Chinese Yuan (¥)",
      value: "CNY"
    },
    {
      key: "INR",
      text: "Indian Rupee (₹)",
      value: "INR"
    },
    {
      key: "JPY",
      text: "Japanese Yen (¥)",
      value: "JPY"
    }
  ];

  useEffect(() => {
    getCurrencyData();
  }, []);

  const getCurrencyData = (e, data = "GBP") => {
    let selectedCurrency;
    data.value ? (selectedCurrency = data.value) : (selectedCurrency = "GBP");

    axios
      .get(
        `https://api.exchangeratesapi.io/latest?base=${selectedCurrency}&symbols=USD,EUR,CAD,EUR,INR,JPY,CNY`
      )
      .then(response => setData(response.data.rates));
  };

  return (
    <Grid.Column style={{ width: "50%", margin: "auto" }}>
      <Segment style={{ textAlign: "center" }}>
        <h3>Live Prices</h3>
        <Dropdown
          placeholder="GBP (£)"
          selection
          fluid
          options={currencyOptions}
          value={currencyOptions.key}
          onChange={getCurrencyData}
        />
        <List inverted animated celled relaxed>
          {Object.entries(data).map(([key, value]) => (
            <List.Item key={key}>
              {key} - <NumericLabel>{value}</NumericLabel>
            </List.Item>
          ))}
        </List>
      </Segment>
    </Grid.Column>
  );
};

export default LivePrices;
