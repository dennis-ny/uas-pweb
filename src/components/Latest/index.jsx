import "./latest.css";

const Latest = () => {
  return (
    <div className="container">
      <div className="latest-container">
        <div className="latest">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-latest">
                <h2 className="heading-latest">PRODUK TERBARU</h2>
                <p className="desc-latest">
                  Seri 1000X mengubah total pengalaman mendengarkan bebas
                  distraksi. Nikmati noise cancelling terbaik dan kualitas suara
                  tak tertandingi yang memungkinkan Anda mendengar setiap detail
                  musik artis favorit Anda.
                </p>
                <p className="desc-latest">
                  Kami menghadirkan pengalaman dan emosi yang autentik untuk
                  penggemar dengan memprioritaskan visi sang artis.
                </p>
                <a href="#" className="link-latest">
                  Selengkapnya <span>&raquo;</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 image-latest-container">
              <img
                src="/sony-1000x.jpg"
                alt="sony-1000x image"
                className="image-latest"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
