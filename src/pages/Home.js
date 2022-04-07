import NavBar from "../components/NavBar";
import "./css/HomePage.css";

import Avatar2 from "../assets/jump.png";

import DownloadIcon from "@mui/icons-material/Download";
import Resume from "../assets/Resume_MylesBorthwick_Web.pdf";
import { Link } from "react-router-dom";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function HomePage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="layout-home">
        <div className="pic">
          <img className="avatar" src={Avatar2} alt="avatar" />
          <div className="pic-overlay">
            <a href={Resume} download="MylesBorthwick_Resume">
              <button className="download-button">
                Resume
                <DownloadIcon />
              </button>
            </a>
          </div>
        </div>

        <div className="content">
          <div className="title">
            <Link to="/about">Myles Borthwick</Link>
          </div>
          {/* <Title /> */}

          <span className="banner">
            Software Engineering | Mechanical Engineering
          </span>

          <div className="project-link">
            <Link to="/portfolio">
              <div className="btn btn-projects">
                <NavigateNextIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
