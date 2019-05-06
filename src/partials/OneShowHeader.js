import React from "react";
import { Link } from "react-router-dom";

const OneShowHeader = () => {
  return (
    <div className="oneShow_header">
      <Link to="/" className="oneShow_heading_link">
        <h1 className="heading">TV-Shows</h1>
      </Link>
    </div>
  );
};

export default OneShowHeader;
