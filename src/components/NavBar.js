import React, { useState } from "react";

const NavBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const categories = ["ipl", "finance", "politics"];

  return (
    <nav>
      <div className="main-nav container flex">
        <a href="/" className="company-logo" onClick={() => onSearch("India")}>
          <img src="Logo.webp" alt="company logo" />
        </a>
        <div className="nav-links">
          <ul className="flex">
            {categories.map(cat => (
              <li key={cat} className="hover-link nav-item" onClick={() => onSearch(cat)}>
                {cat.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
        <div className="search-bar flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. Science"
            className="news-input"
          />
          <button onClick={() => onSearch(input)} className="search-button">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
