import React, { useLayoutEffect } from "react";
import classes from "./CategoriesListCarousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

class CategoriesListCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.scroller = React.createRef();
  }

  state = {
    data: [
      {
        id: 1,
        content:
          "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
        author: "Bane",
        source: "facebook",
        url: require("./../../images/categories/bla.jpg"),
        color: "black"
      },
      {
        id: 2,
        content:
          "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
        author: "Ra's Al Ghul",
        source: "Snapchat",
        url: require("./../../images/categories/resturant.jpg"),
        color: "red"
      },
      {
        id: 3,
        content:
          "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
        author: "Joker",
        source: "facebook",
        url: require("./../../images/categories/resturant.jpg"),
        color: "blue"
      },
      {
        id: 4,
        content:
          "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
        author: "Bruce Wayne",
        source: "facebook",
        url: require("./../../images/categories/resturant.jpg"),
        color: "yellow"
      },
      {
        id: 5,
        content:
          "But it's not who you are underneath... it's what you do that defines you.",
        author: "Rachel Dawes",
        source: "twitter",
        url: require("./../../images/categories/bla.jpg"),
        color: "pink"
      },
      {
        id: 6,
        content:
          "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
        author: "John Blake",
        source: "Google+",
        url: require("./../../images/categories/bla.jpg"),
        color: "grey"
      },
      {
        id: 7,
        content:
          "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
        author: "John Blake",
        source: "Google+",
        url: require("./../../images/categories/bla.jpg"),
        color: "orange"
      },
      {
        id: 8,
        content:
          "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
        author: "John Blake",
        source: "Google+",
        url: require("./../../images/categories/bla.jpg"),
        color: "green"
      },
      {
        id: 9,
        content:
          "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
        author: "John Blake",
        source: "Google+",
        url: require("./../../images/categories/bla.jpg"),
        color: "purple"
      },
      {
        id: 10,
        content:
          "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
        author: "John Blake",
        source: "Google+",
        url: require("./../../images/categories/bla.jpg"),
        color: "brown"
      },
      {
        id: 1,
        content:
          "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
        author: "Bane",
        source: "facebook",
        url: require("./../../images/categories/bla.jpg"),
        color: "black"
      },
      {
        id: 2,
        content:
          "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
        author: "Ra's Al Ghul",
        source: "Snapchat",
        url: require("./../../images/categories/resturant.jpg"),
        color: "red"
      },
      {
        id: 3,
        content:
          "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
        author: "Joker",
        source: "facebook",
        url: require("./../../images/categories/resturant.jpg"),
        color: "blue"
      }
    ],
    activeIndex: 0,
    maxCardsOnScreen: 2,
    y: 0
  };

  scrollLeft = () => {
    let index = (this.state.activeIndex - 1) % this.state.data.length;
    // let last = [...this.state.data].pop();
    // let rest = this.state.data.slice(0, -1);
    // console.log("scrolLeft: first" + last.id);
    // console.log("scrolLeft: rest" + rest);
    // let images = [last, ...rest];
    // console.log("scrolLeft: images" + images);
    this.setState({
      activeIndex: index
      // data: images
    });
  };

  scrollRight = () => {
    let index = (this.state.activeIndex + 1) % this.state.data.length;
    // let rest = this.state.data.slice(1, this.state.data.length);
    // let first = this.state.data.slice(0, 1);
    // console.log("scrolRight: first" + first.id);
    // console.log("scrolRight: rest" + rest);
    // let images = [...rest, first];
    // console.log("scrolRight: imgase:" + images);
    this.setState({
      activeIndex: index
      // data: images
    });
  };

  constructData = () => {
    let data = [];
    let items = this.state.data;
    for (var i = 0; i < this.state.data.length; i += 2) {
      let f = (
        <div className={classes.carouselColumn}>
          <div key={items[i].id} className={classes.carouselSlide}>
            <img src={items[i].url} alt="bla"></img>
          </div>
          <div key={items[i + 1].id} className={classes.carouselSlide}>
            <img src={items[i + 1].url} alt="bla"></img>
          </div>
        </div>
      );
      data.push(f);
    }
    return data;
  };

  render() {
    let list = this.state.data.map(item => (
      <div className={classes.carouselSlide} key={item.id}>
        <img src={item.url} alt="bla"></img>
      </div>
    ));

    return (
      <div className={classes.container}>
        <div className={classes.carouselHeaderContainer}>
          <div className={classes.header}>Categories</div>
          <div className={classes.controls}>
            <button
              className={`${classes.controlArrowLeft} ${classes.controlArrow}`}
              onClick={this.scrollLeft}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={classes.controlArrow} onClick={this.scrollRight}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className={classes.carouselContainer}>
          <div
            className={classes.caroauselTrack}
            style={{
              transform: `translate3d(-${this.state.activeIndex *
                (100 / this.state.data.length)}%,0px,0px)`
            }}
          >
            {list}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesListCarousel;
