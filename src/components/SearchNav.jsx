import React from "react";
import image from "../assets/cosmic-environment-with-millions-colorful-bright-lights.jpg";

function SearchNav() {
  return (
    <nav>
      <div className="nav__container">
        <figure className="nav__background--img--wrapper">
          <img src={image} alt="" className="nav__background--img" />
        </figure>
        <div className="row">
          <h1 className="search__title">Find the right game for you</h1>
          <div className="nav__search-bar">
            <input type="text" placeholder="Search" className="search__input" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SearchNav;
