import React from "react";
import classes from "./CardInColumn.module.css";

const CardInColumn = ({ cardInfo }) => {
  return (
    <div key={cardInfo.id} className={classes.carouselSlide}>
      <div className={classes.imgWrapper}>
        <img
          className={classes.image}
          src={cardInfo.url}
          alt={cardInfo.title}
        ></img>
      </div>
      <div className={classes.slideTitle}>{cardInfo.title}</div>
      <div className={classes.slideInfo}>{cardInfo.info}</div>
    </div>
  );
};

export default CardInColumn;
