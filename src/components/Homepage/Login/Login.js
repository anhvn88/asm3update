import { useState } from "react";

import { useNavigate } from "react-router-dom";

import banner1 from "../image/banner1.jpg";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [loginData, setLoginData] = useState([]);
  const navigate = useNavigate();
  const getData = localStorage.getItem("registerData") ?? "[]";
  const userArray = JSON.parse(getData);

  const userLogin = JSON.parse(localStorage.getItem("loginData"));
  const setLogin = () => {
    localStorage.setItem("loginData", JSON.stringify({ email, password }));
  };
  const validate = () => {
    const getData = localStorage.getItem("registerData") ?? "[]";
    const userArray = JSON.parse(getData);
    let checkLogin = false;
    if (email.length === 0) {
      alert("Please input email!");
    } else if (password.length === 0) {
      alert("Please input password!");
    } else if (email.length > 0 && password.length > 0) {
      for (let i = 0; i < userArray.length; i++) {
        if (
          userArray[i].email === email &&
          userArray[i].password === password
        ) {
          checkLogin = true;
          break;
        } else {
          checkLogin = false;
        }
      }
    }
    if (checkLogin === true) {
      navigate("/");
    } else {
      alert("Your account input incorrect!");
    }
    console.log({ checkLogin });
  };

  console.log({ email });
  console.log({ password });
  console.log({ userLogin });
  console.log({ loginData });
  console.log({ userArray });

  return (
    <>
      <div className="loginRegister">
        <img src={banner1} alt="" />
        <form className="loginForm">
          <h1>SIGN IN</h1>
          <div className="loginEmail">
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="loginPassword">
            <input
              placeholder="Password"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="loginButton">
            <button
              onClick={(e) => {
                e.preventDefault();
                setLogin({ email, password });
                setLoginData({ email, password });
                validate();
              }}
            >
              SIGN IN
            </button>
          </div>
          <div className="signUp">
            Create an account? <a href="/login/register">Sign up</a>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
