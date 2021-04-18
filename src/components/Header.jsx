import React from "react";
import Login from "./Login";

function Header() {
  return (
    <header>
      <div class="top_container">
        <img src="./images/logo.png" class="logo" />
        <Login />
      </div>

      <div class="header_title">
        <h1>A Word A Day!</h1>
        <p>Make your own dictionary with AWAD</p>
      </div>
    </header>
  );
}

export default Header;
