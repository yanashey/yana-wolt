import React from "react";
import classes from "./Menu.module.css";
import MenuItem from "./MenuItem/MenuItem";

const Menu = props => {
  return (
    <div>
      {props.menu.map(section => {return <MenuItem section={section} />;})}
    </div>
  );
};

export default Menu;
