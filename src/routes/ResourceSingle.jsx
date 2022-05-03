import { NavLink, Outlet, useParams } from "react-router-dom";
import { getResources } from "../data";
import ResourceSingleInfo from "../components/ResourceSingleInfo";
import ResourceCard from "../components/ResourceCard";

function ResourceSingle() {
  return (
    <main className="grid-container resource-single-container">
      <div className="grid-x grid-margin-x flex-dir-column">
        <h2>Malvern Eats</h2>
        <h4>Food Support</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi enim
          aliquet elit risus eget blandit. Pulvinar nullam nisi, et luctus quis
          sed nec id risus. Ultricies gravida fermentum pellentesque at.
          Volutpat potenti lacus, porttitor turpis at habitasse interdum massa.
        </p>
      </div>
      <div className="grid-x grid-margin-x">
        <ResourceSingleInfo />
      </div>
      <div className="grid-x grid-margin-x">
        <h2>Related Resources</h2>
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </main>
  );
}

export default ResourceSingle;
