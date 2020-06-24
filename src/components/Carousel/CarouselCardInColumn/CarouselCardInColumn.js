import React from "react";
import classes from "./CarouselCardInColumn.module.css";
import CardInColumn from "./CardInColumn/CardInColumn";

const CarouselCardInColumn = props => {
  return (
    <div
      className={classes.carouselColumn}
      key={`${props.data[0].id}${props.data[0].id}`}
    >
      <CardInColumn cardInfo={props.data[0]} key={`${props.data[0].id}`} />
      {props.data.length > 1 ? (
        <CardInColumn cardInfo={props.data[1]} key={`${props.data[1].id}`} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CarouselCardInColumn;
