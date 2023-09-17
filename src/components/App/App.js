import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ServerError from "../ServerError/ServerError";
import * as duckAuth from "../../utils/duckAuth.js";
import ProtectedRouteElement from "../ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { api } from "../../utils/ApiMain.js";
import { apiMovies } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const user = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSaveCards, setIsLoadingSaveCards] = useState(false);
  const [nameFilm, setNameFilm] = useState("");
  const [disabledRegister, setIsDisabledRegister] = useState(true);
  const [disabledLogin, setIsDisabledLogin] = useState(true);
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [errProfile, setErrProfile] = useState("");
  const [errLogin, setErrLogin] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [useremail, setEmailRegister] = useState("");
  const [username, setNameRegister] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isGlavnay, setIsGlavnay] = useState(false);
  const [isFilms, setIsFilms] = useState(false);
  const [isSaveFilm, setIsSaveFilm] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [cards, setCards] = useState([]);
  const [isKorotSaveFilms, setIsKorotSaveFilms] = useState(false);
  const [nameFilmSave, setNameFilmSave] = useState("");
  const [isRed, setRed] = useState(false);
  const [isKorot, setIsKorot] = useState(false);
  const [saveCards, setSaveCards] = useState([]);
  const [saveCardsKorot, setSaveCardsKorot] = useState([]);
  const [cardsKorot, setCardsKorot] = useState([]);
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isInitial, setIsInitial] = useState(false);

  function handleKorot(e) {
    e.preventDefault();
    let data_new = cards.filter(function (item) {
      return (
        item.nameRU.toLowerCase().includes(nameFilm.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(nameFilm.toLowerCase())
      );
    });
    if (isKorot) {
      localStorage.setItem(currentUser.email, [nameFilm, false]);
      setIsKorot(false);
    } else {
      data_new = data_new.filter(function (item) {
        return item.duration <= 40;
      });
      localStorage.setItem(currentUser.email, [nameFilm, true]);

      setIsKorot(true);
    }
    setCardsKorot(data_new);
  }
  function handleKorotSave(e) {
    e.preventDefault();
    let data_new = saveCards.filter(function (item) {
      return (
        item.nameRU.toLowerCase().includes(nameFilmSave.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(nameFilmSave.toLowerCase())
      );
    });
    if (isKorotSaveFilms) {
      setIsKorotSaveFilms(false);
    } else {
      data_new = data_new.filter(function (item) {
        return item.duration <= 40;
      });
      setIsKorotSaveFilms(true);
    }
    setSaveCardsKorot(data_new);
  }
  const tokenCheck = () => {
    setIsLoading(true);
    // если у пользователя есть токен в localStorage,
    // эта функция проверит, действующий он или нет
    duckAuth
      .getContent()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
        }
        // авторизуем пользователя
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        setIsInitial(true);
      });
  };
  function handleSubmitFilms(e) {
    e.preventDefault();
    localStorage.setItem(currentUser.email, [nameFilm, isKorot]);
    let data_new = cards.filter(function (item) {
      return (
        item.nameRU.toLowerCase().includes(nameFilm.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(nameFilm.toLowerCase())
      );
    });
    if (isKorot) {
      data_new = data_new.filter(function (item) {
        return item.duration <= 40;
      });
    }
    setCardsKorot(data_new);
  }
  function handleSubmitSavedFilms(e) {
    e.preventDefault();

    let data_new = saveCards.filter(function (item) {
      return (
        item.nameRU.toLowerCase().includes(nameFilmSave.toLowerCase()) ||
        item.nameEN.toLowerCase().includes(nameFilmSave.toLowerCase())
      );
    });
    if (isKorotSaveFilms) {
      data_new = data_new.filter(function (item) {
        return item.duration <= 40;
      });
    }
    setSaveCardsKorot(data_new);
  }
  useEffect(() => {
    const apiProfileDefult = api.getUserData();
    apiProfileDefult
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
    api
      .getDataSaveCards(setIsLoadingSaveCards)
      .then((data) => {
        setSaveCards(data);
        setSaveCardsKorot(data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (localStorage.getItem(currentUser.email) !== null) {
      const dataFilm = localStorage.getItem(currentUser.email).split(",");
      if (currentUser.email) {
        setNameFilm(dataFilm[0]);
        setIsKorot(JSON.parse(dataFilm[1]));
        apiMovies
          .getCardsData(setIsLoading)
          .then((data) => {
            if (dataFilm[0] === "") {
              setCards(data);
              setCardsKorot([]);
            } else {
              let data_new = data.filter(function (item) {
                return (
                  item.nameRU
                    .toLowerCase()
                    .includes(dataFilm[0].toLowerCase()) ||
                  item.nameEN.toLowerCase().includes(dataFilm[0].toLowerCase())
                );
              });
              if (JSON.parse(dataFilm[1])) {
                data_new = data_new.filter(function (item) {
                  return item.duration <= 40;
                });
              }
              setCards(data);
              setCardsKorot(data_new);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [loggedIn, currentUser.email]);

  useEffect(() => {
    setNameFilmSave("");
    tokenCheck();
  }, []);

  function handleUpdateUser({ name, email }) {
    api
      .sendDataProfile(name, email, setIsDisabled)
      .then((data) => {
        setErrProfile("Запрос прошёл успешно!");
        setCurrentUser(data);
        setRed(false);
      })
      .catch((err) => {
        setRed(true);
        if (err.status === 409) {
          setErrProfile("Пользователь с таким email уже существует");
        } else {
          setErrProfile("При обновлении профиля произошла ошибка");
        }
      });
  }

  function handleSubmitRegister(passwordRegister, useremail, username) {
    // e.preventDefault();
    duckAuth
      .register(passwordRegister, useremail, username, setIsDisabledRegister)
      .then(({ _id, email, name }) => {
        handleSubmitLogin(email, passwordRegister);
      })
      .catch((err) => {
        setIsDisabledRegister(true);
        if (err.status === 409) {
          setErrorRegister("Пользователь с таким email уже существует");
        } else {
          setErrorRegister("При регистрации пользователя произошла ошибка");
        }
        console.log(err);
      });
  }

  const handleSubmitLogin = (emailLogin, passwordLogin) => {
    // e.preventDefault();
    duckAuth
      .authorize(passwordLogin, emailLogin, setIsDisabledLogin)
      .then((data) => {
        setLoggedIn(true);
        handleUpdateUser(data)
        setErrLogin("");
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsDisabledLogin(true);
        if (err.status === 401) {
          setErrLogin("Вы ввели неправильный логин или пароль");
        } else if (err.status === 429) {
          setErrLogin("Превышен лимит запросов");
        } else {
          setErrLogin(
            "При авторизации произошла ошибка. Переданный токен некорректен."
          );
        }
      });
  };

  function handleActiveGlavnay() {
    setIsGlavnay(true);
    setIsFilms(false);
    setIsSaveFilm(false);
    setIsProfile(false);
  }
  function handleActiveFilms() {
    setIsGlavnay(false);
    setIsFilms(true);
    setIsSaveFilm(false);
    setIsProfile(false);
  }
  function handleActiveSaveFilm() {
    setIsGlavnay(false);
    setIsFilms(false);
    setIsSaveFilm(true);
    setIsProfile(false);
  }
  function handleActiveProfile() {
    setIsGlavnay(false);
    setIsFilms(false);
    setIsSaveFilm(false);
    setIsProfile(true);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          {!isInitial ? (
            <Preloader />
          ) : (
            <Routes>
              <Route path="*" element={<Navigate to="/404" />}></Route>
              <Route path="/404" element={<ServerError />} />
              <Route
                path="/"
                element={
                  <Main
                    loggedIn={loggedIn}
                    handleActiveGlavnay={handleActiveGlavnay}
                    isGlavnay={isGlavnay}
                    isFilms={isFilms}
                    isSaveFilm={isSaveFilm}
                    isProfile={isProfile}
                  />
                }
              />
              <Route
                path="/movies"
                element={
                  <ProtectedRouteElement
                    loggedIn={loggedIn}
                    element={Movies}
                    setSaveCardsKorot={setSaveCardsKorot}
                    setSaveCards={setSaveCards}
                    isLoading={isLoading}
                    nameFilm={nameFilm}
                    handleSubmitFilms={handleSubmitFilms}
                    setNameFilm={setNameFilm}
                    handleActiveFilms={handleActiveFilms}
                    isGlavnay={isGlavnay}
                    isFilms={isFilms}
                    isSaveFilm={isSaveFilm}
                    isProfile={isProfile}
                    cards={cardsKorot}
                    saveCards={saveCards}
                    handleKorot={handleKorot}
                    isKorot={isKorot}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRouteElement
                    element={SavedMovies}
                    setSaveCardsKorot={setSaveCardsKorot}
                    isLoading={isLoadingSaveCards}
                    setIsLoadingSaveCards={setIsLoadingSaveCards}
                    setIsKorotSaveFilms={setIsKorotSaveFilms}
                    setSaveCards={setSaveCards}
                    handleActiveSaveFilm={handleActiveSaveFilm}
                    isGlavnay={isGlavnay}
                    isFilms={isFilms}
                    isSaveFilm={isSaveFilm}
                    isProfile={isProfile}
                    cards={saveCardsKorot}
                    saveCards={saveCards}
                    loggedIn={loggedIn}
                    nameFilm={nameFilmSave}
                    setNameFilm={setNameFilmSave}
                    handleKorot={handleKorotSave}
                    isKorot={isKorotSaveFilms}
                    handleSubmitFilms={handleSubmitSavedFilms}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRouteElement
                    element={Profile}
                    loggedIn={loggedIn}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                    setErrProfile={setErrProfile}
                    isRed={isRed}
                    setRed={setRed}
                    errProfile={errProfile}
                    handleUpdateUser={handleUpdateUser}
                    setLoggedIn={setLoggedIn}
                    handleActiveProfile={handleActiveProfile}
                    isGlavnay={isGlavnay}
                    isFilms={isFilms}
                    isSaveFilm={isSaveFilm}
                    isProfile={isProfile}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <Login
                    setErrLogin={setErrLogin}
                    setIsDisabledLogin={setIsDisabledLogin}
                    disabledLogin={disabledLogin}
                    errLogin={errLogin}
                    emailLogin={emailLogin}
                    setEmailLogin={setEmailLogin}
                    passwordLogin={passwordLogin}
                    setPasswordLogin={setPasswordLogin}
                    onSubmit={handleSubmitLogin}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <Register
                    setIsDisabledRegister={setIsDisabledRegister}
                    disabledRegister={disabledRegister}
                    errorRegister={errorRegister}
                    username={username}
                    setEmailRegister={setEmailRegister}
                    isRegister={isRegister}
                    setPasswordRegister={setPasswordRegister}
                    passwordRegister={passwordRegister}
                    setNameRegister={setNameRegister}
                    useremail={useremail}
                    handleSubmitRegister={handleSubmitRegister}
                    setIsRegister={setIsRegister}
                    password={passwordRegister}
                    setErrorRegister={setErrorRegister}
                    onSubmit={handleSubmitRegister}
                  />
                }
              />
            </Routes>
          )}
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
