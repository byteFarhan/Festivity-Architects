import { SiMinutemailer } from "react-icons/si";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a] text-white py-20">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-0">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">GET IN TOUCH </h2>
          <p className="text-lg">{`We'd love to hear from you`}</p>
          <p className="font-medium">504.267.0662</p>
        </div>
        <div className="mt-10">
          <div className="flex justify-around flex-col md:flex-row gap-5 md:gap-0">
            <div className="flex flex-col items-center justify-center gap-2">
              <SiMinutemailer className="text-2xl lg:text-4xl" />
              <p className="font-medium">festivity@architects.com</p>
            </div>
            <Link to={"/proposal"}>
              <div className="flex md:-ml-10 flex-col items-center justify-center gap-2">
                <AiOutlineLaptop className="text-2xl lg:text-4xl" />
                <p className="font-medium">Request a proposal</p>
              </div>
            </Link>

            <div className="flex flex-col items-center justify-center gap-2">
              <BsFillPhoneVibrateFill className="text-2xl lg:text-4xl" />
              <p className="font-medium">01981-650478</p>
            </div>
          </div>

          <ul className="flex gap-3 md:ml-4 mt-10 justify-center">
            <li className="bg-pink-500 text-white text-2xl p-3 font-semibold rounded-full">
              <Link to={"/facebook.com"}>
                <FaFacebookF />
              </Link>
            </li>
            <li className="bg-pink-500 text-white text-2xl p-3 font-semibold rounded-full">
              <Link to={"/instagram.com"}>
                <FaInstagram />
              </Link>
            </li>
            <li className="bg-pink-500 text-white text-2xl p-3 font-semibold rounded-full">
              <Link to={"/linkedin.com"}>
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="bg-pink-500 text-white text-2xl p-3 font-semibold rounded-full">
              <Link to={"/twitter.com"}>
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
