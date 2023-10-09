import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  //   console.log(location);
  const { user, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return <div>{children}</div>;
  }
  return <Navigate state={location.pathname} to={"/login"} />;
};

PrivetRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoute;
