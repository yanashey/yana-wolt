import React from "react";
import classes from "./Cover.module.css";
import Pricing from "../../../components/Pricing/Pricing";
import Tags from "../Tags/Tags";

const Cover = props => {
  let coverUrl = require("../../../data/restaurants/menu/" +
    props.coverUrl +
    ".webp");
  let background = { backgroundImage: "url(" + coverUrl + ")" };
  return (
    <div className={classes.coverContainer}>
      <div style={background} className={classes.coverImg}></div>
      <div className={classes.coverTitle}>{props.title}</div>
      <div className={classes.coverDescription}>{props.description}</div>
      <div className={classes.coverPricing}>
        <Pricing pricing={props.pricing} />
      </div>
      <div>
        <Tags tags={props.tags} />
      </div>
    </div>
  );
};

export default Cover;
