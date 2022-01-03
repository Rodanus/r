import React from "react";
import Cities from "../Cities/Cities";
import "./Homepage.css";
import london from "../../images/london.jpg";
import berlin from "../../images/berlin.jpg";
import newYork from "../../images/newYork.jpg";

function Homepage(props) {
  const citiesToDisplay = [
    {
      name: "Berlin",
      images: {
        small: berlin
      }
    },
    {
      name: "London",
      images: {
        small: london
      }
    },
    {
      name: "New York",
      images: {
        small: newYork
      }
    }
  ];

  return (
    <div className="homepage-container">
      <Cities listOfCities={citiesToDisplay} />
    </div>
  );
}

export default Homepage;
