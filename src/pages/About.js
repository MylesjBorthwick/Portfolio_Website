import NavBar from "../components/NavBar";
import "./css/About.css";
import Me from "../assets/myles.png";
import InfoGrid from "../components/InfoGrid";
import DownloadIcon from "@mui/icons-material/Download";
import Resume from "../assets/Resume_MylesBorthwick_Web.pdf";
import ContactIcons from "../components/ContactIcons";

function AboutPage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="layout">
        <div className="about-left">
          <div className="pic">
            <img className="me" src={Me} alt="Myles" />
            <div className="pic-overlay">
              <a href={Resume} download="MylesBorthwick_Resume">
                <button className="download-button">
                  Resume
                  <DownloadIcon />
                </button>
              </a>
            </div>
          </div>
          <ContactIcons />
        </div>
        
        <div className="content-about">
          <InfoGrid />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
