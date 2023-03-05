import React from "react";

import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  let switchLogin = true;

  const getData = localStorage.getItem("registerData") ?? "[]";
  const userArray = JSON.parse(getData);

  const userLogin = JSON.parse(localStorage.getItem("loginData"));

  if (userLogin !== undefined) {
    switchLogin = false;
  } else {
    switchLogin = true;
  }

  const nameLogin = () => {
    if (userArray.length !== undefined) {
      for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].email === userLogin.email) {
          return userArray[i].name;
        }
      }
    }
  };

  return (
    <>
      <div className="nav">
        <div className="homeshop">
          <button className="btnhome">
            <a href="/" className="home">
              Home
            </a>
          </button>
          <button className="btnshop">
            <a href="/shop" className="shop">
              Shop
            </a>
          </button>
        </div>
        <div>
          <div href="/" className="boutique">
            BOUTIQUE
          </div>
        </div>
        <div className="cartlogin">
          <div className="cart">
            <a href="/cart" className="cartcontent">
              <FaShoppingCart />
              Cart
            </a>
          </div>

          {switchLogin && (
            <div className="login">
              <a className="logincontent" alt="" href="/login">
                <FaUserAlt />
                Login
              </a>
            </div>
          )}
          {!switchLogin && (
            <div className="login">
              <a
                onClick={() => {
                  localStorage.removeItem("loginData");
                }}
                className="logincontent"
                alt=""
                href="/login"
              >
                <FaUserAlt />
                {nameLogin()} (Log out)
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
