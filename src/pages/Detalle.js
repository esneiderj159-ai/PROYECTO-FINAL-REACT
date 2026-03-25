import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";

function Detalle() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchData();
  }, [id]);

  if (!movie) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Fecha de estreno: {movie.release_date}</p>
    </div>
  );
}

export default Detalle;
