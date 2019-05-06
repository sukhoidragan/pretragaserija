import React from "react";
import { Link } from "react-router-dom";
// import SeriesList from "../components/SeriesList";

const Header = props => {
  console.log(props);
  return (
  
      <div className="search">
        <Link to="/" className="heading_link">
          <h1 className="heading">TV-Shows</h1>
        </Link>
        <div className="search_form">
          <input
            className="search_input"
            onChange={props.searchFilter}
            value={props.inputValue}
            type="search"
            placeholder="Search here..."
            name="search"
            autoComplete="off"
          />
        </div>
      {/* <SeriesList list={props.list} /> */}
      </div>
    
  );
};

export default Header;
