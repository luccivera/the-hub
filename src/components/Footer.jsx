import React from "react";
import { Link } from "react-router-dom";
import logofooter from "../assets/imgs/logo-hr-green.png";

function Footer() {
  return (
    <footer className="grid-x">
      <div className="cell large-4 medium-3 small-12">
        <Link to="/">
          <img className="logofooter" src={logofooter} alt="Taibu Logo" />
        </Link>
        <p className="small-text">
          TAIBU Community Health Centre provides primary health care and related
          services for Black populations across the Greater Toronto Area and
          residents of our local community of Malvern. Recognizing that systemic
          oppression has fostered conditions of ill-health with Black
          communities, we strive to deliver these services through
          intersectional, equity-based and culturally affirming practices which
          promote holistic wellness, health education, and prevention.
        </p>
      </div>
      <div className="cell large-offset-2 medium-3 small-12">
        <h4>Hours of Operation</h4>
        <p>
          Mon / Wed / Fri <span>9am - 5pm</span>
        </p>
        <p>
          Tu / Th <span>9am - 8pm</span>
        </p>
        <p>
          Sat / Sun <span>Closed</span>
        </p>
        <p>
          After Hours <span>Call</span>
        </p>
      </div>
      <div className="cell large-3 medium-3 small-12">
        <h4>General Contact</h4>
        <p className="small-text">27 Tapscott Road, Unit #1</p>
        <p>Toronto, Ontario M1B 4Y7</p>
        <br />
        <p>Phone: (416) 644 - 3536</p>
        <br />
        <p>Email: info@taibuchc.ca</p>
      </div>
    </footer>
  );
}

export default Footer;
