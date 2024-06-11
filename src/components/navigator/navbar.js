import "./navbar.css";
import Icon from '../../Assets/slack.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={Icon} alt="" />
        <h1> 7T2 </h1>
      </div>

      <ul className="nav-menu">
        <button>Home</button>
        <button>
        <AnchorLink className="anchorlink"href='#portfolio'>
            <p>Portfolio</p>
          </AnchorLink>
        </button>
        <button>
          <AnchorLink className="anchorlink" href='#services'>
            <p>Services</p>
          </AnchorLink>
        </button>
        <button>
          <AnchorLink className="anchorlink" href='#about-us'>
            <p>About</p>
          </AnchorLink>
        </button>
        <button>FAQ</button>
      </ul>
    </div>
  );
}

export default Navbar;
