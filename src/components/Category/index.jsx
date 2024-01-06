import "./category.css";

const Category = () => {
  return (
    <div className="category">
      <div className="category-anchor" id="category" />
      <h2 className="heading-category">KATEGORI PRODUK</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 g-4">
          <div className="col card-container">
            <div className="card h-100">
              <img
                src="images/category-camera.jpeg"
                className="card-img-top img-category"
                alt="kategori kamera"
              />
              <div className="card-body">
                <h3 className="card-title">Kamera</h3>
                <p className="card-text">
                  Perwujudan teknologi canggih yang menyajikan pengalaman
                  fotografi yang revolusioner. Dengan desain elegan dan
                  ergonomis, kamera ini menghadirkan sensor gambar dan prosesor
                  yang kuat, menghasilkan gambar berkualitas tinggi dengan
                  detail halus dan warna yang hidup.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn-category">
                  Selengkapnya{" "}
                  <span className="btn-category-arrow">&raquo;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col card-container">
            <div className="card h-100">
              <img
                src="images/category-audio.jpg"
                className="card-img-top img-category"
                alt="kategori audio"
              />
              <div className="card-body">
                <h3 className="card-title">Audio</h3>
                <p className="card-text">
                  Menghadirkan kombinasi sempurna antara desain yang elegan dan
                  performa audio yang luar biasa. Mulai dari headphone yang
                  nyaman dan dilengkapi dengan teknologi noise-cancelling
                  canggih hingga sistem audio rumah yang mengisi ruangan dengan
                  kualitas suara yang memukau.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn-category">
                  Selengkapnya{" "}
                  <span className="btn-category-arrow">&raquo;</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col card-container">
            <div className="card h-100">
              <img
                src="images/category-playstation.jpeg"
                className="card-img-top  img-category"
                alt="kategori playstation"
              />
              <div className="card-body">
                <h3 className="card-title">PlayStation</h3>
                <p className="card-text">
                  Salah satu sistem hiburan interaktif paling ikonik di dunia,
                  menghadirkan pengalaman gaming yang tak tertandingi. Dengan
                  teknologi canggih, grafis yang memukau, dan koleksi game yang
                  luas, PlayStation mempersembahkan dunia yang mendalam bagi
                  para pemain.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn-category">
                  Selengkapnya{" "}
                  <span className="btn-category-arrow">&raquo;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
