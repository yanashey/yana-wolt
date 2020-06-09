import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import classes from "./ControlArrows.module.css";

const controlArrows = props => {
  return (
    <div className={classes.controls}>
      <button
        className={`${classes.controlArrowLeft} ${classes.controlArrow}`}
        onClick={props.scrollLeft}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={classes.controlArrow} onClick={props.scrollRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default controlArrows;
