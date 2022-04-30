import React from 'react';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div class='footer_list'>
        <ul>
          <li>
            <Link to='#'>About</Link>
          </li>
          <li>
            <Link to='#'>Jobs</Link>
          </li>
          <li>
            <Link to='/about'>
              <FaBook />
            </Link>
          </li>
          <li>
            <Link to='#'>Help</Link>
          </li>
          <li>
            <Link to='#'>Terms</Link>
          </li>
        </ul>
      </div>
      <p>AWAD © Stella Lee {currentYear}</p>
    </footer>
  );
};

export default Footer;
