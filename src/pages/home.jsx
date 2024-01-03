import Navbar from "../components/Navbar";
import HeaderContent from "../components/HeaderContent";
import Latest from "../components/Latest";
import Category from "../components/Category";
import About from "../components/About";
import Footer from "../components/Footer";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeaderContent />
      <Latest />
      <Category />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
