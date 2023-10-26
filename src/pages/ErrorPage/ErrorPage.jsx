import { TfiFaceSad } from "react-icons/tfi";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3 text-green-800">
      <TfiFaceSad className="font-bold md:text-9xl text-7xl" />
      <h1 className="text-5xl md:text-7xl">404</h1>
      <h1 className="text-3xl font-semibold">Page not found!</h1>
      <p className="px-3 font-medium text-center lg:w-1/4 md:w-2/4 md:px-0">
        {`The page you're looking for doesn't
        exist. You can return to the homepage or try searching for what you
        need. If you think this is an error, please contact us. Thank you!`}
      </p>
      <Link to={"/"}>
        <button className="text-white bg-pink-500 btn hover:bg-pink-600 ">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
