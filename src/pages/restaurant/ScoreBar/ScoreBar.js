import React from "react";
import classes from "./ScoreBar.module.css";
import { Emoji, Twemoji } from "react-emoji-render";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import SearchField from "../SearchField/SearchField";

const ScoreBar = props => {
  return (
    <div className={classes.scoreBar}>
      <div className={classes.scoreBarWrapper}>
        <div className={classes.scoreContainer}>
          <Twemoji svg text={"😄"} className={classes.emoji} />
          <div className={classes.score}>
            {props.score}
            <div className={classes.totalScore}>out of 10</div>
          </div>
        </div>
        <div className={classes.favorite}>
          <FontAwesomeIcon icon={faHeart} className={classes.favoriteIcon} />
          Favourite
        </div>
        <div className={classes.searchField}>
          <SearchField />
        </div>
      </div>
    </div>
  );
};

export default ScoreBar;
