class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ status: res.status });
  }
  getCardsData(setIsLoading) {
    setIsLoading(true);
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      setIsLoading(false);
      return this._getResponseData(res);
    });
  }
}

export const apiMovies = new Api({
  url: "https://api.nomoreparties.co/beatfilm-movies/",
  headers: { 
    "Content-Type": "application/json",
  },
});
