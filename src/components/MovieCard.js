import React from "react";

function MovieCard({ movie, onAddFavorito }) {
  return (
    <div className="movie-card">
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h3>{movie.title}</h3>
      {onAddFavorito && (
        <button onClick={() => onAddFavorito(movie)}>
          Agregar a Favoritos
        </button>
      )}
    </div>
  );
}

export default MovieCard;
