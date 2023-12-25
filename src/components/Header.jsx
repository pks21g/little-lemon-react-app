import {NavLink} from  'react-router-dom';
import Logo from "../icons_assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="nav-menu">
        <a href="home">
          <img src={Logo} alt="" />
        </a>

        <div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/Reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/Order Online">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
