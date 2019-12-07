import React, { useContext } from "react";
import firebase from "../firebase";
import { AuthContext } from "../Auth";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
      <h2>Hi {currentUser.username}</h2>;
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </>
  );
};

export default Home;
