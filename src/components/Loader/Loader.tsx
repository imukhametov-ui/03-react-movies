
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderWrapper} role="status">
      <span className={css.spinner} aria-hidden="true" />
      <span>Loading movies...</span>
    </div>
  );
}
