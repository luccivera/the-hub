import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import Header from "../components/Header";
import ResourcesHomeCards from "../components/ResourcesHomeCards";
import ScrollableUpdate from "../components/ScrollableUpdate";

function Home() {
  return (
    <div className="home-image">
      <Header />
      <section className="resource-cards-block grid-container">
        <div className="cell large-12">
          <div className="grid-x grid-margin-x grid-margin-y">
            <ResourcesHomeCards />
            <ResourcesHomeCards />
            <ResourcesHomeCards />
          </div>
        </div>
      </section>
      <section className="scrollable-update grid-container">
        <ScrollableUpdate />
      </section>
    </div>
  );
}

export default Home;
