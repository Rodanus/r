import React from "react";
import "./City.css";

function City(props) {
  return <h2 className="city-name">{props.cityName}</h2>;
}

export default City;
