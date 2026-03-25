const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Buscar películas por texto
export async function getMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${query}`
  );
  const data = await response.json();
  return data.results;
}

// Obtener detalle de una película por ID
export async function getMovieById(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`
  );
  const data = await response.json();
  return data;
}

// Obtener reparto de una película
export async function getMovieCredits(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=es-ES`
  );
  const data = await response.json();
  return data.cast;
}
