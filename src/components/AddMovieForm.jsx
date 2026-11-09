
import { useState } from "react";
import "./AddMovieForm.css";

const genreOptions = [
  "Ação",
  "Aventura",
  "Animação",
  "Comédia",
  "Drama",
  "Fantasia",
  "Ficção científica",
  "Terror",
  "Romance",
  "Suspense",
  "Mistério",
  "Documentário"
];

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  // Selecionar até 3 géneros
  function handleGenreChange(genre, checked) {
    if (checked) {
      setGenres((previousGenres) => {
        if (previousGenres.length >= 3) {
          return previousGenres;
        }

        return [...previousGenres, genre];
      });
    } else {
      setGenres((previousGenres) =>
        previousGenres.filter((item) => item !== genre)
      );
    }
  }

  // Adicionar filme
  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || genres.length === 0 || !year) {
      return;
    }

    onAddMovie({
      id: Date.now(),
      title: title.trim(),
      genre: genres.join(" · "),
      year,
      description: description.trim()
    });

    // Limpar formulário
    setTitle("");
    setGenres([]);
    setYear("");
    setDescription("");
  }

  return (
    <form className="movie-form panel" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="eyebrow">NOVA ENTRADA</p>
        <h2>Adicionar filme</h2>
        <p>
          Preenche os dados para guardar um filme na tua coleção.
        </p>
      </div>

      {/* TÍTULO */}
      <label htmlFor="movie-title">
        Título <span>*</span>
      </label>

      <input
        id="movie-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Ex.: Interestelar"
        required
      />

      {/* GÉNEROS */}
      <div className="genre-selection">
        <div className="genre-label">
          <label>Género <span>*</span></label>

          <span className="genre-counter">
            {genres.length}/3 selecionados
          </span>
        </div>

        <details className="genre-dropdown">
          <summary>
            <span>
              {genres.length > 0
                ? genres.join(" · ")
                : "Selecionar géneros"}
            </span>

            <span className="genre-arrow">⌄</span>
          </summary>

          <div className="genre-dropdown-options">
            {genreOptions.map((genre) => (
              <label
                key={genre}
                className={`genre-option ${
                  genres.includes(genre) ? "selected" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={genres.includes(genre)}
                  disabled={
                    !genres.includes(genre) && genres.length >= 3
                  }
                  onChange={(event) =>
                    handleGenreChange(genre, event.target.checked)
                  }
                />

                {genre}
              </label>
            ))}
          </div>
        </details>

        <small className="genre-help">
          Podes selecionar entre 1 e 3 géneros.
        </small>
      </div>

      {/* ANO */}
      <label htmlFor="movie-year">
        Ano <span>*</span>
      </label>

      <input
        id="movie-year"
        type="number"
        min="1888"
        max="2100"
        value={year}
        onChange={(event) => setYear(event.target.value)}
        placeholder="Ex.: 2014"
        required
      />

      {/* DESCRIÇÃO */}
      <label htmlFor="movie-description">
        Descrição
      </label>

      <textarea
        id="movie-description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Uma pequena descrição do filme..."
        rows="4"
      />

      {/* BOTÃO */}
      <button className="submit-button" type="submit">
        + Adicionar filme
      </button>

      <small className="required-note">
        * Campos obrigatórios
      </small>
    </form>
  );
}

export default AddMovieForm;
