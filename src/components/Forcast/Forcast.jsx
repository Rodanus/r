import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Forcast.css";

function Forcast(props) {
  const getWeatherinfo = () => {
    const weatherData = fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=Berlin&aqi=no`
    )
      .then(res => res.json())
      .then(res => console.log(res));
  };

  useEffect(() => {
    getWeatherinfo();
  });
  return (
    <div>
      <Link to="/" className="homepage-link">
        Home
      </Link>
      <p>Hello world</p>
    </div>
  );
}

export default Forcast;
