import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getMovieCredits } from "../services/api";

function Detalle() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };
    const fetchCredits = async () => {
      const credits = await getMovieCredits(id);
      setCast(credits.slice(0, 6)); // primeros 6 actores
    };
    fetchMovie();
    fetchCredits();
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
          <p><strong>Géneros:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
          <p><strong>Descripción:</strong> {movie.overview}</p>

          <h3>Reparto principal:</h3>
          <ul>
            {cast.map(actor => (
              <li key={actor.cast_id}>
                {actor.name} como {actor.character}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detalle;
