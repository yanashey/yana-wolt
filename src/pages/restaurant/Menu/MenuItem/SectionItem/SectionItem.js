import React from "react";
import classes from "./SectionItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "react-image-webp";

const SectionItem = ({ item }) => {
  return (
    <div key={item.id} className={classes.sectionItem}>
      <span className={classes.addItem}>+</span>
      <div className={classes.itemDescriptionContainer}>
        <div className={classes.sectionItemTitle}>{item.title}</div>
        <div className={classes.sectionItemDescription}>
          <span className={classes.sectionItemDescriptionText}>
            {item.description}
          </span>
        </div>
        <div className={classes.sectionItemPrice}>
          <span className={classes.currency}>₪</span>
          {(item.price / 100).toFixed(2)}
          {Object.keys(item.tags).length != 0 ? (
            <span className={classes.menuTag}>
              <FontAwesomeIcon icon={faStar} className={classes.menuTagIcon} />
              {item.tags.name}
            </span>
          ) : null}
        </div>
      </div>
      <Image
        src={require("../../../../../images/" + `${item.img}` + ".jpeg")}
        webp={require("../../../../../images/" + `${item.img}` + ".webp")}
        className={classes.itemImage}
      />
    </div>
  );
};

export default SectionItem;
