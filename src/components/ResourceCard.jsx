import React from "react";
import { useNavigate } from "react-router-dom";

function ResourceCard() {
  const navigate = useNavigate();

  return (
    <div className="cell large-4 medium-6 small-12 resource-card">
      <h3>Malvern Eats</h3>
      <h4>Food</h4>
      <p>
        Weekly healthy meals supplied to low income individuals across the
        Malvern area
      </p>
      <button
        className="button"
        onClick={() => {
          navigate("/single");
        }}
      >
        MORE INFO
      </button>
    </div>
  );
}

export default ResourceCard;
