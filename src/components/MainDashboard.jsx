import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import Favorites from "./Favorites";
import { getCurrentWeather, getForecast } from "../api/weatherApi";
import {
  fetchFavorites,
  addFavorite,
  removeFavorite,
} from "../api/jsonServerApi";

const MainDashboard = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState("metric"); // Default unit is Celsius
  const [error, setError] = useState("");
  const [lastCity, setLastCity] = useState(localStorage.getItem("lastCity") || "");

  // Fetch favorites from the JSON server
  useEffect(() => {
    fetchFavorites().then((res) => setFavorites(res.data));
  }, []);

  // Fetch weather data when unit or lastCity changes
  useEffect(() => {
    if (lastCity) {
      handleSearch(lastCity);
    }
  }, [unit, lastCity]); // Re-fetch data when unit or city changes

  const handleSearch = async (city) => {
    try {
      // Fetch current weather
      const weatherResponse = await getCurrentWeather(city, unit);
      setCurrentWeather(weatherResponse.data);

      // Fetch forecast data
      const forecastResponse = await getForecast(city, unit);
      setForecast(forecastResponse.data.list);

      // Store last searched city in localStorage
      localStorage.setItem("lastCity", city);
      setLastCity(city);

      // Clear any previous error
      setError("");
    } catch (error) {
      // Handle errors (e.g., city not found)
      console.error("Error fetching weather data:", error);
      setError("City not found or unable to fetch weather data.");
    }
  };

  const handleAddFavorite = async (city) => {
    if (!favorites.some((fav) => fav.name === city.name)) {
      const newFav = await addFavorite(city);
      setFavorites([...favorites, newFav.data]);
    }
  };

  const handleRemoveFavorite = async (id) => {
    await removeFavorite(id);
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  // Convert temperature based on the unit
  const convertTemperature = (temp) => {
    if (unit === "imperial") {
      return (temp * 9) / 5 + 32; // Convert Celsius to Fahrenheit
    }
    return temp; // Return as is for metric (Celsius)
  };

  const convertForecast = (forecastData) => {
    return forecastData.map((item) => ({
      ...item,
      main: {
        ...item.main,
        temp: convertTemperature(item.main.temp),
      },
    }));
  };

  const convertedForecast = convertForecast(forecast);

  return (
    <div className="main-dashboard">
      <header>
        <h1>Weather Dashboard</h1>
        <button onClick={toggleUnit}>
          Toggle to {unit === "metric" ? "Fahrenheit" : "Celsius"}
        </button>
      </header>

      <SearchBar onSearch={handleSearch} />

      {/* Error handling */}
      {error && <p className="error">{error}</p>}

      {/* Weather Display */}
      {currentWeather && (
        <WeatherDisplay
          currentWeather={{
            ...currentWeather,
            main: {
              ...currentWeather.main,
              temp: convertTemperature(currentWeather.main.temp),
            },
          }}
          forecast={convertedForecast}
          unit={unit}
          onAddFavorite={handleAddFavorite}
        />
      )}

      {/* Favorites Section */}
      <Favorites
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default MainDashboard;
