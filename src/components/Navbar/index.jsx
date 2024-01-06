import "./navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom shadow sticky-top"
      data-bs-theme="dark"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="images/sony-logo.svg" alt="Sony Logo" className="logo" />
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
              <Link to={"/"} className="nav-link" onClick={scrollToTop}>
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#latest">
                Terbaru
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#category">
                Kategori
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#contact">
                Kontak
              </HashLink>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link" onClick={scrollToTop}>
                Produk
              </Link>
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
