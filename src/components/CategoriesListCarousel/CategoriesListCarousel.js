import React, { useLayoutEffect } from "react";
import classes from "./CategoriesListCarousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import categories from "./data";

class CategoriesListCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: categories,
    activeIndex: 0
  };

  scrollLeft = () => {
    let index = (this.state.activeIndex - 2) % this.state.data.length;
    let last = this.state.data.slice(-2);
    let rest = this.state.data.slice(0, -2);
    console.log("scrolLeft: first" + last);
    console.log("scrolLeft: rest" + rest);
    let images = [...last, ...rest];
    console.log("scrolLeft: images" + images);
    this.setState({
      activeIndex: index,
      data: images
    });
  };

  scrollRight = () => {
    let index = (this.state.activeIndex + 2) % this.state.data.length;
    let rest = this.state.data.slice(2, this.state.data.length);
    let first = this.state.data.slice(0, 2);
    console.log("scrolRight: first" + first);
    console.log("scrolRight: rest" + rest);
    let images = [...rest, ...first];
    console.log("scrolRight: imgase:" + images);
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
            <img src={items[i].url} alt="bla"></img>
          </div>
          {i + 1 < this.state.data.length ? (
            <div key={items[i + 1].id} className={classes.carouselSlide}>
              <img src={items[i + 1].url} alt="bla"></img>
            </div>
          ) : null}
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
          <div className={classes.controls}>
            <button
              className={`${classes.controlArrowLeft} ${classes.controlArrow}`}
              onClick={this.scrollLeft}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={classes.controlArrow} onClick={this.scrollRight}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className={classes.carouselContainer}>
          <div className={classes.caroauselTrack}>{list}</div>
        </div>
      </div>
    );
  }
}

export default CategoriesListCarousel;
