import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to='/'>
            <img src={logo} class='logo' />
          </Link>
        </div>
        <div class='nav_title'>
          <h1>A Word A Day</h1>
          <p>Make your own dictionary!</p>
        </div>

        <div class='nav_btn'>
          <button>
            <Link to='/login'>Login</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
