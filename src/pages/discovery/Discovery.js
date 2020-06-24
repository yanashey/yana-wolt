import React from "react";
import classes from "./Discovery.module.css";
import categoriesData from "../../data/categories/data";
import market from "../../data/market/data";
import restaurants from "../../data/restaurants/restaurants";
import Carousel from "../../components/Carousel/Carousel";
import Geocode from "react-geocode";


class Discovery extends React.Component {
  constructor(props) {
    super(props);
    Geocode.setApiKey("AIzaSyCpKKsGO-b8ZWhOFbHE4y9qtUra4SCZhBc");
    Geocode.enableDebug();

    this.state = {
      address: this.props.address
    };
  }

  componentDidMount(){
      
  }

  render() {
    return (
      <div>
        <Carousel header={"Categories"} data={categoriesData} column={true} />
        <Carousel header={"Wolt Market"} data={market} column={true} />
        <Carousel
          header={"Something Sweet"}
          data={restaurants}
          extendedCard={true}
          displayTotal={true}
        />
      </div>
    );
  }
}

export default Discovery;
