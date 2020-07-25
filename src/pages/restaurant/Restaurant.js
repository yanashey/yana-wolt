import React from "react";
import classes from "./Restaurant.module.css";
import data from "../../data/restaurants/menu/show-room.json";
import Navbar from "../../components/Navbar/Navbar";
import StickyHeader from "./StickyHeader/StickyHeader";
import Cover from "./Cover/Cover";
import ScoreBar from "./ScoreBar/ScoreBar";
import SideMenu from "./SideMenu/SideMenu";
import Menu from "./Menu/Menu";
import VenueSideInfo from "./VenueSideInfo/VenueSideInfo";

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
            <SideMenu categories={data.menu} />
            <Menu menu={data.menu} />
            <VenueSideInfo
              address={{ ...data.addressInformation, city: data.city }}
              openingHours={data.information}
              phone={data.phone}
              allergies={data.allergies}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
