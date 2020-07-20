import React from "react";
import classes from "./MenuItem.module.css";
import SectionItem from "./SectionItem/SectionItem";

const MenuItem = props => {
  let section = props.section;
  return (
    <section className={classes.section} id={section.id} key={section.id}>
      <div className={classes.sectionTitle}>{section.sectionTitle}</div>
      {section.items.map(item => {
        return <SectionItem item={item} />;
      })}
    </section>
  );
};

export default MenuItem;
