import NavBar from "../../components/NavBar";
import Board from "../../components/Tictactoe/Board";
import "./ProjectPages.css";
import Pic1 from "../../assets/tic.png";
import Pic2 from "../../assets/ticapi.png";
import TerminalGif from "../../assets/terminalTic.gif";
import GuiGif from "../../assets/ticgui.gif";

import Carousel from "react-material-ui-carousel";
import Game from "../../components/Tictactoe/Game";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function TicTacToe() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div className="project-layout">
        <div className="project-title">
          {" "}
          <Link to="/portfolio/signclassification" ><span  className="nav-arrow"><ArrowBackIosNewIcon/></span></Link>
          <span className="typed-title">Tic-Tac-Toe</span>
          <Link to="/portfolio/toolshop" ><span  className="nav-arrow"><ArrowForwardIosIcon className="nav-arrow-right"/></span></Link>
        </div>
        <div className="project-about">
          <div className="project-description">
            <div className="card-content">
              <p>Through its simplicity, Tic Tac Toe serves as a great starting problem when learning new technologies. Despite its straightforward logic, full stack implementation of this game within new frameworks and languages can prove challenging. </p>

              <div>
  
                  To improve my understanding of both backend and frontend development the following three projects were completed:
                  <ul>
                    <li>.Net API using C#</li>
                    <li>Terminal based Java Application</li>
                    <li>Client Server Java Application using MVC</li>
                  </ul>
                
                <p>
                  Check out the repository for an in-depth overview of this
                  project and its features.
                </p>
              </div>
            </div>
          </div>
          <div className="project-tech">
            <div className="card-content">
              <p>Languages: Java / C#</p>
              <p>Technologies: .Net / Docker / Swagger</p>
              <p>Dev Environment: Windows / VsCode</p>
            </div>
          </div>
        </div>
        <div className="project-gallery">
          <Carousel
            className="carousel"
            animation="slide"
            height={300}
            indicators={false}
            autoPlay={false}
          >
            <img className="gallery-pic" src={Pic1} alt="spring" />
            
            {/* <img className="gallery-pic" src={Pic2} alt="spring" /> */}

            <img className="gallery-pic" src={TerminalGif} alt="snippet1" />
            <img className="gallery-pic" src={GuiGif} alt="snippet1" />
            <div className="game">
              <div className="game-notify">Game available in desktop only</div>
              <div className="tictac">
              <Game/>
                </div>
            </div>

       
          </Carousel>
   
          <div className="button-group">
          <a href="//github.com/MylesjBorthwick/TicTacToeApi" target="_blank" >
            <button className="button-30">.Net API</button>
            </a>
          
            <a href="//github.com/MylesjBorthwick/Tic-Tac-Toe-with-GUI" target="_blank" >
            <button className="button-30">Client Server + Terminal</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
