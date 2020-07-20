import React from "react";
import classes from "./CardInColumn.module.css";
import Image from "react-image-webp";
import { classExpression } from "@babel/types";

const CardInColumn = ({ cardInfo }) => {
  return (
    <div key={cardInfo.id} className={classes.carouselSlide}>
      <div className={classes.imgWrapper}>
        <Image
          src={cardInfo.url}
          webp={cardInfo.webpUrl}
          className={classes.image}
        />
      </div>
      <div className={classes.slideTitle}>{cardInfo.title}</div>
      <div className={classes.slideInfo}>{cardInfo.info}</div>
    </div>
  );
};

export default CardInColumn;
