import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />

      <main>
        <section id="inicio" className="hero">
          <h2>Encontra o teu próximo filme favorito.</h2>
          <p>
            Descobre filmes e séries, explora recomendações
            e partilha os teus favoritos.
          </p>

          <a href="#catalogo" className="btn-primary">
            Explorar catálogo
          </a>
        </section>

        <section id="catalogo" className="catalogo">
          <h2>Catálogo</h2>
          <p>Em breve, os teus filmes favoritos estarão aqui.</p>
        </section>

        <section id="adicionar" className="adicionar">
          <h2>Adicionar um filme</h2>
          <p>Partilha uma nova sugestão com a comunidade.</p>
        </section>
      </main>
    </>
  );
}

export default App;

