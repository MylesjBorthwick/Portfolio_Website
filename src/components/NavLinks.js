import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";


export default function NavLinks (){

return <ul>
 <li>
  <Link to="/home">Home</Link>
</li>

<li>
  <Link to="/portfolio">Portfolio</Link>
</li>

<li>
  <Link to="/about">About</Link>
</li>
</ul>

}
