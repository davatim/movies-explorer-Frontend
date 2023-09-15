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
  getUserData() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  sendDataProfile(name, email, setIsDisabled) {
    setIsDisabled(true);
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  addClickLike(card) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      withCredentials: true,
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(card),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  deleteClickLike(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      withCredentials: true,
      credentials: "include",
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
  getDataSaveCards(setIsLoadingSaveCards) {
    setIsLoadingSaveCards(true);
    return fetch(`${this._url}/movies`, {
      method: "GET",
      credentials: "include",
      withCredentials: true,
      headers: this._headers,
    }).then((res) => {
      setIsLoadingSaveCards(false);
      return this._getResponseData(res);
    });
  }
  exitPage() {
    return fetch(`${this._url}/logout`, {
      method: "POST",
      withCredentials: true,
      credentials: "include",
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }
}

export const api = new Api({
  // url: "https://api.davatimdiplom.nomoredomainsicu.ru",
  url: "http://localhost:4000",
  // url: "http://127.0.0.1:4000",

  headers: {
    "Content-Type": "application/json",
  },
});
