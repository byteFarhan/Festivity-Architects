import swal from "sweetalert";
import Footer from "../../shared/Footer/Footer";
// import Hero from "../../shared/Hero/Hero";
import Navbar from "../../shared/Navbar/Navbar";

const SentProposal = () => {
  const handleProposalRequest = (e) => {
    e.preventDefault();
    swal("Your Proposal has been submited.", {
      button: false,
    });
    e.target.reset();
  };
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <div className="flex gap-5 max-w-[1400px] mx-auto my-16 flex-col lg:flex-row justify-center px-5 md:px-0">
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-center my-5 font-bold">
            Request For Proposal
          </h1>
          <form
            onSubmit={handleProposalRequest}
            className="space-y-3 flex w-full lg:w-2/4 md:w-3/4 mx-auto  flex-col"
          >
            <input
              type="text"
              placeholder="Name(required)*"
              className=" border border-black bg-slate-100 outline-none rounded p-2  text-black "
              required
            />
            <input
              type="email"
              placeholder="Email address(required)*"
              className=" border border-black bg-slate-100 outline-none rounded p-2  text-black "
              required
            />
            <input
              type="text"
              placeholder="Phone Number(required)*"
              className=" border border-black bg-slate-100 outline-none rounded p-2  text-black "
              required
            />
            <input
              type="text"
              placeholder="Event Dates(required)*"
              className=" border border-black bg-slate-100 outline-none rounded p-2  text-black "
              required
            />
            <input
              type="text"
              placeholder="Place(required)*"
              className=" border border-black bg-slate-100 outline-none rounded p-2  text-black "
              required
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="bg-slate-100 p-3"
            ></textarea>
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn bg-pink-500 hover:bg-pink-600 text-white"
            />
          </form>
        </div>
        <div className="space-y-5 lg:flex lg:flex-col lg:justify-center">
          <div className="text-center hover:bg-black border lg:mx-0 mx-auto border-black p-10 rounded shadow-md bg-[#9ca0d8] text-white max-w-sm">
            <h1 className="text-3xl font-semibold">Contact Us</h1>
            <p>phone:</p>
            <p>01981-650478</p>
            <p>Email:</p>
            <p>festivity@architects.com</p>
          </div>
          <div className="text-center border-black lg:mx-0 mx-auto border rounded shadow-md  text-white max-w-sm">
            <div className="bg-[#9ca0d8] py-3">
              <h1 className="text-2xl font-semibold">Join our mailing list</h1>
              <h3 className="text-white font-medium text-lg">
                Never miss an update
              </h3>
            </div>
            <div className="py-6">
              <form>
                <input
                  type="email"
                  placeholder="Email adderss"
                  className="border-b border-black  px-2 py-1 text-black w-3/4 mx-auto outline-none"
                  required
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="btn-sm btn mt-3"
                  onClick={() => {
                    swal("Welcome to our family.", {
                      button: false,
                    });
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SentProposal;
