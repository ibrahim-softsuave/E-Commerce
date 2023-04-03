import React, { useState } from "react";
import Visibility from "../visibility.svg";
import VisibilityOff from "../visibility-off.svg";
import axios from "./axios";
const SIGNUP = "/register";
const SignUp = (props) => {
  const [registerDatas, SetRegisterDatas] = useState({
    username: "",
    password: "",
    mobile: "",
    email: "",
  });
  const handleRegister = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetRegisterDatas({ ...registerDatas, [name]: value });
  };
  const habdleSignUP = async (e) => {
    e.preventDefault();
    await axios
      .post(SIGNUP, {
        username: registerDatas.username,
        password: registerDatas.password,
        mobile: registerDatas.mobile,
        email: registerDatas.email,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <form className="signin-container-items item3" onSubmit={habdleSignUP}>
        <div className="form-input">
          <input
            type="text"
            value={registerDatas.username}
            placeholder="Name"
            name="username"
            onChange={handleRegister}
          ></input>
        </div>
        <div className="form-input">
          <input
            type="text"
            name="mobile"
            value={registerDatas.mobile}
            onChange={handleRegister}
            placeholder="Mobile Number"
          ></input>
        </div>
        <div className="form-input">
          <input
            type="text"
            name="email"
            value={registerDatas.email}
            onChange={handleRegister}
            placeholder="Email"
          ></input>
        </div>
        <div className="password-items1">
          <input
            type={props.values[0] ? "Text" : "password"}
            value={registerDatas.password}
            name="password"
            onChange={handleRegister}
            placeholder="password"
          ></input>
          {props.values[0] ? (
            <span className="pass-span">
              {" "}
              <img
                className="nav-img"
                src={Visibility}
                alt=""
                onClick={() => props.values[1](false)}
              ></img>{" "}
            </span>
          ) : (
            <span className="pass-span">
              {" "}
              <img
                className="nav-img"
                src={VisibilityOff}
                alt=""
                onClick={() => props.values[1](true)}
              ></img>{" "}
            </span>
          )}
        </div>
        <div className="form-child">
          <p onClick={props.fun}>sign in</p>
        </div>
        <div className="form-terms">
          <input id="terms" type="checkbox"></input>
          <label htmlFor="terms">
            I accept the <span>Terms of use</span> and{" "}
            <span>Privacy policy</span>
          </label>
        </div>
        <div className="form-submit">
          {" "}
          <button>Sign Up</button>{" "}
        </div>
      </form>
    </>
  );
};

export default SignUp;
