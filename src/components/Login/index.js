import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
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
      <div className="wrapper">
        <div className="login_content">
          <div className="login_form">
            <div className="login_formlogo">
              <img src={logo} alt="kimbocorp.png" />
            </div>
            <div className="form-head">
              <p>Welcome to Kimbocorp</p>
            </div>
            <form>
              <div className="label1">
                <input
                  className="text-box"
                  type="email"
                  value={loginCredential.email}
                  name="email"
                  onChange={onChange}
                />
                {error.email.length > 0 && (
                  <span className="error">{error.email}</span>
                )}
                <label className="label2">Email</label>
              </div>
              <div className="label1">
                <input
                  className="text-box"
                  type="password"
                  name="password"
                  value={loginCredential.password}
                  onChange={onChange}
                />
                <label className="label2">Password</label>
                {error.password.length > 0 && (
                  <span className="error">{error.password}</span>
                )}
              </div>
            </form>
            <div>
              <p className="pw">
                Forgot password?
                <a href="#">
                  <span className="aquablue"> Reset</span>
                </a>
              </p>
              <span className="float-right">
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
        </div>
      </div>
    </div>
  );
}
