import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
// import Hero from "../../shared/Hero/Hero";

const ProductDetailes = () => {
  const products = useLoaderData() || [];
  //   console.log(products);

  const { id } = useParams();
  //   console.log(id);
  //   const { title, img, description, lg_description } = products.find(
  //     (product) => product.id === id
  //   );
  const { img, product_detailes } =
    products?.find((product) => product?.id === parseInt(id)) || {};
  // console.log(product);
  const { product_title, services, lg_description, finishing_description } =
    product_detailes || {};
  //   console.log(services);
  return (
    <div className="">
      <Navbar />
      {/* <Hero /> */}
      <div
        data-aos="fade-up"
        className="max-w-[1400px] mx-5 lg:mx-auto rounded-md font-work-sans  my-16 shadow-md md:font-medium"
      >
        <div className="relative">
          <img
            src={img}
            alt=""
            className="w-full rounded-t-md lg:h-[800px] mx-auto object-cover"
          />
          <div className="absolute bottom-0 right-0 w-full p-2 bg-pink-100 md:p-10">
            <Link to={"/sent-proposal"}>
              <button className="text-white bg-pink-500 border-none btn hover:bg-pink-600">
                Sent proposal
              </button>
            </Link>
          </div>
        </div>
        <div className="p-5 space-y-3 lg:p-10">
          <h2 className="text-xl font-semibold lg:text-3xl md:text-2xl">
            {product_title}
          </h2>
          <p className="">{lg_description}</p>
          <div>
            <h1 className="mb-3 text-xl font-semibold lg:text-3xl md:text-2xl">
              Our Services
            </h1>
            {services?.map((service, idx) => (
              <li key={idx} className="my-2">
                {service}
              </li>
            ))}
          </div>
          <p className="mt-5">{finishing_description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailes;
