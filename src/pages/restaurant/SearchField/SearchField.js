import React from "react";
import classes from "./SearchField.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = props => {
  return (
    <div className={classes.SearchField}>
      <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
      <input className={classes.searchInput} placeholder="Search"></input>
    </div>
  );
};

export default SearchBar;
