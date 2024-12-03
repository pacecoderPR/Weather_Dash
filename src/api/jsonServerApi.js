import axios from "axios";

const BASE_URL = "http://localhost:3001/favorites";

export const fetchFavorites = () => axios.get(BASE_URL);
export const addFavorite = (city) => axios.post(BASE_URL, city);
export const removeFavorite = (id) => axios.delete(`${BASE_URL}/${id}`);
