import { Link } from "react-router-dom";

function MovieCard({ movie, onAddFavorito }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <Link to={`/detalle/${movie.id}`}>Ver detalles</Link>
      <button onClick={() => onAddFavorito(movie)}>Agregar a favoritos</button>
    </div>
  );
}

export default MovieCard;
