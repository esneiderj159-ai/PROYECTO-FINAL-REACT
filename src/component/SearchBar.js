import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("El campo no puede estar vacío");
      return;
    }
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar película..." />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
