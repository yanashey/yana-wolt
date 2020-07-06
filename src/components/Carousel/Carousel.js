import React from "react";
import classes from "./Carousel.module.css";

import ControlsArrows from "../ControlsArrows/ControlArrows";
import CarouselCardInColumn from "./CarouselCardInColumn/CarouselCardInColumn.js";
import ExtendedCard from "./ExtendedCard/ExtendedCard";
import categories from "../../data/categories/data";
import { Link } from "react-router-dom";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef();
    this.state = {
      data: props.data,
      activeIndex: 0,
      column: {
        useColumn: this.props.column || false,
        numOfCards: 8,
        slidesPerRow: 3,
        rows: 2
      },
      row: {
        useRow: this.props.extendedCard || false,
        numOfCards: 3
      },
      displayTotal: this.props.displayTotal || false
    };
  }

  scrollLeft = () => {
    let cardMovement = this.state.column.useColumn ? 2 : 1;
    let index =
      (this.state.activeIndex - cardMovement) % this.state.data.length;
    let last = this.state.data.slice(-cardMovement);
    let rest = this.state.data.slice(0, -cardMovement);
    let images = [...last, ...rest];
    console.log(index);

    this.setState({
      activeIndex: index,
      data: images
    });
  };

  scrollRight = () => {
    let cardMovement = this.state.column.useColumn ? 2 : 1;
    let index =
      (this.state.activeIndex + cardMovement) % this.state.data.length;
    let rest = this.state.data.slice(cardMovement, this.state.data.length);
    let first = this.state.data.slice(0, cardMovement);
    let images = [...rest, ...first];

    this.setState({
      activeIndex: index,
      data: images
    });
  };

  shouldDisplayControlsArrows = () => {
    return (
      (this.state.column.useColumn &&
        this.state.data.length > this.state.column.numOfCards) ||
      (this.state.row.useRow &&
        this.state.data.length > this.state.row.numOfCards)
    );
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
    } else {
      data = this.state.data.map(item => (
        <Link
          to={`/restaurants/${item.id}`}
          style={{ textDecoration: "none", color: "Black" }}
        >
          <ExtendedCard data={item} />
        </Link>
      ));
    }
    return data;
  };

  render() {
    let list = this.constructData();
    console.log(this.context.history);
    return (
      <div className={classes.container}>
        <div className={classes.carouselHeaderContainer}>
          <div className={classes.header}>{this.props.header}</div>
          <div className={classes.controlsWrapper}>
            {this.state.displayTotal ? (
              <div className={classes.totalButton}>
                All ({this.state.data.length})
              </div>
            ) : null}
            {this.shouldDisplayControlsArrows() ? (
              <ControlsArrows
                scrollLeft={this.scrollLeft}
                scrollRight={this.scrollRight}
              />
            ) : null}
          </div>
        </div>
        <div className={classes.carouselContainer}>
          <div className={classes.carouselTrack} ref={this.carousel}>
            {list}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
