
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import css from "./App.module.css";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string): Promise<void> => {
    setIsLoading(true);
    setError("");
    setMovies([]);
    setSelectedMovie(null);
    setHasSearched(true);

    try {
      const response = await fetchMovies(query);
      setMovies(response.results);
      console.log("Found movies:", response.results);
    } catch (error) {
      console.error("Movie search failed:", error);
      setError("Failed to load movies. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.app}>
      <h1>Movie Search</h1>
      <p>Search for your favorite movies</p>

      <SearchBar onSubmit={handleSearch} />

      {isLoading && <Loader />}
{error && <ErrorMessage message={error} />}

      {hasSearched && !isLoading && !error && movies.length === 0 && (
  <p>No movies found.</p>
)}

{!isLoading && !error && movies.length > 0 && (
  <MovieGrid movies={movies} onSelect={setSelectedMovie} />
)}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
