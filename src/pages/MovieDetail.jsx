import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
      setLoading(false);
    };

    fetchMovieDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!movie) return <p>No movie found.</p>;

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : ""}
        alt={movie.Title}
      />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieDetail;
