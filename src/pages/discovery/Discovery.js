import React from "react";
import classes from "./Discovery.module.css";
import categoriesData from "../../data/categories/data";
import market from "../../data/market/data";
import telAvivSweets from "../../data/restaurants/telAviv";
import Carousel from "../../components/Carousel/Carousel";

class Discovery extends React.Component {
  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
  }

  render() {
    return (
      <div>
        <Carousel header={"Categories"} data={categoriesData} column={true} />
        <Carousel header={"Wolt Market"} data={market} column={true} />
        <Carousel
          header={"Something Sweet"}
          data={telAvivSweets}
          extendedCard={true}
          displayTotal={true}
        />
      </div>
    );
  }
}

export default Discovery;
