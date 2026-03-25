import React, { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <div>
      <h1>Mis Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>No tienes películas favoritas aún.</p>
      ) : (
        <ul>
          {favoritos.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;
