import React from "react";
import classes from "./Restaurant.module.css";
import data from "../../data/restaurants/menu/show-room.json";
import Navbar from "../../components/Navbar/Navbar";
import StickyHeader from "./StickyHeader/StickyHeader";
import Cover from "./Cover/Cover";
import ScoreBar from "./ScoreBar/ScoreBar";

const Restaurant = props => {
  return (
    <div>
      <Navbar transparent />
      <div className={classes.root}>
        <StickyHeader deliveryEstimation={data.deliveryEstimation} />
        <Cover
          coverUrl={data.coverUrl}
          pricing={data.pricing}
          description={data.description}
          title={data.title}
          tags={data.tags}
        />
        <div className={classes.contentRoot}>
          <ScoreBar score={data.score} />
          <div className={classes.main}>
            <div className={classes.categories}>
              <ul>
                {data.menu.map(category => {
                  return (
                    <li key={category.id} className={classes.category}>
                      {category.sectionTitle}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>Menu</div>
            <div>Adional info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
