import React from "react";
import classes from "./Carousel.module.css";

import ControlsArrows from "../ControlsArrows/ControlArrows";

import categories from "./data";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: categories,
    activeIndex: 0,
    columnStructure: false
  };

  scrollLeft = () => {
    let index = (this.state.activeIndex - 2) % this.state.data.length;
    let last = this.state.data.slice(-2);
    let rest = this.state.data.slice(0, -2);
    let images = [...last, ...rest];
    console.log(index);
    this.setState({
      activeIndex: index,
      data: images
    });
  };

  scrollRight = () => {
    let index = (this.state.activeIndex + 2) % this.state.data.length;
    let rest = this.state.data.slice(2, this.state.data.length);
    let first = this.state.data.slice(0, 2);
    let images = [...rest, ...first];
    this.setState({
      activeIndex: index,
      data: images
    });
  };

  constructData = () => {
    let data = [];
    let items = this.state.data;
    for (var i = 0; i < this.state.data.length; i += 2) {
      let f = (
        <div className={classes.carouselColumn} key={`${items[i].id}`}>
          <div key={items[i].id} className={classes.carouselSlide}>
            <div className={classes.imgWrapper}>
              <img src={items[i].url} alt="bla"></img>
            </div>
            <div className={classes.slideTitle}>{items[i].categoryName}</div>
            <div className={classes.slideInfo}>
              {items[i].numOfRestaurants} restaurants
            </div>
          </div>
          <div key={items[i + 1].id} className={classes.carouselSlide}>
            <div className={classes.imgWrapper}>
              <img src={items[i + 1].url} alt="bla"></img>
            </div>
            <div className={classes.slideTitle}>
              {items[i + 1].categoryName}
            </div>
            <div className={classes.slideInfo}>
              {items[i + 1].numOfRestaurants} restaurants
            </div>
          </div>
        </div>
      );
      data.push(f);
    }
    return data;
  };

  render() {
    let list = this.constructData();

    return (
      <div className={classes.container}>
        <div className={classes.carouselHeaderContainer}>
          <div className={classes.header}>Categories</div>
          <ControlsArrows
            scrollLeft={this.scrollLeft}
            scrollRight={this.scrollRight}
          />
        </div>
        <div className={classes.carouselContainer}>
          <div className={classes.carouselTrack}>{list}</div>
        </div>
      </div>
    );
  }
}

export default Carousel;
