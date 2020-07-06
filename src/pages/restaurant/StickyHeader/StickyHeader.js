import React from "react";
import classes from "./StickyHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBiking, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const StickyHeader = props => {
  return (
    <div className={classes.stickyHeader}>
      <div className={classes.stickyHeaderWrapper}>
        <div className={classes.left}>
          <FontAwesomeIcon icon={faBiking} />
          <span className={classes.deliveryEstimation}>
            The average delivery time is <b>{props.deliveryEstimation}</b>
            &nbsp;min
          </span>
        </div>
        <div className={classes.center}>
          Open today: <b>08.00-21.00</b>
        </div>
        <div className={classes.right}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={classes.shoppingItem}
          />
          0 items
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
