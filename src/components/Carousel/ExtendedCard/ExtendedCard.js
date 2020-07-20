import React from "react";
import classes from "./ExtendedCard.module.css";
import { Emoji, Twemoji } from "react-emoji-render";
import Pricing from "../../Pricing/Pricing";
import Image from "react-image-webp";

const ExtendedCard = props => {
  let emoji;

  if (props.data.score >= 9.0) {
    emoji = <Twemoji svg text={"😄"} />;
  } else {
    emoji = <Twemoji svg text={"🙂"} />;
  }

  return (
    <div className={classes.carouselSlide} key={props.data.id}>
      <div className={classes.root}>
        <div className={classes.imgContainer}>
          <div className={classes.slideImg}>
            <div
              className={classes.slideImageIn}
              style={{ backgroundImage: `url(${props.data.url})` }}
            ></div>
          </div>
        </div>

        <div className={classes.extendedCardBottom}>
          <div className={classes.cardBottomTitle}>{props.data.title}</div>
          <div className={classes.cardBottomDescription}>
            {props.data.description}
          </div>
          <div className={classes.cardBottomBorder}></div>
          <div className={classes.bottomRow}>
            <span className={classes.additionalInfo}>
              <Pricing pricing={props.data.pricing} />
            </span>
            <span className={classes.additionalInfo}>
              &nbsp;·&nbsp; {props.data.deliveryEstimation} min
            </span>
            <span className={classes.additionalInfo}>
              &nbsp;·&nbsp; {emoji} &nbsp;
              {props.data.score}
            </span>
            <span className={classes.additionalInfo}>
              &nbsp;·&nbsp;
              {props.data.tags.join(", ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendedCard;
