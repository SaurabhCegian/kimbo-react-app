import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import loginImg from "../../assets/images/login-indesign.png";
import { Link } from "react-router-dom";
export default function Login() {
  const [loginCredential, setLoginCredential] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState({
    email: "*",
    password: "*"
  });

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  const onChange = event => {
    const { name, value } = event.target;
    let errors = error;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "*";
        break;
      case "password":
        errors.password = value.length < 4 ? "*" : "";
        break;
      default:
        break;
    }

    let tempLoginCredential = { ...loginCredential };
    tempLoginCredential[name] = value;
    setError(errors);
    setLoginCredential(tempLoginCredential);
  };
  const handleSubmit = event => {
    if (
      validateForm(error) &&
      loginCredential.email.length &&
      loginCredential.password.length
    ) {
      console.log(loginCredential);
    }
  };
  console.log(error, loginCredential);
  return (
    <div>
      <div class="login">
        <div class="login-1">
          <div class="login-head">
            <div class="login-head-logo">
              <img src={logo} alt="logo.png" />
            </div>
            <div>
              <img src={loginImg} alt="login.png" />
            </div>
          </div>
        </div>
        <div class="login-2">
          <div class="login-form">
            <h2>Login</h2>
            <form>
              <div class="label3">
                <input
                  class="text-box"
                  type="email"
                  value={loginCredential.email}
                  name="email"
                  onChange={onChange}
                />
                <label class="label4">Email Address</label>
              </div>
              <div class="label3">
                <input
                  className="text-box"
                  type="password"
                  name="password"
                  value={loginCredential.password}
                  onChange={onChange}
                />
                <label class="label4">Password</label>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <p>
                    Forgot Password? <span class="primary-color">Reset</span>
                  </p>
                  <p>
                    Don’t Have an account?{" "}
                    <span class="primary-color">
                      <Link to="/signup">Signup</Link>
                    </span>
                  </p>
                </div>
                <div class="col-sm-6">
                  <span class="right">
                    <Link to="/home">
                      <button
                        className="primary-button"
                        style={{
                          opacity:
                            (error.email.length || error.password.length) &&
                            (!loginCredential.email.length ||
                              !loginCredential.password.length)
                              ? "0.6"
                              : ""
                        }}
                        disabled={
                          (error.email.length || error.password.length) &&
                          (!loginCredential.email.length ||
                            !loginCredential.password.length)
                        }
                        onClick={handleSubmit}
                      >
                        SIGN IN
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
