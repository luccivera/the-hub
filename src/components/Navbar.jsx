import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo-hr.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="top-bar topbar-responsive grid-container">
        <div className="top-bar-title">
          <span
            data-responsive-toggle="topbar-responsive"
            data-hide-for="medium"
          >
            <button className="menu-icon" type="button" data-toggle></button>
          </span>
          <Link to="/">
            <img className="logo" src={logo} alt="Taibu Logo" />
          </Link>
        </div>
        <div id="topbar-responsive" className="topbar-responsive-links">
          <div className="top-bar-right">
            <ul className="menu simple vertical medium-horizontal">
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <button
                  type="button"
                  className="button topbar-responsive-button"
                >
                  Support Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    // <nav className="">
    //   <Link to="/">
    //     <img className="logo" src={logo} alt="Taibu Logo" />
    //   </Link>
    //   <Link to="/resources">Resources</Link>

    // </nav>
  );
}
