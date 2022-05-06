import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/imgs/logo-hr.svg";

function NavbarCopy() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navigation">
      <nav className="grid-container">
        <div className="grid-x">
          <div className="left-nav-block logo-block">
            <Link to="/">
              <img className="logo" src={logo} alt="Taibu Logo" />
            </Link>
          </div>
          <button
            className="menu-icon align-self-middle show-for-small-only nav-menu-button"
            type="button"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          ></button>
          <div className="right-nav-block align-self-middle">
            <div className={showLinks ? "nav-links expanded" : "nav-links"}>
              <ul className="menu">
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <button type="button" className="button">
                    Support Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarCopy;
