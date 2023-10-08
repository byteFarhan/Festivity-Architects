import Cards from "../../components/Cards/Cards";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero min-h-[92vh] bg-[url('https://i.ibb.co/Kh9QyfY/banner.jpg'),_linear-gradient(#6b7280,_#6b7280)] bg-blend-overlay">
        <div className="bg-opacity-60"></div>
        <div className="hero-content text-center text-white font-playfair">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              An experience to remember
            </h1>
            <p className="mb-5 text-xl font-semibold text-white font-work-sans">
              Crafting Unforgettable Moments and Celebrations. Your Journey to
              Extraordinary Events Begins Here.
            </p>
            {/*  <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <Cards />

      <Footer />
    </>
  );
};

export default Home;
