import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import logo from "../assets/port_logo_noFill.png";
import { AiOutlineBars } from "react-icons/ai";
import NavLinks from "./NavLinks";
import { useState } from "react";
import Tray from "./Tray";

function NavBar(props) {

  return (<nav className={classes.navbar}>
    <span className={classes.logolink}>
     <Link to="/"> <img src={logo} className={classes.logo} alt="avatar" /></Link>
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
        <Tray/>
        </span>
      
        
      </ul>

      {/* <AiOutlineBars size="35px" className={classes.icon} onClick={clickHandler}/>  */}
    </nav>
  );
}

export default NavBar;
