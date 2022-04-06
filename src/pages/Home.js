import NavBar from "../components/NavBar";
import "./css/HomePage.css";
// import Avatar from "../assets/skellyboy4.png";
import Avatar2 from "../assets/jump.png";
import { DiReact } from "react-icons/di";
import DownloadIcon from "@mui/icons-material/Download";
import Resume from "../assets/Resume_MylesBorthwick_Web.pdf";
import { Link } from "react-router-dom";
import Title from "../components/ColorTitle";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ContactIcons from "../components/ContactIcons";

function HomePage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="layout-home">
      <div className="home-left">
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
   
          
        </div>
       
        <div className="content">
          <div className="title">Myles Borthwick</div>
          {/* <Title /> */}

          <span className="banner">
           <span className="software">Software Engineering</span> | <span className="mech">Mechanical Engineering</span>
          </span>

          <div className="project-link">

          <Link to="/portfolio">
          <div className="btn btn-projects"><NavigateNextIcon/></div>
          </Link>
          </div>
     
        </div>

   
  
      </div>
      
   
      
    </div>
  );
}

export default HomePage;
