import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="py-6 lg:bg-[#F3F3F3]">
        <div className="max-w-[1400px] mx-auto">
          <Navbar></Navbar>
        </div>

        <div className="min-h-[87vh] hero ">
          <div className=" w-full max-w-[500px] md:px-6 card rounded lg:bg-base-100 bg-[#F3F3F3]">
            <h3 className="text-[#403F3F] text-3xl font-semibold text-center pt-10">
              Login your account
            </h3>
            <hr className="w-5/6 mx-auto mt-10" />
            <form onSubmit={handleLogin} className="card-body">
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input rounded input-bordered w-full lg:bg-[#F3F3F3]"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-4 right-3"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
              </div>
              {success && <p className="text-sm text-gray-700">{success}</p>}
              {error && <p className="text-sm text-red-700">{error}</p>}
              <div className="flex justify-between w-full gap-24 mt-2">
                <div className="flex gap-2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="RememberMe">Remember me</label>
                </div>
                <p
                  onClick={handleResetPassword}
                  className="text-blue-600 transition-transform delay-1000 hover:underline"
                >
                  Forget password?
                </p>
              </div>

              <div className="mt-2 form-control">
                <button className="text-white btn bg-[#403F3F] hover:bg-[#403F4F]">
                  Login
                </button>
              </div>
              <p className="my-3 text-center">
                {`Don't have any account? `}
                <Link
                  to={"/register"}
                  className="text-blue-600 hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
