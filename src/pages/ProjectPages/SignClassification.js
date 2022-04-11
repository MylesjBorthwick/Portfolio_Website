import NavBar from "../../components/NavBar";
import Carousel from "react-material-ui-carousel";
import "./css/ProjectPages.css";
import Pic1 from "../../assets/signlabels.png";
import Sign from "../../assets/sign.png";
import Dataset from "../../assets/dataset-traffic.png"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function SignClassification() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="project-layout">
        <div className="project-title">
          {" "}
          <Link to="/portfolio/courseoutline">
            <span className="nav-arrow">
              <ArrowBackIosNewIcon />
            </span>
          </Link>
         Sign Classification
          <Link to="/portfolio/tictactoe">
            <span className="nav-arrow">
              <ArrowForwardIosIcon />
            </span>
          </Link>
        </div>

        <div className="project-about">
          <div className="project-description">
            <div className="card-content">
              <p>
                Machine learning model created for the multi-classification of
                road sign images. Road sign identification is one of many
                machine learning problems associated with automated cars that is
                crucial for safe and efficient road navigation.
              </p>
              <div>
                <p>
                  Using a Convoluted Neural Network (CNN) our team achieved a
                  97.79% accuracy on our test dataset. This project was an
                  excellent foray into developing deep learning models and
                  necessitated team collaboration for the design, testing and
                  refinement of our CNN.
                </p>
                <p>
                  Check out the repository for an in-depth overview of this
                  project.
                </p>
              </div>
            </div>
          </div>
          <div className="project-tech">
            <div className="card-content">
              <p><span>Languages:</span> &nbsp; Python</p>
              <p><span>Technologies:</span> &nbsp;TensorFlow, Pandas, Sklearn</p>
              <p><span>Dev Environment:</span> &nbsp;Windows + Jupyter Notebook</p>
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
            <img className="gallery-pic" src={Sign} alt="hero-sign" />
            <img className="gallery-pic" src={Dataset} alt="traffic-dataset"/>
            <img className="gallery-pic" src={Pic1} alt="label-chart" />

            {/* <img className="gallery-pic" src={Pic5} alt="snippet2" /> */}
          </Carousel>
          <a
            href="//github.com/MylesjBorthwick/Traffic-Sign-Identification"
            target="_blank"
            rel="noreferrer"
          >
            <button className="button-30">Project Repository</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignClassification;
