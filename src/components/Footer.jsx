import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div class="footer_list">
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>

      <p>AWAD © Stella Lee {currentYear}</p>
    </footer>
  );
}

export default Footer;
