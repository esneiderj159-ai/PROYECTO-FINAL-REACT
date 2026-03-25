import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

function Favoritos() {
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  const removeFavorito = (id) => {
    setFavoritos(favoritos.filter((movie) => movie.id !== id));
  };

  return (
    <div>
      <h1>Mis Favoritos</h1>
      {favoritos.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No tienes películas en favoritos todavía.
        </p>
      ) : (
        <div className="movies-grid">
          {favoritos.map((movie) => (
            <div key={movie.id} className="movie-card">
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
              <h3>{movie.title}</h3>
              <button onClick={() => removeFavorito(movie.id)}>
                Eliminar de Favoritos
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
