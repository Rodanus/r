import React from "react";
import Cities from "../Cities/Cities";
import "./Homepage.css";

function Homepage(props) {
  const citiesToDisplay = [
    { name: "Berlin" },
    { name: "London" },
    { name: "New York" }
  ];

  return (
    <div className="homepage-container">
      <Cities listOfCities={citiesToDisplay} />
    </div>
  );
}

export default Homepage;
