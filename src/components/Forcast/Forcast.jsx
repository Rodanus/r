import React, { useEffect } from "react";
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
  return <div>Hello world</div>;
}

export default Forcast;
