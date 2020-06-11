import React from "react";
import classes from "./CarouselCardInColumn.module.css";
import CardInColumn from "./CardInColumn/CardInColumn";

const CarouselCardInColumn = props => {
  return (
    <div className={classes.carouselColumn} key={`${props.data[0].id}`}>
      <CardInColumn cardInfo={props.data[0]} />
      {props.data.length > 1 ? (
        <CardInColumn cardInfo={props.data[1]} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CarouselCardInColumn;
