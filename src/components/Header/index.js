import React from "react";
import logo from "../../assets/images/logo.svg";
function Header() {
  return (
    <div class="navbar-height">
      <nav
        id="site-header"
        // className="site-header"
        role="navigation"
        aria-label="main navigation"
        className="site-header navbar home-active"
      >
        <div class="items">
          <div class="navbar-brand">
            <a href="/" class="logo signin nuxt-link-exact-active is-active" exact="">
              <img src={logo} alt="Travelstop" />
            </a>
            <a
              href="/"
              role="button"
              aria-label="menu"
              aria-expanded="false"
              class="navbar-burger is-home"
            >
              <span aria-hidden="true"></span> <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <a href="/#features" class="navbar-item signin">
                Features
              </a>
              <a href="/#pricing" class="navbar-item signin">
                Pricing
              </a>
              <a href="/signin" class="navbar-item signin">
                Sign in
              </a>
              <a href="/" class="navbar-item locale signin is-not-link">
                <div class="dropdown is-bottom-left is-mobile-modal">
                  <div role="button" aria-haspopup="true" class="dropdown-trigger">
                    <span class="is-flex">
                      <i class="fa fa-language"></i>
                      <span class="icon">
                        <i class="fa fa-chevron-down"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </a>
              <form name="get-started" class="get-started py-2 px-3">
                <div class="field has-addons">
                  <div class="control is-clearfix">
                    <input
                      type="email"
                      autocomplete="on"
                      placeholder="Add your work email"
                      required="required"
                      class="input"
                    />
                  </div>
                  <p class="control">
                    <button type="submit" class="button is-primary">
                      Get started
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
