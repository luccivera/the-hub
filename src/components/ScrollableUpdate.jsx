import React from "react";
import Principals from "../assets/imgs/kwanzaprincipals.svg";

function ScrollableUpdate() {
  return (
    <div className="cell large-12 medium-12 small-12 text-center">
      <div className="filler-home-container">
        <h1>The Seven Principals of Kwanza</h1>
        <p>
          TAIBU Community Health Centre’s programs and services are based upon
          the Seven Principles of Kwanza. These form the basis for building and
          reinforcing family, community and culture amongst people of African
          descent.
        </p>
      </div>
      <img className="ubuntu-image" src={Principals} alt="Taibu Logo" />
    </div>
  );
}

export default ScrollableUpdate;
