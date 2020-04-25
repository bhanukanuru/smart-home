import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "key",
  authDomain: "smart-home-1bcc6.firebaseapp.com",
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
    };
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.isSignedIn ? (
          <div>
            <Router>
              <Header />
              <Routes />
            </Router>
            {/* */}
          </div>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

// const App = () => (
//     <div className="App">
//       <div>
//       <Router>
//         <Header />
//           <Routes />
//         </Router>
//       </div>
//     </div>
// );
export default App;
