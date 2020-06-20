import React from "react";
import classes from "./SubNavbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faUtensils,
  faBiking
} from "@fortawesome/free-solid-svg-icons";

const subNavbar = props => {
  return (
    <div>
      <nav className={classes.subNavbar}>
        <div className={classes.subNavbarWrapper}>
          <div className={classes.left}>
            <span className={classes.locationIcon}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <span className={classes.locationAddress}>{props.address}</span>
          </div>

          <div className={classes.center}>
            <div className={classes.action}>
              <span className={classes.actionIcon}>
                <FontAwesomeIcon icon={faUtensils} />
              </span>
              <Link
                style={{ textDecoration: "inherit", color: "inherit" }}
                to="/discover"
              >
                {" "}
                Discover
              </Link>
            </div>
            <span>|</span>
            <div className={classes.action}>
              <span className={classes.actionIcon}>
                <FontAwesomeIcon icon={faBiking} />
              </span>
              <Link
                style={{ textDecoration: "inherit", color: "inherit" }}
                to="/delivery"
              >
                Delivery
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default subNavbar;
