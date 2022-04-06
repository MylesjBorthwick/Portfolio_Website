import Dock from "../assets/icons/docker.png"
import Git from "../assets/icons/git.png"
import Mongo from "../assets/icons/mongo.png"
import Node from "../assets/icons/node.png"
import Re from "../assets/icons/react.png"
import Spring from "../assets/icons/spring.png"
import Tense from "../assets/icons/tense.png"
import Vue from "../assets/icons/vue.png"



function TechIcons(){

    return(<div className="tech-icons"><img src={Re}></img>
    <img src={Vue}/><img src={Node}/><img src={Spring}/><img src={Tense}/><img src={Mongo}/><img src={Git}/><img src={Dock}/></div>
    )

}

export default TechIcons;