import React from "react";
import classes from "./Tags.module.css";

const Tags = props => {
  return (
    <div className={classes.tags}>
      {props.tags.map((tag, index) => {
        return (
          <div className={classes.tag} key={index}>
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
