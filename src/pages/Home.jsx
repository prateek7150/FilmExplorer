import { useState, useEffect, useRef } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading , setLoading] = useState(false)
  const inputRef = useRef();

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const fetchMovies = async (query) => {
    setLoading(true)
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await res.json();
    setMovies(data.Search || []);
    setLoading(false)
  };

  useEffect(() => {
    fetchMovies("Terminator");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = inputRef.current.value.trim();
    if (!query) return;
    fetchMovies(query);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          className="searchInput"
          placeholder="Search for a movie..."
        />
        <button type="submit">Search 🔎</button>
      </form>
        {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
