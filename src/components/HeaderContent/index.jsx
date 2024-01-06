import "./headerContent.css";

const HeaderContent = () => {
  return (
    <div className="header w-100">
      <div className="container-fluid gx-0">
        <div className="container">
          <div className="content-header ">
            <div className="row header-container d-flex justify-content-between align-items-center w-100">
              <div className="col-lg-7 col-md-5">
                <div className="img-container d-flex justify-content-center align-items-center">
                  <img
                    src="images/header-sony-a9-mark-ii.png"
                    alt="Sony a9 mark ii"
                    className="img-header w-md-100 p-3 p-md-1 p-lg-5"
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-7">
                <div className="desc-container">
                  <h1 className="header-title">
                    Ukuran Ringkas, <span>Resolusi Ekstrem</span>
                  </h1>
                  <p className="header-desc">
                    Resolusi tak tertandingi dalam bodi ringan serta ringkas &
                    unit pemrosesan AI untuk pengenalan subjek tingkat lanjut
                  </p>
                  <div className="header-btn">
                    <a href="#" className="header-link">
                      Beli sekarang
                    </a>
                    <a href="#" className="header-link btn-2">
                      Jelajahi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
