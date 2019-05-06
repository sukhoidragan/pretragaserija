class GetAllData {
  getAllShows = () => {
    return fetch(`http://api.tvmaze.com/shows`)
    .then(res => res.json());
  };

  getOneShow = id => {
    return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
    .then(res => res.json());
  };
}

export const getAllData = new GetAllData();
