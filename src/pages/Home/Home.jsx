import { useLoaderData } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Footer from "../../shared/Footer/Footer";
import Hero from "../../shared/Hero/Hero";
import Navbar from "../../shared/Navbar/Navbar";
import Member from "../../components/Member/Member";

const Home = () => {
  const team = useLoaderData();
  //   console.log(team);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-5 my-10 lg:my-16 md:px-0 text-center space-y-3  font-work-sans w-full md:w-3/4 lg:w-2/5 mx-auto">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold md:font-semibold">{`It's who we are. It's in our blood.`}</h1>
        <p className=" text-neutral-700 ">
          See New Orleans through the eyes of a native New Orleanian. We are a
          creative team of locals offering authentic experiences revolving
          around what is fresh and unique in New Orleans. With decades of
          knowledge about New Orleans and 20+ years of experience in Destination
          Management,{" "}
          <span className="font-medium md:text-lg">FESTIVITY ARCHITECTS</span>{" "}
          prides itself on successfully creating memorable events that your
          attendees will treasure. We listen, and we deliver.
        </p>
      </div>
      <Cards />
      <div className="font-work-sans my-10 lg:my-16 lg:max-w-[1400px] mx-auto md:max-w-[700px] px-5 md:px-0">
        <h1 className="text-3xl font-semibold mb-8">Meet out team</h1>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {team?.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
