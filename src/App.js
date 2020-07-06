import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Discovery from "./pages/discovery/Discovery";
import Restaurant from "./pages/restaurant/Restaurant";
// import Geocode from "react-geocode";
// import Firebase from "firebase";
// import firebaseConfig from "./firebaseConfig";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      address: "Tel Aviv-Yafo"
    };

    // Geocode.setApiKey(process.env.REACT_APP_GOOGLE_GEOLOCATION_API_KEY);
    // Geocode.enableDebug();
    // Firebase.initializeApp(firebaseConfig);
    // Firebase.analytics();
  }

  getCurrentPositionSuccess = pos => {
    Geocode.fromLatLng(pos.coords.latitude, pos.coords.longitude).then(
      response => {
        this.setState({
          loading: false,
          address: response.results[0].formatted_address.split(",")[1]
        });
      },
      error => {
        console.log(error);
      }
    );
  };

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(this.getCurrentPositionSuccess);
    this.setState({
      loading: false
    });
  }

  render() {
    let loading = this.state.loading;
    return (
      <BrowserRouter>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="App">
            <Switch>
              <Route exact component={() => <h1>Login</h1>} path="/login" />
              <Route exact component={() => <h1>Sign Up</h1>} path="/sign-up" />
              <Route
                exact
                render={props => (
                  <Discovery address={this.state.address} {...props} />
                )}
                path="/discover"
              />
              <Route
                exact
                component={() => <h1>Delivery</h1>}
                path="/delivery"
              />
              <Route
                exact
                path="/restaurants/:restaurantId"
                render={props => <Restaurant {...props} />}
              ></Route>
              <Redirect to="/discover" />
            </Switch>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
