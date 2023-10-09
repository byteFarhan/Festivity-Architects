import PropTypes from "prop-types";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Member = ({ member }) => {
  const { name, photoURL, position } = member || {};
  return (
    <div className="lg:bg-pink-100 lg:shadow-none bg-base-100 shadow-md p-10 rounded-md text-center">
      <img src={photoURL} alt="" className="rounded-full mx-auto mb-3" />
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-lg font-medium">{position}</p>
      <ul className="flex gap-2 justify-center text-center my-3">
        <li>
          <a href="#" className="  ">
            <FaFacebookF className="text-white bg-pink-600 text-3xl  rounded-full p-2" />
          </a>
        </li>

        <li>
          <a href="#" className="  ">
            <FaInstagram className="text-white bg-pink-600 text-3xl  rounded-full p-2" />
          </a>
        </li>

        <li>
          <a href="#" className="  ">
            <FaTwitter className="text-white bg-pink-600 text-3xl  rounded-full p-2" />
          </a>
        </li>

        {/* <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li> */}
      </ul>
    </div>
  );
};

Member.propTypes = {
  member: PropTypes.object.isRequired,
};
export default Member;
