import React from "react";
import classes from "./Carousel.module.css";

import ControlsArrows from "../ControlsArrows/ControlArrows";
import CarouselCardInColumn from "./CarouselCardInColumn/CarouselCardInColumn.js";
import categories from "../../data/categories/data";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      activeIndex: 0,
      column: {
        useColumn: true,
        numOfCards: 8
      }
    };
  }

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
    if (this.state.column.useColumn) {
      for (var i = 0; i < this.state.data.length; i += 2) {
        let columnData = [items[i]];
        if (i + 1 < this.state.data.length) columnData.push(items[i + 1]);
        let cardInColumn = <CarouselCardInColumn data={columnData} />;
        data.push(cardInColumn);
      }
    }
    return data;
  };

  render() {
    let list = this.constructData();
    return (
      <div className={classes.container}>
        <div className={classes.carouselHeaderContainer}>
          <div className={classes.header}>{this.props.header}</div>
          {this.state.column.useColumn &&
          this.state.data.length > this.state.column.numOfCards ? (
            <ControlsArrows
              scrollLeft={this.scrollLeft}
              scrollRight={this.scrollRight}
            />
          ) : null}
        </div>
        <div className={classes.carouselContainer}>
          <div className={classes.carouselTrack}>{list}</div>
        </div>
      </div>
    );
  }
}

export default Carousel;
