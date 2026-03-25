import { Link } from "react-router-dom";

function MovieCard({ movie, onAddFavorito }) {
  return (
    <div className="movie-card">
      <Link to={`/detalle/${movie.id}`}>
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        )}
      </Link>
      <h3>
        <Link to={`/detalle/${movie.id}`}>{movie.title}</Link>
      </h3>
      {onAddFavorito && (
        <button onClick={() => onAddFavorito(movie)}>
          Agregar a Favoritos
        </button>
      )}
    </div>
  );
}

export default MovieCard;
