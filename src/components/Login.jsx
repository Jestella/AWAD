import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setUsername(name);

    event.preventDefault();
  }
  return (
    <div className="login_container">
      <h1>Welcome {userName}</h1>
      <form onSubmit={handleClick} autocomplete="off">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          value={name}
        />
        <button type="submit">Submit</button>
        <p className="goback_btn">
          <Link to="/">Go Back</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
