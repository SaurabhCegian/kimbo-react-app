import React from "react";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";

function Header() {
  return (
    <header>
      <div class="header_logo">
        <img src={logo} alt="kimbocorp.png" />
      </div>
      <div class="header_tools">
        <div class="profile_icon">
          <img src={profile} alt="profile.png" />
        </div>
      </div>
    </header>
  );
}
export default Header;
