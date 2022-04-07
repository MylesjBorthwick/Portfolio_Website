import "./css/LandingPage.css";
import logo from "../assets/port_logo_noFill.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <section className="main">
      <Link to="/home">
        {" "}
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </section>
  );
}

export default LandingPage;
