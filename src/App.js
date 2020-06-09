import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <SubNavbar />
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route exact component={() => <h1>Login</h1>} path="/login" />
          <Route exact component={() => <h1>Sign Up</h1>} path="/sign-up" />
          <Route exact component={Carousel} path="/discover" />
          <Route exact component={() => <h1>Delivery</h1>} path="/delivery" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
