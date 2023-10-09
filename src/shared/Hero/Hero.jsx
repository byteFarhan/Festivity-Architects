// import banner from "../../assets/imgs/banner.png";
const Hero = () => {
  //   const banner = "https://i.ibb.co/Kh9QyfY/banner.jpg";
  //   const bgStyle = {
  //     backgroundImage: `url(${banner})`,
  //     /// background: "linear-gradient(#6b7280, #6b7280)",
  //     backgroundSize: "cover",
  //     backgroundPosition: "center center",
  //   };
  return (
    <div className="hero hero-overlay min-h-[92vh] bg-[url('https://i.ibb.co/Kh9QyfY/banner.jpg'),_linear-gradient(#6b7280,_#6b7280)] bg-blend-overlay">
      {/* <div
        // style={{ backgroundImage: `url(${banner})` }}
    //   style={bgStyle}
      className="hero hero-overlay min-h-[92vh]  bg-blend-overlay"
    > */}
      <div className="bg-opacity-60"></div>
      <div className="hero-content text-center text-white font-playfair">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl lg:text-6xl font-bold">
            An experience <br /> to remember
          </h1>
          <p className="mb-5 text-xl font-medium lg:font-semibold text-white font-work-sans">
            Crafting Unforgettable Moments and Celebrations. Your Journey to
            Extraordinary Events Begins Here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
