import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form>
      <Input type="text" placeholder="Id" />
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;
