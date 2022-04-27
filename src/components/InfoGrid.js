import * as React from "react";
import "./css/InfoGrid.css";
import LanguageIcons from "./LanguageIcons";
import TechIcons from "./TechIcons";
import Uofc from "../assets/uofc.png";
import Uofs from "../assets/uofs.png";

export default function InfoGrid() {
  return (
    <div className="grid">
      <div className="row">
        <div className="about-me">
          <h1>About Me</h1>
          <span className="box-content">
            <div className="info">
              I'm a versatile and adaptable graduate with a background in both
              Software and Mechanical Engineering. As a life-long learner I am
              constantly looking for new opportunities to develop my
              professional skillset and work among driven and innovative teams!
              <br />
              <br />
              Get in touch with me through LinkedIn or hover over my photo to
              download my full resume!
            </div>
          </span>
        </div>
      </div>

      <div className="row">
        <div className="box">
          <h1>Skills</h1>
          <div className="box-content-skills">
            <span>Object Oriented Programming</span>
            <span>Leadership</span>
            <span>Public Speaking</span>
            <span>Technical Writing</span>
            <span>Machine Learning</span>
            <span>Mechanical Design</span>
            <span>Excellent Interpersonal Skills</span>
            <span>Data Analysis</span>

            <span>Agile Methodologies</span>
          </div>
        </div>
        <div className="box">
          <h1>Education</h1>
          <span className="box-content">
            <div className="school-icon">
              <img src={Uofc} alt="uofc-logo" />
              <img src={Uofs} alt="uofs-logo" />
            </div>

            <div>
              <span>M.ENG. - Software Engineering (2020-2021)</span>
              <div className="school"> University of Calgary</div>
              <br />
              B.Sc. - Mechanical Engineering (2014-2019)
              <div className="school"> University of Saskatchewan</div>
            </div>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <h1>Technologies</h1>
          <span className="box-content">
            <TechIcons />
          </span>
        </div>
        <div className="box">
          <h1>Languages</h1>
          <span className="box-content">
            <LanguageIcons />
          </span>
        </div>
      </div>
    </div>
  );
}
