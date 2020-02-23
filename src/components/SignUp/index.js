import React from "react";
import logo from "../../assets/images/logo.png";
import loginImg from "../../assets/images/login-indesign.png";

export default function SignUp() {
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
        <div class="login-2 create-login">
          <div class="login-form">
            <h2>Create Account</h2>
            <div class="row">
              <div class="col-sm-6">
                <form>
                  <div class="label3">
                    <input class="text-box" type="text" />
                    <label class="label4">First Name</label>
                  </div>
                </form>
              </div>
              <div class="col-sm-6">
                <form>
                  <div class="label3">
                    <input class="text-box" type="text" />
                    <label class="label4">Last Name</label>
                  </div>
                </form>
              </div>
              <div class="col-sm-12">
                <form>
                  <div class="label3">
                    <input class="text-box" type="email" />
                    <label class="label4">Email</label>
                  </div>
                </form>
              </div>
              <div class="col-sm-6">
                <form>
                  <div class="label3">
                    <input class="text-box" type="password" />
                    <label class="label4">Password</label>
                  </div>
                </form>
              </div>
              <div class="col-sm-6">
                <form>
                  <div class="label3">
                    <input class="text-box" type="password" />
                    <label class="label4">Confirm Password</label>
                  </div>
                </form>
              </div>
              <div class="col-md-12">
                <div class="checkbox-label">
                  <label class="checkbox-container">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <p>
                    I agree to the <a href="">terms & conditions</a> and{" "}
                    <a href="">Policy.</a>
                  </p>
                </div>
              </div>
              <div class="col-sm-12">
                <span class="float-right">
                  <a href="">
                    <button class="primary-button right">Register</button>
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
