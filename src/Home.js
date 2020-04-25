import React from "react";
import firebase from "firebase";

function Home(props) {
  return (
    <div>
      <center>
        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        <br />
        <img alt="profile picture" src={firebase.auth().currentUser.photoURL} />
      </center>
    </div>
  );
}

export default Home;
