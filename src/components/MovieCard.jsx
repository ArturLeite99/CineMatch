
import "./MovieCard.css";

export default function MovieCard({
  movie,
  onSelectMovie,
  onDeleteMovie
}) {
  return (
    <article
      className="movie-card"
      onClick={() => onSelectMovie(movie)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelectMovie(movie);
        }
      }}
      aria-label={`Ver detalhes de ${movie.titulo}`}
    >

      {/* Cartaz */}
      <div className="movie-card-poster">
        {movie.imagemUrl ? (
          <img
            src={movie.imagemUrl}
            alt={`Cartaz de ${movie.titulo}`}
          />
        ) : (
          <span>🎬</span>
        )}

        {movie.nota != null && (
          <span className="movie-badge">
            ★ {movie.nota}
          </span>
        )}
      </div>

      {/* Informação do filme */}
      <div className="movie-card-content">

        <div className="movie-card-meta">
          <span className="movie-genre">{movie.genero}</span>
          <span className="movie-year">{movie.ano}</span>
        </div>

        <h3 className="movie-card-title">
          {movie.titulo}
        </h3>

        <p className="movie-card-hint">
          Ver detalhes do filme →
        </p>

        {/* Botão eliminar */}
        <button
          type="button"
          className="delete-button"
          onClick={(event) => {
            event.stopPropagation();
            onDeleteMovie(movie.id);
          }}
          onKeyDown={(event) => event.stopPropagation()}
        >
          Eliminar
        </button>

      </div>
    </article>
  );
}
