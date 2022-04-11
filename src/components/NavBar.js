import { Link } from "react-router-dom";
import classes from "./css/NavBar.module.css";
import logo from "../assets/port_logo_noFill.png";
import Tray from "./Tray";

function NavBar(props) {
  return (
    <nav className={classes.navbar}>
      <span className={classes.logolink}>
        <Link to="/">
          {" "}
          <img src={logo} className={classes.logo} alt="avatar" />
        </Link>
      </span>

      <ul className={classes.links}>
        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <span>
          <Tray />
        </span>
      </ul>
    </nav>
  );
}

export default NavBar;
