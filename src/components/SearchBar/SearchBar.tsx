
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (formData: FormData) => {
    const query = String(formData.get("query") ?? "").trim();

    if (!query) {
      toast.error("Please enter a movie name.");
      return;
    }

    onSubmit(query);
  };

  return (
    <form className={css.searchForm} action={handleSubmit}>
      <input
        className={css.searchInput}
        type="text"
        name="query"
        placeholder="Search movies..."
      />

      <button className={css.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}
