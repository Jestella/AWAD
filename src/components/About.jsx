import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h4>Version 1.0.0</h4>
      <p className="goback_btn">
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
}

export default About;
