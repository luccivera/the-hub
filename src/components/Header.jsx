import React from "react";

function Header() {
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
          />
          <div className="input-group-button">
            <input type="submit" className="button secondary" value="Search" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
