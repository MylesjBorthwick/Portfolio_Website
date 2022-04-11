import { Link } from "react-router-dom";

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
