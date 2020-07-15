import React from "react";
import classes from "./MenuItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MenuItem = props => {
  let section = props.section;
  return (
    <section className={classes.section} id={section.id} key={section.id}>
      <div className={classes.sectionTitle}>{section.sectionTitle}</div>
      {section.items.map(item => {
        return (
          <div key={item.id} className={classes.sectionItem}>
            <div className={classes.sectionItemTitle}>{item.title}</div>
            <div className={classes.sectionItemDescription}>
              <span className={classes.sectionItemDescriptionText}>
                {item.description}
              </span>
              <span>
                <img src={require("./" + `${item.img}`)} alt="ff"></img>
              </span>
            </div>
            <div className={classes.sectionItemPrice}>
              <span className={classes.currency}>₪</span>
              {(item.price / 100).toFixed(2)}
              {Object.keys(item.tags).length != 0 ? (
                <span className={classes.menuTag}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className={classes.menuTagIcon}
                  />
                  {item.tags.name}
                </span>
              ) : null}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MenuItem;
