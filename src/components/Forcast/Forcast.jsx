import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Forcast.css";

const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your key.
function Forcast() {
  const { cityName } = useParams();
  const [cityForecast, setCityForecast] = useState({
    cityName: "",
    temp: 0,
    icon: ""
  });
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const location = useLocation();
  const { backgroundLargeImage } = location.state;

  const getWeatherinfo = () => {
    const storedCityForecaste = localStorage.getItem(`${cityName}ForeCaste`);
    if (!storedCityForecaste) {
      const weatherData = fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
      )
        .then(res => res.json())
        .then(res => {
          setCityForecast({
            cityName: res.location.name,
            temp: res.current.temp_c,
            icon: res.current.condition.icon
          });
          return res;
        })
        .then(res =>
          localStorage.setItem(
            `${cityName}ForeCaste`,
            JSON.stringify({
              cityName: res.location.name,
              temp: res.current.temp_c,
              icon: res.current.condition.icon
            })
          )
        )
        .then(() => setIsContentLoaded(true));
    } else if (storedCityForecaste) {
      setCityForecast(JSON.parse(storedCityForecaste));
      setIsContentLoaded(true);
    }
  };

  useEffect(() => {
    getWeatherinfo();
  }, []);
  return (
    <div
      className="forecast-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.4)), url(${backgroundLargeImage})`
      }}
    >
      <div className={isContentLoaded ? "loading hide-loading" : "loading"}>
        Loading...
      </div>
      <Link to="/" className="homepage-link">
        {"<"} Back To Home
      </Link>
      <div className="forecast-details-container">
        <h2 className="forecast-city-name">{cityForecast.cityName}</h2>
        <div className="forecast-details">
          <img
            src={cityForecast.icon}
            alt="weather status icon"
            className="weather-icon"
          ></img>
          <span className="temp">{cityForecast.temp}??</span>
          <span className="celsius">C</span>
        </div>
      </div>
    </div>
  );
}

export default Forcast;
