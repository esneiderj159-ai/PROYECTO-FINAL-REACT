import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import MovieCard from "../components/MovieCard";

function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);

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
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
