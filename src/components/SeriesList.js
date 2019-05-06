import React from "react";
import { Link } from "react-router-dom";

const SeriesList = props => {
  console.log(props);
  return (
    <div>
      {props.list.length > 0 && (
        <div className="dropdown">
          <ul className="dropdown-content">
            {props.list.map(serie => (
              <li className="link-list" series={serie} key={serie.show.id}>
                <Link className="dropdown-list" to={`/series/${serie.show.id}`}>
                  {serie.show.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SeriesList;
