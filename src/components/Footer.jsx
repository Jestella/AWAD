import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>AWAD © Stella Lee {currentYear}</p>
    </footer>
  );
}

export default Footer;
