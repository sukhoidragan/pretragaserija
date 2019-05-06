import React, { Component } from "react";
import { getAllData } from "../Api";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

class OneShowInfo extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    console.log(this.props);
    getAllData
      .getOneShow(this.props.match.params.id)
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    console.log(show);

    return (
      <div>
        <Header
          searchFilter={this.searchFilter}
          inputValue={this.state.inputValue}
        />
        {show && (
          <div className="oneShow_box">
          <div className="oneShow_box-1">
            <h1 className="oneShow_name">{show.name}</h1>
            <img className="oneShow_img" alt="Show" src={show.image.original} />
            {show.summary && (
              <p className="oneShow_cast-summary">{show.summary.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "").replace(/(<b[^>]+?>|<b>|<\/b>)/img, "").replace(/(<i[^>]+?>|<i>|<\/i>)/img, "")}</p>
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
                      {s.premiereDate} - {s.endDate}
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
                {show._embedded.cast.map(e => {
                  return (
                    <li className="oneShow_cast-name" key={e.person.id}>
                      {e.person.name}
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
