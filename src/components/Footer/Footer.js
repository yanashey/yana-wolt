import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { createRequire } from "module";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerWrapper}>
        <div className={classes.row}>
          <span className={classes.logo}>Wolt</span>
        </div>
        <div className={classes.row}>
          <div className={`${classes.downloadColumn} ${classes.column}`}>
            <div className={classes.columnHeader}>Download The App</div>
            <div>
              <img
                className={classes.appBadge}
                src={require("../../images/appBadges/ios.png")}
                alt="ios badge"
              ></img>
            </div>
            <div>
              <img
                className={classes.appBadge}
                src={require("../../images/appBadges/android.png")}
                alt="android badge"
              ></img>
            </div>
          </div>
          <ul className={`${classes.jobsColumn} ${classes.column}`}>
            <div className={classes.columnHeader}>Let's do this together</div>
            <li className={classes.columnLink}>For couriers</li>
            <li className={classes.columnLink}>For restaurants</li>
            <li className={classes.columnLink}>For companies</li>
            <li className={classes.columnLink}>Jobs</li>
          </ul>
          <ul className={`${classes.woltColumn} ${classes.column}`}>
            <div className={classes.columnHeader}>Wolt links</div>
            <li className={classes.columnLink}>Contact</li>
            <li className={classes.columnLink}>Media</li>
            <li className={classes.columnLink}>Support</li>
            <li className={classes.columnLink}>Blog</li>
            <li className={classes.columnLink}>Responsibility</li>
          </ul>
        </div>
        <div className={classes.row}>
          <div className={classes.column}>© Wolt 2014-2020</div>
          <div className={`${classes.termsAndConditions} ${classes.column}`}>
            Terms and conditions
          </div>
          <div className={`${classes.social} ${classes.column}`}>
            <FontAwesomeIcon
              icon={faFacebook}
              className={`${classes.socialIcon} ${classes.facebook}`}
            />

            <FontAwesomeIcon
              icon={faTwitter}
              className={`${classes.socialIcon} ${classes.twitter}`}
            />

            <FontAwesomeIcon
              icon={faInstagram}
              className={`${classes.socialIcon} ${classes.instagram}`}
            />

            <FontAwesomeIcon
              icon={faLinkedin}
              className={`${classes.socialIcon} ${classes.linkedin}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
