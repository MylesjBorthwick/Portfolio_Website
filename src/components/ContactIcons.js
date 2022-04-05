import Git from "../assets/git.png";
import Linked from "../assets/linkd2.png";
import "./ContactIcons.css"

function ContactIcons() {
  return (
    <div className="contact-icons">
     
      <a className="about-links" href="//linkedin.com/in/myles-borthwick-4264b2153" target="_blank" >
        <img className="linked-icon "src={Linked} alt="linkdin" />
        </a>

        <a className="about-links" href="//github.com/MylesjBorthwick" target="_blank" >
      <img className="git-icon" src={Git}  alt="git" />
      </a>

    </div>
  );
}

export default ContactIcons;
