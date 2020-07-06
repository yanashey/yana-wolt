import React from "react";

const Pricing = props => {
  let dollars = "";
  for (let i = 0; i < props.pricing; i++) {
    dollars += "$";
  }

  return <div>{dollars}</div>;
};

export default Pricing;
