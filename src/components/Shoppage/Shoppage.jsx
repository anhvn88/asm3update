import Navbar from "../Homepage/Nav/Navbar";
import Banner from "../Homepage/Banner/Banner";
import Categories from "./components/Categories";

import Footer from "../Homepage/Footer/Footer";

// import { useSelector } from "react-redux";

const Shoppage = () => {
  // const { product } = useSelector((store) => store.product);
  // console.log({ product });

  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <Footer />
    </>
  );
};

export default Shoppage;
