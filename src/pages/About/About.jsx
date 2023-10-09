import Footer from "../../shared/Footer/Footer";
// import Hero from "../../shared/Hero/Hero";
import Navbar from "../../shared/Navbar/Navbar";
import aboutImg from "../../assets/imgs/about.png";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <div className=" max-w-[1400px] lg:mx-auto my-10 space-y-6 mx-4">
        <img src={aboutImg} alt="" className="mx-auto rounded-md mb-8" />
        <div className="space-y-3">
          <h1 className="lg:text-3xl text-xl md:text-2xl font-bold">
            Creating Unforgettable Moments: Your Premier Event Management
            Partner
          </h1>
          <p className="">
            {`   In the fast-paced world we live in, celebrating life's most precious
            moments can often become a daunting task. From weddings to birthday
            parties, anniversaries, engagement parties, retirement celebrations,
            and baby showers, these are events that should be cherished and
            remembered for a lifetime. This is where our event management
            company steps in, ensuring that your special occasions are nothing
            short of magical.`}
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-3 ">About Us</h1>
          <p>
            At Festivity Architects, we take pride in being your go-to partner
            for all your social event management needs. With years of experience
            and a passion for crafting memorable experiences, we are dedicated
            to making your dream events a reality.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-3 ">Our Philosophy</h1>
          <p>
            We understand the importance of each event in your life, and we
            believe that it should be as unique and extraordinary as you are.
            Our philosophy is centered around tailoring every detail to your
            vision. From the grandest weddings to the most intimate baby
            showers, we take care of every aspect, allowing you to relax and
            enjoy the celebration without any stress.
          </p>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-3 ">What Sets Us Apart</h1>
          <ul className="list-outside list-disc ml-8 space-y-3">
            <li>
              <span className="text-xl font-semibold">
                Personalized Service:
              </span>
              We know that every event is different, and we take the time to
              understand your specific desires and expectations. Our team of
              experienced professionals will work closely with you to ensure
              that your event reflects your personality and style.
            </li>
            <li>
              <span className="text-xl font-semibold">
                Attention to Detail:
              </span>
              {`   We believe that it's the small details that make an event truly
              special. From the selection of the perfect color scheme to the
              choice of exquisite floral arrangements, every element is
              carefully considered.`}
            </li>
            <li>
              <span className="text-xl font-semibold">Vendor Network:</span>{" "}
              Over the years, we have built strong relationships with some of
              the best vendors in the industry. This allows us to offer you
              access to top-notch services, ensuring that your event is a
              seamless and delightful experience.
            </li>
            <li>
              <span className="text-xl font-semibold">
                Stress-Free Planning:
              </span>{" "}
              We understand that event planning can be overwhelming. Our team is
              committed to taking the stress out of the process for you. We
              handle all the logistics, timelines, and troubleshooting so that
              you can simply savor the moment.
            </li>
            <li>
              <span className="text-xl font-semibold">
                Budget-Friendly Solutions:
              </span>{" "}
              We are well-versed in working with a variety of budgets. We
              provide you with cost-effective options without compromising on
              quality. Your dream event is possible, no matter the budget.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-3 ">Services We Offer:</h1>
          <ul className="list-outside list-disc ml-8 space-y-3">
            <li>
              <span className="text-xl font-semibold">Weddings:</span>
              {` Whether it's an intimate ceremony or a lavish affair, we'll make your wedding day a reflection of your love story.`}
            </li>
            <li>
              <span className="text-xl font-semibold">Birthday Parties:</span>
              {`From children's themed parties to sophisticated adult celebrations, we create birthday memories that last a lifetime.`}
            </li>
            <li>
              <span className="text-xl font-semibold">Anniversaries: </span>{" "}
              Commemorate your enduring love with an anniversary celebration
              that captures the essence of your journey together.
            </li>
            <li>
              <span className="text-xl font-semibold">Engagement Parties:</span>{" "}
              Kickstart your journey to wedded bliss with a stunning engagement
              party that sets the stage for your future.
            </li>
            <li>
              <span className="text-xl font-semibold">Retirement Parties:</span>{" "}
              {`Celebrate a lifetime of hard work and dedication with a retirement party that honors the retiree's accomplishments.`}
            </li>
            <li>
              <span className="text-xl font-semibold">Baby Showers:</span>{" "}
              {` Welcome the newest member of your family with a heartwarming and memorable baby shower.`}
            </li>
          </ul>
        </div>
        <p className="my-10 font-medium text-lg">{`Let us be your partner in creating moments that you, your family, and your friends will cherish forever. Contact us today, and let's start planning your next unforgettable event. At Festivity Architects, we don't just manage events; we create memories.`}</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
