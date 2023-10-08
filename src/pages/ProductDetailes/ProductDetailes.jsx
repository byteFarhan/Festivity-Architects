import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Hero from "../../shared/Hero/Hero";

const ProductDetailes = () => {
  const products = useLoaderData();
  //   console.log(products);
  const { id } = useParams();
  //   console.log(id);
  //   const { title, img, description, lg_description } = products.find(
  //     (product) => product.id === id
  //   );
  const { title, img, description, lg_description } = products.find(
    (product) => product.id === parseInt(id)
  );
  // console.log(product);
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <div className="h-[60vh]"></div> */}
      <Footer />
    </div>
  );
};

export default ProductDetailes;
