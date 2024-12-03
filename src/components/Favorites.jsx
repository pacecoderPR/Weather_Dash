import React from "react";
import "./../styles/Favorites.css";

const Favorites = ({ favorites, onRemoveFavorite, onSearch }) => {
  return (
    <div className="favorites">
      <h3>Favorites</h3>
      <ul>
        {favorites.map((city) => (
          <li key={city.id}>
            <p onClick={() => onSearch(city.name)}>{city.name}</p>
            <button onClick={() => onRemoveFavorite(city.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
