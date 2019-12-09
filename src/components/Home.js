import React, { useContext } from "react";
import { AuthContext } from "../Auth";
import { Grid } from "semantic-ui-react";
import Quiz from "./Quiz/Quiz";
import Information from "./Information";
import LivePrices from "./LivePrices";

function Home() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <>
      <Grid textAlign="left">
        <LivePrices />

        <Information />
      </Grid>

      <Quiz />
    </>
  );
}

export default Home;
