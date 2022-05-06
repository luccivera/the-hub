import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import Header from "../components/Header";
import ResourcesHomeCards from "../components/ResourcesHomeCards";
import ScrollableUpdate from "../components/ScrollableUpdate";
import handsImage from "../assets/imgs/handsheart.svg";

function Home() {
  return (
    <div className="home-image">
      <Header />
      <section className="resource-cards-block grid-container">
        <div className="cell large-12 text-center">
          <h1>Community Connections</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            maecenas urna amet sagittis.
          </p>
          <div className="grid-x grid-margin-x grid-margin-y svg-image align-center resource-card-grid">
            <div className="large-3">
              <img className="hands-image" src={handsImage} alt="Taibu Logo" />
            </div>
            <ResourcesHomeCards />
            <ResourcesHomeCards />
            <ResourcesHomeCards />
          </div>
        </div>
      </section>
      <section className="filler-text-block grid-container">
        <ScrollableUpdate />
      </section>
    </div>
  );
}

export default Home;
