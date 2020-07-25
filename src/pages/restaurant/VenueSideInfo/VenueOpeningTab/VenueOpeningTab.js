import React from "react";
import classes from "./VenueOpeningTab.module.css";

const VenueOpeningTab = props => {
  let { opening, value, index } = props;
  let y = Object.entries(opening).map(([days, hours], index) => {
    return (
      <div key={index} className={classes.opening}>
        <span>{days}</span>
        <span className={classes.hours}>{hours}</span>
      </div>
    );
  });

  return <div>{y}</div>;
};

export default VenueOpeningTab;
