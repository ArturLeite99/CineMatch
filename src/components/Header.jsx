function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">🎬</span>
        <h1>Cine<span>Match</span></h1>
      </div>

      <nav className="navbar">
        <a href="#inicio">Início</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#adicionar">Adicionar Filme</a>
      </nav>
    </header>
  );
}

export default Header;