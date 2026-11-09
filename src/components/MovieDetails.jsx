
import { useEffect } from "react";
import "./MovieDetails.css";

function MovieDetails({ filme, onClose }) {

  // Fechar a janela através da tecla ESC
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // Limpar o evento quando o modal fechar
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="movie-details"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-title"
      >

        {/* Botão fechar */}
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="Fechar detalhes"
        >
          ✕
        </button>

        {/* Poster do filme */}
        {filme.imagemUrl ? (
          <img
            src={filme.imagemUrl}
            alt={`Poster de ${filme.titulo}`}
            className="details-image"
          />
        ) : (
          <div className="details-image details-no-image">
            🎬
          </div>
        )}

        {/* Informação do filme */}
        <div className="details-content">

          <h2 id="movie-title">
            {filme.titulo}
          </h2>

          <p className="details-info">
            {filme.genero} · {filme.ano}
          </p>

          {/* Classificação */}
          {filme.nota != null && (
            <p className="details-rating">
              ⭐ {filme.nota}/10
            </p>
          )}

          <h3>Sinopse</h3>

          <p className="details-synopsis">
            {filme.sinopse || "Não existe uma sinopse disponível para este filme."}
          </p>

        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
