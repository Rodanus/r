import React from "react";
import { Link } from "react-router-dom";
import "./City.css";

function City(props) {
  return (
    <div className="city-container">
      <h2 className="city-name">
        <Link to={`/weather/${props.cityName}`}>{props.cityName}</Link>
      </h2>
    </div>
  );
}

export default City;
