import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

function Favoritos() {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  const removeFavorito = (id) => {
    setFavoritos(favoritos.filter((f) => f.id !== id));
  };

  return (
    <div>
      <h1>Mis Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>No tienes películas favoritas aún.</p>
      ) : (
        favoritos.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <button onClick={() => removeFavorito(movie.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Favoritos;
