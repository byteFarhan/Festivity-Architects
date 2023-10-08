import { TfiFaceSad } from "react-icons/tfi";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center text-green-800 flex-col h-screen space-y-3">
      <TfiFaceSad className="md:text-9xl text-7xl font-bold" />
      <h1 className="text-5xl md:text-7xl">404</h1>
      <h1 className="text-3xl font-semibold">Page not found!</h1>
      <p className="lg:w-1/4 md:w-2/4 text-center font-medium px-3 md:px-0">
        {`The page you're looking for doesn't
        exist. You can return to the homepage or try searching for what you
        need. If you think this is an error, please contact us. Thank you!`}
      </p>
      <Link to={"/"}>
        <button className="btn bg-pink-500 hover:bg-pink-600 text-white ">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
