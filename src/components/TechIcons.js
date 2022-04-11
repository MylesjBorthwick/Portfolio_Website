import Dock from "../assets/icons/docker.png";
import Git from "../assets/icons/git.png";
import Mongo from "../assets/icons/mongo.png";
import Node from "../assets/icons/node.png";
import Re from "../assets/icons/react.png";
import Spring from "../assets/icons/spring.png";
import Tense from "../assets/icons/tense.png";
import Vue from "../assets/icons/vue.png";

function TechIcons() {
  return (
    <div className="tech-icons">
      <img src={Re} alt="React"></img>
      <img src={Vue}  alt="Vue"/>
      <img src={Node}  alt="Node"/>
      <img src={Spring}  alt="Spring"/>
      <img src={Tense}  alt="Tensor"/>
      <img src={Mongo}  alt="Mongodb"/>
      <img src={Git}  alt="github"/>
      <img src={Dock}  alt="docker"/>
    </div>
  );
}

export default TechIcons;
