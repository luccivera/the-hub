import React, { useState } from "react";
import ResourceData from "../assets/data/MOCK_DATA.json";

function Header() {
  let [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="grid-x grid-padding-x text-center header-container">
      <div className="cell small-12 medium-12 large-12">
        <h1>TAIBU Community Hub</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
          enim dui. Etiam hendrerit ultricies lectus, et vestibulum turpis
          placerat in.
        </p>
        <div className="input-group input-group-rounded">
          <input
            className="input-group-field"
            type="search"
            placeholder="Search resources"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div className="input-group-button">
            <input type="submit" className="button secondary" value="Search" />
          </div>
        </div>

        {ResourceData.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.category.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div className="resource-cats" key={key}>
              <p>{val.category}</p>
            </div>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
