import React from "react";
import Login from "./Login";

function Header() {
  return (
    <header>
      <div class="top_container">
        <img src="./images/logo.png" class="logo" />
      </div>

      <div class="header_title">
        <h1>A Word A Day!</h1>
        <p>Make your own dictionary with AWAD</p>
      </div>
      <Login />
    </header>
  );
}

export default Header;
