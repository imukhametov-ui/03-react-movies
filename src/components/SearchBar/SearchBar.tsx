import { useState, type FormEvent } from "react";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    onSubmit(trimmedQuery);
    setQuery("");
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
  className={css.searchInput}
  type="text"
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  placeholder="Search movies..."
/>
<button className={css.searchButton} type="submit">
  Search
</button>
      
    </form>
  );
}