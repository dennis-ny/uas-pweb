import "./about.css";

const About = () => {
  return (
    <div className="contact-form">
      <h2 className="heading-contact">TENTANG KAMI</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 order-last order-lg-first">
            <form className="form-origin">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="input-name"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="input-email"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="textarea"
                      placeholder="Tuliskan Pesan Anda"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className=" text-center">
                    <a href="#" className="btn-contact">
                      Kirim Pesan
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
            <div className="content-contact">
              <h3 className="heading-content">
                Lebih Tentang <span>SONY</span>
              </h3>
              <p className="contact-desc">
                Sony Corporation, sebuah perusahaan multinasional asal Jepang,
                telah lama menjadi salah satu pemimpin dalam beragam industri
                teknologi. Dikenal atas inovasi yang tiada henti, Sony telah
                menciptakan produk-produk ikonik seperti konsol game
                PlayStation, kamera-kamera digital canggih, televisi berkualitas
                tinggi, serta beragam perangkat elektronik lainnya.
              </p>
              <p className="contact-desc">
                Tak hanya berinovasi pada teknologi, Sony juga aktif dalam
                berbagai bidang seperti musik, film, dan hiburan. Melalui divisi
                Sony Music Entertainment dan Sony Pictures Entertainment,
                perusahaan ini telah menghadirkan karya-karya artistik yang
                memukau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
