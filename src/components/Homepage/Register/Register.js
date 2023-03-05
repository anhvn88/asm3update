import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import banner1 from "../image/banner1.jpg";

import "./Register.css";

const Register = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [phone, setPhone] = useState([]);
  const [registerData, setRegisterData] = useState([]);

  const navigate = useNavigate();

  //set LocalStorage
  const setData = (user) => {
    const getData = localStorage.getItem("registerData") ?? "[]";
    const userArray = JSON.parse(getData);
    let unique = false;
    if (userArray !== []) {
      for (let i = 0; i < userArray.length; i++) {
        if (userArray[i].email === email) {
          unique = true;
        } else {
          unique = false;
        }
      }
    } else {
      userArray.push({ name, email, phone, password });
    }

    if (unique === true) {
      alert("Your email already exist!");
    } else {
      userArray.push({ name, email, phone, password });
    }

    console.log({ unique });
    console.log({ userArray });
    localStorage.setItem("registerData", JSON.stringify(userArray));
  };
  //Get LocalStorage

  console.log({ registerData });

  const checkInfo = () => {
    if (name.length === 0) {
      alert("Plsease input name!");
    } else if (email.length === 0) {
      alert("Please input email!");
    } else if (password.length < 8) {
      alert("Please input password (more 8 words)!");
    } else if (phone.length === 0) {
      alert("Please input phone!");
    } else {
      setData({ name, email, phone, password });
    }
  };

  return (
    <>
      <div className="register">
        <img src={banner1} alt="" />
        <form className="registerForm">
          <h1>Sign Up</h1>
          <div className="registerName">
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              type="text"
            />
          </div>
          <div className="registerEmail">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
          </div>
          <div className="registerPassword">
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="text"
            />
          </div>
          <div className="registerPhone">
            <input
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              type="number"
            />
          </div>
          <div className="registerButton">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                checkInfo();
                navigate("/login");
                setRegisterData({ name, email, phone, password });
                // setData();
              }}
            >
              SIGN UP
            </button>
          </div>
          <div className="loginUp">
            Login? <a href="/login">Click</a>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
