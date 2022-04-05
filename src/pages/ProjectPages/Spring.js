import NavBar from "../../components/NavBar";
import "./ProjectPages.css";
import Pic1 from "../../assets/springscreen1.png";
import Pic2 from "../../assets/spring.png";
import Pic3 from "../../assets/springscreen3.png";
import Pic5 from "../../assets/springscreen5.png";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function Spring() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="project-layout">
        <div className="project-title">
          {" "}
          <Link to="/portfolio/toolshop">
            <span className="nav-arrow">
              <ArrowBackIosNewIcon />
            </span>
          </Link>
          <span className="typed-title">Spring API</span>
          <Link to="/portfolio/courseoutline">
            <span className="nav-arrow">
              <ArrowForwardIosIcon className="nav-arrow-right" />
            </span>
          </Link>
        </div>

        <div className="project-about">
          <div className="project-description">
            <div className="card-content">
              <p>
                This web API was created as part of my Capstone team's industry
                project while attending the University of Calgary. The goal of
                this project was to adapt a legacy codebase within a Spring
                framework in order to evaluate it's viabilty for our client's
                service requirements.
              </p>

              <div>
                <p>
                  Through this project I gained valuable experience in backend
                  web development, Agile project management and client
                  communication within a professional context.{" "}
                </p>
                <p>
                  Check out the repository for an in-depth overview of this
                  project and its features.
                </p>
              </div>
            </div>
          </div>
          <div className="project-tech">
            <div className="card-content">
              <p>Languages: Java</p>
              <p>Technologies: Spring Boot, Gradle, Docker, MySQL, Redis</p>
              <p>Dev Environment: Linux + IntelliJ</p>
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
            <img className="gallery-pic" src={Pic2} alt="spring" />
            <img className="gallery-pic" src={Pic1} alt="snippet1" />

            {/* <img className="gallery-pic" src={Pic5} alt="snippet2" /> */}
          </Carousel>
          <a href="//github.com/MylesjBorthwick/SpringChickenWebService" target="_blank" >
          <button className="button-30">Project Repository</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Spring;