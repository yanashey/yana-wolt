import React, { Component } from "react";
import classes from "./VenueSideInfo.module.css";
import VenueOpeningTab from "./VenueOpeningTab/VenueOpeningTab";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";

class VenueSideInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleChange = (event, newIndex) => {
    this.setState({
      index: newIndex
    });
  };

  handleChangeIndex = newIndex => {
    this.setState({
      index: newIndex
    });
  };

  render() {
    let { address, openingHours, phone, allergies } = this.props;

    let tabs = (
      <Tabs
        value={this.state.index}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={this.handleChange}
      >
        <Tab label="Restaurant" index={0} />

        <Tab label="Delivery" index={1} />
      </Tabs>
    );
    return (
      <div className={classes.container}>
        <div className={classes.venueTitle}>Venue information</div>
        <div className={classes.addressContainer}>
          <div className={classes.title}>Address</div>
          <div>{address.address}</div>
          <div className={classes.zipCode}>
            {address.postCode} {address.city}
          </div>
          <div className={classes.mapLink}>See map</div>
        </div>
        <div className={classes.tabs}>
          <div className={classes.title}>Opening times</div>
          <div>{tabs}</div>
          <SwipeableViews
            axis={"x"}
            index={this.state.index}
            onChangeIndex={this.handleChangeIndex}
            className={classes.swipeableViews}
          >
            <VenueOpeningTab
              opening={openingHours.opening.restaurant}
              value={this.state.index}
              index={0}
            />
            <VenueOpeningTab
              opening={openingHours.opening.delivery}
              value={this.state.index}
              index={1}
            />
          </SwipeableViews>
        </div>
        <div>
          <div className={classes.allergies}>{allergies}</div>
          <div className={classes.phone}>{phone}</div>
        </div>

        <div className={classes.moreInfoLink}>See more information</div>
      </div>
    );
  }
}

export default VenueSideInfo;
