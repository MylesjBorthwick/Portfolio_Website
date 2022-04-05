import TicTac from "../assets/tic.png";
import ToolShop from "../assets/tools.png";
import Spring from "../assets/spring.png";
import Course from "../assets/course.png";
import Sign from "../assets/sign.png";
import Game from "../assets/interloper.png";
import ProjectCard from "./ProjectCard";
import classes from "./Projects.css"


export default function Projects(props){
    return  <div > <Link to="/portfolio/tictactoe">
     
    <ProjectCard
      title="Tic Tac Toe"
      text="A deep dive into a simple classic.."
      pic={TicTac}
    />
  

  </Link>

  <div className={classes.item}>
  <Link to="/portfolio/toolshop">
    <ProjectCard
      title="Tool Shop"
      text="Inventory management using MySQL"
      pic={ToolShop}
    />
    </Link>
  </div>
  <div className={classes.item}>
  <Link to="/portfolio/spring">
    <ProjectCard
      title="Spring API"
      text="Industry grade backend using Spring Boot"
      pic={Spring}
    />
    </Link>
  </div>

  <div className={classes.item}>
    <ProjectCard
      title="Interloper"
      text="Exploratory project into Unity development"
      pic={Game}
    />
  </div>

  <div className={classes.item}>
  <Link to="/portfolio/courseoutline">
    <ProjectCard
      title="Course Outline"
      text="Creates and manages course outlines"
      pic={Course}
    />
    </Link>
  </div>

  <div className={classes.item}>
  <Link to="/portfolio/signclassification">
    <ProjectCard
      title="Sign Identification"
      text="Deep learning for self-driving cars"
      pic={Sign}
    />
    </Link>
  </div>
  </div>
}