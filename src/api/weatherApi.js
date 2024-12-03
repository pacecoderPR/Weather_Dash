import axios from "axios";

const API_KEY = "24732e83c4171f0ce867e3a7f6a50134";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = (city, unit = "metric") =>
  axios.get(`${BASE_URL}/weather`, {
    params: { q: city, units: unit, appid: API_KEY },
  });

export const getForecast = (city, unit = "metric") =>
  axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, units: unit, appid: API_KEY },
  });
