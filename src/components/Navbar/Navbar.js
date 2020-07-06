import React from "react";
import classes from "./Navbar.module.css";
import { Route, Link } from "react-router-dom";

const navbar = props => {
  return (
    <div
      className={`${classes.Navbar}  ${
        props.transparent ? classes.transparent : ""
      }`}
    >
      <div className={classes.logo}>Wolt</div>
      <nav>
        <ul className={classes.navLinks}>
          <li className={classes.navLink}>
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="/login"
            >
              Login
            </Link>
          </li>
          <li className={`${classes.navLink} ${classes.signUp}`}>
            <Link
              style={{ textDecoration: "inherit", color: "inherit" }}
              to="/sign-up"
            >
              Sign Up
            </Link>
          </li>
          <li className={classes.navLink}>English</li>
        </ul>
      </nav>

      <Route />
    </div>
  );
};

export default navbar;
