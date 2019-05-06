import React from "react";
import { Link } from "react-router-dom";

const SeriesListItem = ({ series }) => (
  <li className="link-list">
    <Link className="dropdown-list" to={`/series/${series.show.id}`}>{series.show.name}</Link>
  </li>
);

const SeriesList = props => {
  console.log(props)
  return (
    <React.Fragment>
      {props.list.length> 0 && <div className="dropdown">
      <ul className="dropdown-content">
        {props.list.map(serie => (
          <SeriesListItem series={serie} key={serie.show.id} />
        ))}
      </ul>
    </div>
      }
    </React.Fragment>
  );
};

export default SeriesList;