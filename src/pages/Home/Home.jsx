import Cards from "../../components/Cards/Cards";
import Footer from "../../shared/Footer/Footer";
import Hero from "../../shared/Hero/Hero";
import Navbar from "../../shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
