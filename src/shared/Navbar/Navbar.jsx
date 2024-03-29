import { Link, NavLink } from "react-router-dom";
import defaultUserProfile from "../../assets/imgs/user.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  // const userName = user.displayName;
  // const userImg = user.photoURL;
  // console.log(userName, userImg);
  const handleLogout = () => {
    userLogout()
      .then(() => {
        swal("Logout successfull.", {
          button: false,
        });
      })
      .catch((error) => {
        swal(error.message, {
          button: false,
        });
      });
  };
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/sent-proposal">Sent proposal</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 py-2">
      <div className="navbar max-w-[1400px] mx-auto ">
        <div className="navbar-start flex-1 ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <h1 className="md:text-3xl text-xl text-pink-500 font-semibold font-playfair lg:font-bold ">
            Festivity Architects
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        {user && (
          <p className="hidden md:block font-medium font-work-sans">
            {user?.displayName}
          </p>
        )}
        <img
          src={user?.photoURL ? user?.photoURL : defaultUserProfile}
          alt="User"
          className={`h-12 w-12 rounded-full mx-5 ${
            user?.photoURL && "border-2 border-pink-500"
          } `}
          title={user?.displayName}
        />
        <div className="">
          {user ? (
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          ) : (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
