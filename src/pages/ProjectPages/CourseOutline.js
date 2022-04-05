import NavBar from "../../components/NavBar";
import "./ProjectPages.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Pic1 from "../../assets/courseOutline.png";
import Course from "../../assets/course.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function CourseOutline() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="project-layout">
        <div className="project-title">
          <Link to="/portfolio/spring">
            <span className="nav-arrow">
              <ArrowBackIosNewIcon />
            </span>
          </Link>
          <span className="typed-title">Course Outline</span>{" "}
          <Link to="/portfolio/signclassification">
            <span className="nav-arrow">
              <ArrowForwardIosIcon />
            </span>
          </Link>
        </div>

        <div className="project-about">
          <div className="project-description">
            <div className="card-content">
              <p>
                This project marks my introduction to web development and was
                developed as a tool for course instructors to easily create,
                update and browse course outlines. The backend for this
                application uses Django to handle incoming API requests while
                React was used for the front-end UI.
              </p>
              <p>
                Through building this application I was introduced to the
                fundamental pillars of front-end development (Javascript, CSS
                and HTML) and gained a better understanding of the complexities associated with full stack
                development.
              </p>
              <p>
                Check out the repository for an in-depth overview of this
                project and its features.
              </p>
            </div>
          </div>
          <div className="project-tech">
            <div className="card-content">
              <p>Languages: Javascript, CSS, HTML, Python</p>
              <p>Technologies: React, Node.js, Django</p>
              <p>Dev Environment: Windows + VS Code</p>
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
            <img className="gallery-pic" src={Pic1} alt="snippet1" />
            <img className="gallery-pic" src={Course} alt="snippet1" />

            {/* <img className="gallery-pic" src={Pic5} alt="snippet2" /> */}
          </Carousel>
          <a href="//github.com/MylesjBorthwick/Django-React-Project" target="_blank" >
   
          <button className="button-30">Project Repository</button>
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default CourseOutline;
