import { NavLink, Outlet, useParams } from "react-router-dom";
import { getResources } from "../data";
import ResourceCard from "../components/ResourceCard";
import ResourceButtons from "../components/ResourceButtons";

export default function Resources() {
  let resourcesCat = getResources();
  let params = useParams();
  return (
    <main className="grid-container resources-container">
      <h2>Community Resources</h2>
      <div className="resource-buttons grid-x grid-margin-x">
        <ResourceButtons />
        <ResourceButtons />
        <ResourceButtons />
        <ResourceButtons />
      </div>
      <div className="resource-cards grid-x grid-margin-x grid-margin-y">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </main>
  );
}
