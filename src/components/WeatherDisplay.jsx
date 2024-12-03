import React from "react";
import "./../styles/WeatherDisplay.css";

const WeatherDisplay = ({ currentWeather, forecast, unit, onAddFavorite }) => {
  const unitSymbol = unit === "metric" ? "°C" : "°F";

  return (
    <div className="weather-display">
      <div className="current-weather">
        <h2>{currentWeather.name}</h2>
        <p>
          {currentWeather.main.temp} {unitSymbol}
        </p>
        <p>{currentWeather.weather[0].description}</p>
        <button onClick={() => onAddFavorite(currentWeather)}>
          Add to Favorites
        </button>
      </div>
      <div className="forecast">
        <h3>5-Day Forecast</h3>
        <ul>
          {forecast.slice(0, 5).map((day, index) => (
            <li key={index}>
              <p>{new Date(day.dt_txt).toDateString()}</p>
              <p>
                {day.main.temp} {unitSymbol}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherDisplay;
