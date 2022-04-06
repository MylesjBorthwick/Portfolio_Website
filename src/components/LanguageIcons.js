import Java from "../assets/icons/java.png"
import Script from "../assets/icons/jscript.png"
import Python from "../assets/icons/python.png"
import Css from "../assets/icons/css.png"
import Csharp from "../assets/icons/c#.png"
import Cplus from "../assets/icons/c++.png"
import H5 from "../assets/icons/html.png"



function LanguageIcons(){

    return(<div className="tech-icons"><img src={Java}></img>
    <img src={Script}/><img src={Python}/><img src={H5}/><img src={Css}/><img src={Csharp}/><img src={Cplus}/></div>
    )

}

export default LanguageIcons;