
import MovieCard from "./MovieCard";
import "./MovieCard.css";

export default function MovieList({
  movies,
  onSelectMovie,
  onDeleteMovie
}) {
  if (!movies || movies.length === 0) {
    return (
      <div className="movie-list-empty">
        <p>Nenhum filme ou série encontrado no catálogo.</p>
      </div>
    );
  }

  return (
    <section className="movie-catalog-container">

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onSelectMovie={onSelectMovie}
            onDeleteMovie={onDeleteMovie}
          />
        ))}
      </div>
    </section>
  );
}
