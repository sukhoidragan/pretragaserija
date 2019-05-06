import React from "react";

const Header = props => {
  console.log(props);
  return (
      <div className="search">
        <h1 className="heading">TV-Shows</h1>
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
      </div>
    
  );
};

export default Header;
