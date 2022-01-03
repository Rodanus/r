import React from "react";
import { Link } from "react-router-dom";
import "./City.css";

function City(props) {
  return (
    <Link
      to={`/weather/${props.city.name}`}
      state={{ backgroundLargeImage: props.city.images.large }}
      className="city-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.1)), url(${props.city.images.small})`
      }}
    >
      <h2 className="city-name">{props.city.name}</h2>
    </Link>
  );
}

export default City;
