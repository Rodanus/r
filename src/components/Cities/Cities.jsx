import React from "react";
import City from "../City/City";
import "./Cities.css";

function Cities(props) {
  return (
    <div className="cities-container">
      {props.listOfCities.map(city => (
        <City cityName={city.name} key={city.name} />
      ))}
    </div>
  );
}

export default Cities;
