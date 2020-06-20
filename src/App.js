import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import Discovery from "./pages/discovery/Discovery";
import Geocode from "react-geocode";

class App extends React.Component {
  constructor() {
    super();
    Geocode.setApiKey("AIzaSyCpKKsGO-b8ZWhOFbHE4y9qtUra4SCZhBc");
    Geocode.enableDebug();

    this.state = {
      loading: true,
      address: ""
    };
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
    navigator.geolocation.getCurrentPosition(this.getCurrentPositionSuccess);
  }

  render() {
    let loading = this.state.loading;
    return (
      <BrowserRouter>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="App">
            <Navbar />
            <SubNavbar address={this.state.address} />
            <Switch>
              <Route exact path="/" component={() => <h1>Home</h1>} />
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
            </Switch>
          </div>
        )}
      </BrowserRouter>
    );
  }
}

export default App;
