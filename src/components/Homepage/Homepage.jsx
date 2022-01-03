import React from "react";
import Cities from "../Cities/Cities";
import "./Homepage.css";
import london from "../../images/london.jpg";
import berlin from "../../images/berlin.jpg";
import newYork from "../../images/newYork.jpg";
import londonLarge from "../../images/londonLarge.jpg";
import berlinLarge from "../../images/berlinLarge.jpg";
import newYorkLarge from "../../images/newYorkLarge.jpg";

function Homepage(props) {
  const citiesToDisplay = [
    {
      name: "Berlin",
      images: {
        small: berlin,
        large: berlinLarge
      }
    },
    {
      name: "London",
      images: {
        small: london,
        large: londonLarge
      }
    },
    {
      name: "New York",
      images: {
        small: newYork,
        large: newYorkLarge
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
