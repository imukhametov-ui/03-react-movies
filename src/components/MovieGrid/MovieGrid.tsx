import type { Movie } from "../../types/movie";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.card}>
          <button
            type="button"
            onClick={() => onSelect(movie)}
            aria-label={`View details for ${movie.title}`}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://placehold.co/500x750?text=No+Poster"
              }
              alt={movie.title}
              className={css.poster}
            />
            <h3 className={css.title}>{movie.title}</h3>
          </button>
        </li>
      ))}
    </ul>
  );
}