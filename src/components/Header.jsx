import React from "react";
import Login from "./Login";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src="./images/logo.png" class="logo" />
        </div>
        <div class="nav_title">
          <h1>A Word A Day</h1>
          <p>Make your own dictionary!</p>
        </div>

        <div class="nav_btns">
          <button>
            <a href="/login">Log In</a>
          </button>
          <button class="btn_signup">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
