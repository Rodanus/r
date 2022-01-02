import React from "react";
import { Link } from "react-router-dom";
import "./City.css";

function City(props) {
  return (
    <Link to={`/weather/${props.cityName}`}>
      <h2 className="city-name">{props.cityName}</h2>
    </Link>
  );
}

export default City;
