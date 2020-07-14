import React from "react";
import classes from "./SideMenu.module.css";
import { Link } from "react-scroll";

const SideMenu = props => {
  return (
    <div>
      <ul className={classes.categories}>
        {props.categories.map(category => {
          return (
            <Link
              activeClass={classes.active}
              to={category.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              key={category.id}
              className={classes.category}
            >
              {category.sectionTitle}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
