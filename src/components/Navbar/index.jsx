import "./navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom shadow sticky-top"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/sony-logo.svg" alt="Sony Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Terbaru
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kategori
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kontak
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Produk
              </a>
            </li>
            <li className="nav-item">
              <a className="btn-navbar text-decoration-none" href="#">
                Masuk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
