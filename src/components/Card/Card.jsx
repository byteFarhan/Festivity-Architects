import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const { title, img, description, id } = data || {};
  return (
    <>
      <div className="flex flex-col text-gray-700 bg-pink-100 rounded-md font-work-sans lg:bg-white lg:shadow-md bg-clip-border">
        <img
          src={img}
          alt="img-blur-shadow"
          className="object-cover h-[385px] w-full rounded-t-md "
        />

        <div className="flex-grow p-6">
          {/* <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"> */}
          <h5 className="mb-2 text-xl font-semibold ">{title}</h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/detailes/${id}`}>
            <button
              className="select-none rounded-lg bg-[#ec4899] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Card;
