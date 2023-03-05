import React, { Fragment } from "react";

import Navbar from "./Nav/Navbar";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Categories from "./Categories/Categories";

import "./Homepage.css";
import Toptrending from "./Toptrending/Toptrending";

const Homepage = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <div className="line">
        <div className="line1">CAREFULLY CREATED COLLECTIONS</div>
        <div className="line2">BROWSE OUR CATEGORIES</div>
      </div>
      <Categories />
      <div className="line">
        <div className="line1">MADE THE HARD WAY</div>
        <div className="line2">TOP TRENDING PRODUCT</div>
      </div>
      <Toptrending />

      <div className="shipping">
        <div className="shippingline1">
          <div className="shippingline1div1">FREE SHIPPING</div>
          <div className="shippingline1div2">Free shipping worldwide</div>
        </div>
        <div className="shippingline1">
          <div className="shippingline1div1">24x7 SERVICE</div>
          <div className="shippingline1div2">Free shipping worldwide</div>
        </div>
        <div className="shippingline1">
          <div className="shippingline1div1">FESTIVAL OFFER</div>
          <div className="shippingline1div2">Free shipping worldwide</div>
        </div>
      </div>
      <div className="subfooter">
        <div className="friends">
          <div className="friends1">LET'S BE FRIENDS!</div>
          <div className="friends2">
            Nisi nisi tempor consequat iaboris nisi
          </div>
        </div>
        <div className="emailSub">
          <input placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default Homepage;
