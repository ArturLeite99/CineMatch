
import { useState } from "react";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import AddMovieForm from "./components/AddMovieForm";

import { initialMovies } from "./data/movies";

function App() {

  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Selecionar filme
  function handleSelectMovie(movie) {
    setSelectedMovie(movie);
  }

  // Fechar detalhes
  function handleCloseDetails() {
    setSelectedMovie(null);
  }

  // Adicionar filme
  function handleAddMovie(newMovie) {
    const movieToAdd = {
      id: newMovie.id,
      titulo: newMovie.title,
      genero: newMovie.genre,
      ano: Number(newMovie.year),
      nota: null,
      imagemUrl: "",
      sinopse: newMovie.description
    };

    setMovies((previousMovies) => [
      ...previousMovies,
      movieToAdd
    ]);
  }

  // Eliminar filme
  function handleDeleteMovie(movieId) {
    setMovies((previousMovies) =>
      previousMovies.filter((movie) => movie.id !== movieId)
    );

    if (selectedMovie?.id === movieId) {
      setSelectedMovie(null);
    }
  }

  return (
    <div className="app">

      {/* Cabeçalho e navegação */}
      <Header />

      <main>

        {/* Apresentação */}
        <section id="inicio" className="hero">
          <h2>Descobre o teu próximo filme favorito.</h2>

          <p>
            Explora filmes e séries, descobre novas histórias
            e partilha as tuas recomendações.
          </p>

          <a href="#catalogo" className="btn-primary">
            Explorar catálogo
          </a>
        </section>

        {/* Catálogo */}
        <section id="catalogo" className="catalogo">
          <h2>O nosso catálogo</h2>

          <MovieList
            movies={movies}
            onSelectMovie={handleSelectMovie}
            onDeleteMovie={handleDeleteMovie}
          />
        </section>

        {/* Adicionar filmes */}
        <section id="adicionar" className="adicionar">
          <h2>Adicionar um filme</h2>

          <p>Partilha uma nova sugestão com a comunidade.</p>

          <AddMovieForm
            onAddMovie={handleAddMovie}
          />
        </section>

      </main>

      {/* Janela de detalhes */}
      {selectedMovie && (
        <MovieDetails
          filme={selectedMovie}
          onClose={handleCloseDetails}
        />
      )}

    </div>
  );
}

export default App;
