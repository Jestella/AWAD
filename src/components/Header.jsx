import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <img src="./images/logo.png" class="logo" />
          </Link>
        </div>
        <div class="nav_title">
          <h1>A Word A Day</h1>
          <p>Make your own dictionary!</p>
        </div>

        <div class="nav_btn">
          <button>
            <Link to="/login">
              Get
              <br />
              Started
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
