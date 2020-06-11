import React from "react";
import classes from "./Discovery.module.css";
import categoriesData from "../../data/categories/data";
import market from "../../data/market/data";
import Carousel from "../../components/Carousel/Carousel";

class Discovery extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          header={"Categories"}
          data={categoriesData}
          columnStructure={true}
        />
        <Carousel header={"Wolt Market"} data={market} columnStructure={true} />
      </div>
    );
  }
}

export default Discovery;
