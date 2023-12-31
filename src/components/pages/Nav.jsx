import { Link } from "react-router-dom";
import Logo from "../../icons_assets/Logo.svg";

const Nav = () => {
  return (
    <>
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservation">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </>

  );
};

export default Nav;
