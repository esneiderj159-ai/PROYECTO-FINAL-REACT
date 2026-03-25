import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/api";

function Detalle() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando...</p>;
  }

  return (
    <div className="detalle-container">
      <h1>{movie.title}</h1>
      <div className="detalle-content">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <div className="detalle-info">
          <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Descripción:</strong> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Detalle;
