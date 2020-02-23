import React from "react";
import logo from "../../assets/images/logo.png";
import loginImg from "../../assets/images/login-indesign.png";

export default function SignUp() {
  return (
    <div>
      <div className="login">
        <div className="login-1">
          <div className="login-head">
            <div className="login-head-logo">
              <img src={logo} alt="logo.png" />
            </div>
            <div>
              <img src={loginImg} alt="login.png" />
            </div>
          </div>
        </div>
        <div className="login-2 create-login">
          <div className="login-form">
            <h2>Create Account</h2>
            <div className="row">
              <div className="col-sm-6">
                <form>
                  <div className="label3">
                    <input className="text-box" type="text" />
                    <label className="label4">First Name</label>
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                <form>
                  <div className="label3">
                    <input className="text-box" type="text" />
                    <label className="label4">Last Name</label>
                  </div>
                </form>
              </div>
              <div className="col-sm-12">
                <form>
                  <div className="label3">
                    <input className="text-box" type="email" />
                    <label className="label4">Email</label>
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                <form>
                  <div className="label3">
                    <input className="text-box" type="password" />
                    <label className="label4">Password</label>
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                <form>
                  <div className="label3">
                    <input className="text-box" type="password" />
                    <label className="label4">Confirm Password</label>
                  </div>
                </form>
              </div>
              <div className="col-md-12">
                <div className="checkbox-label">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <p>
                    I agree to the <a href="">terms & conditions</a> and{" "}
                    <a href="">Policy.</a>
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <span className="float-right">
                  <a href="">
                    <button className="primary-button right">Register</button>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
