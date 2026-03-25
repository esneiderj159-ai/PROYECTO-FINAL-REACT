import { useState } from "react";
import { getMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

function Home() {
  const [movies, setMovies] = useState([]);
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  const handleSearch = async (query) => {
    const data = await getMovies(query);
    setMovies(data);
  };

  const addFavorito = (movie) => {
    if (!favoritos.find((f) => f.id === movie.id)) {
      setFavoritos([...favoritos, movie]);
    }
  };

  return (
    <div>
      <h1>Catálogo de Películas</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onAddFavorito={addFavorito} />
        ))}
      </div>
    </div>
  );
}

export default Home;
