import React, { Component } from "react";
import { getAllData } from "../Api";
import Header from "../partials/Header";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import SeriesList from "./SeriesList";

class Shows extends Component {
  state = {
    shows: [],
    series: [],
    seriesName: ""
  };

  componentDidMount() {
    getAllData.getAllShows().then(data => {
      console.log(data);
      this.setState({
        shows: data.map(show => {
          return {
            id: show.id,
            name: show.name,
            imageMedium: show.image.medium
          };
        })
      });
    });
  }
  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value });
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(res => res.json())
      .then(json => this.setState({ series: json }));
  };

  render() {
    return (
      <div>
        <Header
          searchFilter={this.onSeriesInputChange}
          inputValue={this.state.seriesName}
        />
        <SeriesList list={this.state.series} />

        <div className="container">
          {this.state.shows.map(show => {
            return (
              <Link
                style={{ textDecoration: "none", display: "inline-block" }}
                key={show.id}
                to={{ pathname: `/oneShowInfo/${show.id}` }}
              >
                <ul className="show_list" style={{ listStyleType: "none" }}>
                  <div className="show_box">
                    <img
                      className="show_img"
                      alt="tv-shows"
                      src={show.imageMedium}
                    />
                  </div>
                  <li className="show_name">{show.name}</li>
                </ul>
              </Link>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Shows;
