import React, { Component } from "react";
import { getAllData } from "../Api";
import OneShowHeader from "../partials/OneShowHeader";
import Footer from "../partials/Footer";

class OneShowInfo extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    console.log(this.props);
    getAllData.getOneShow(this.props.match.params.id)
      .then(json => this.setState({ show: json }));
  }

  getUnique = (arr, comp) => {
    const unique = arr
      .map(e => e[comp])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  };

  render() {
    const { show } = this.state;
    console.log(show);
    let actors = null;
    if (show && show._embedded && show._embedded.cast) {
      actors = Object.values(show._embedded.cast);
    }
    console.log(actors);

    let persons = null;
    if (actors) {
      persons = actors.map(actor => actor.person);
    }
    console.log(persons);

    let filteredPersons = null;
    if (persons) {
      filteredPersons = this.getUnique(persons, "id");
    }
    console.log(filteredPersons);

    return (
      <div>
        <OneShowHeader />

        {show && (
          <div className="oneShow_box">
            <div className="oneShow_box-1">
              <h1 className="oneShow_name">{show.name}</h1>
              {show.image && (
              <img
                className="oneShow_img"
                alt="Show"
                src={show.image.original}
              />
              )}
              {show.summary && (
                <p className="oneShow_cast-summary">
                  {show.summary
                    .replace(/(<p[^>]+?>|<p>|<\/p>)/gim, "")
                    .replace(/(<b[^>]+?>|<b>|<\/b>)/gim, "")
                    .replace(/(<i[^>]+?>|<i>|<\/i>)/gim, "")}
                </p>
              )}
            </div>

            <div className="oneShow_box-2">
              <div className="oneShow_box-seasons">
                <h2 className="oneShow_seasons">
                  Seasons ({show._embedded.seasons.length})
                </h2>
                <ul className="oneShow_list" style={{ listStyleType: "none" }}>
                  {show._embedded.seasons.map(s => {
                    console.log(s);
                    return (
                      <li className="oneShow_list-date" key={s.id}>
                        {s.premiereDate} : {s.endDate}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="oneShow_box-cast">
                <h2 className="oneShow_cast">Cast</h2>
                <ul
                  className="oneShow_cast-list"
                  style={{ listStyleType: "none", fontStyle: "italic" }}
                >
                  {filteredPersons.map(e => {
                    return (
                      <li className="oneShow_cast-name" key={e.id}>
                        {e.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default OneShowInfo;
