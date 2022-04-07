import NavBar from "../../components/NavBar";
import Carousel from "react-material-ui-carousel";
import Pic1 from "../../assets/toolscreen1.png";
import ToolPic from "../../assets/tools.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

import "./css/ProjectPages.css";

function ToolShop() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="project-layout">
        <div className="project-title">
          {" "}
          <Link to="/portfolio/tictactoe">
            <span className="nav-arrow">
              <ArrowBackIosNewIcon />
            </span>
          </Link>
          <span className="typed-title">Toolshop</span>
          <Link to="/portfolio/spring">
            <span className="nav-arrow">
              <ArrowForwardIosIcon />
            </span>
          </Link>
        </div>

        <div className="project-about">
          <div className="project-description">
            <div className="card-content">
              <p>
                This Java based application manages and displays customer and
                tool information stored inside a MySQL database. The application
                has a Java GUI and employs the Model View Controller pattern to
                seperate client from server.
              </p>

              <div>
                <p>
                  This was my first MVC project that leveraged a MySQL database
                  and was an excellent exercise in fullstack development.
                </p>
                <p>Check out the repository for the full project.</p>
              </div>
            </div>
          </div>
          <div className="project-tech">
            <div className="card-content">
              <p>Languages: Java</p>
              <p>Technologies: MySQL</p>
              <p>Dev Environment: Windows + VSCode</p>
            </div>
          </div>
        </div>
        <div className="project-gallery">
          <Carousel
            className="carousel"
            animation="slide"
            height={300}
            indicators={false}
          >
            <img className="gallery-pic" src={ToolPic} alt="hero" />

            <img className="gallery-pic" src={Pic1} alt="snippet1" />
          </Carousel>
          <a
            href="//github.com/MylesjBorthwick/Tool-Shop-Project"
            target="_blank"
          >
            <button className="button-30">Project Repository</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ToolShop;
