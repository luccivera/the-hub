import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/imgs/logo-hr.svg";

export default function Navbar() {
  let [showLinks, setShowLinks] = useState(true);

  return (
    <div className="navbar">
      <nav className="top-bar navbar-responsive grid-container">
        <div className="nav-content">
          <Link to="/">
            <img className="logo" src={logo} alt="Taibu Logo" />
          </Link>
          <span
            data-responsive-toggle="navbar-responsive"
            className="show-for-small-only"
          >
            <button
              className="menu-icon"
              type="button"
              onClick={() => setShowLinks(!showLinks)}
            ></button>
          </span>
        </div>
        <div id="navbar-responsive" className="navbar-responsive-links">
          <div className="navbar-right" id={showLinks ? "hidden" : ""}>
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
                  className="button navbar-responsive-button"
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
