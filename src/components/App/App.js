import "./App.css";
// import { Routes, Route } from "react-router-dom";
import { Route, Routes, Navigate, useNavigate  } from 'react-router-dom';
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies";
import { useState, useEffect } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ServerError from "../ServerError/ServerError";

function App() {
  
  // const [loggedIn, setLoggedIn] = useState(false);
  const loggedIn = useState(false);
  const [isGlavnay, setIsGlavnay] = useState(false);
  const [isFilms, setIsFilms] = useState(false);
  const [isSaveFilm, setIsSaveFilm] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [cards, setCards] = useState([]);
  const [indexCard, setIndexCard] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isKorot, setIsKorot] = useState(false);
  const [saveCards, setSaveCards] = useState([]);
  
  function handleKorot() {
    if (isKorot) {
      setIsKorot(false);
    } else {
      setIsKorot(true);
    }
  }
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    setCards([
      {
        duration: 45,
        image:
          "https://sun6-22.userapi.com/s/v1/ig2/av-Yd7w9v24eOVjXDKRtCu5n1NFFPFiqjxEPRjzRNO2BKw3ETDjwz0qneImP7_P-X9BMvdeZFhnygZ2lps1yYy_I.jpg?size=854x854&quality=95&crop=80,28,854,855&ava=1",
        nameRU: "33 слова о дизайне",
      },
      {
        duration: 102,
        image: "https://img.youtube.com/vi/DpDkewhiZiI/mqdefault.jpg",
        nameRU: "Киноальманах «100 лет дизайна»",
      },
      {
        duration: 102,
        image: "https://i.ytimg.com/vi/Q1NZZjR9QTI/mqdefault.jpg",
        nameRU: "В погоне за Бенкси",
      },
      {
        duration: 102,
        image: "https://i.ytimg.com/vi/PUsy5RObL2U/sddefault.jpg",
        nameRU: "Баския: Взрыв реальности",
      },
      {
        duration: 102,
        image:
          "https://sun9-86.userapi.com/c626426/v626426044/5cf39/JgebfYqIAm0.jpg",
        nameRU: "Бег это свобода",
      },
      {
        duration: 102,
        image:
          "https://www.worldsrc.net/thumb/films/thumb_e91d_WorldSrc.org_Screen_2_The_Booksellers.png",
        nameRU: "Книготорговцы",
      },
      {
        duration: 102,
        image:
          "https://i.mycdn.me/i?r=AyENid1PUfRjbfTS8I1wumQ--vUmUsy3f2XXC45ZBWYzHw",
        nameRU: "Когда я думаю о Германии ночью",
      },
      {
        duration: 25,
        image:
          "https://eatmusic.ru/wp-content/uploads/2017/10/maxresdefault-640x360.jpg",
        nameRU: "Gimme Danger: История Игги и The Stooges",
      },
      {
        duration: 20,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/4d0a7e99-fba6-491f-bd49-e48a71290843/1200x630",
        nameRU: "Дженис: Маленькая девочка грустит",
      },
      {
        duration: 102,
        image:
          "https://avatars.dzeninfra.ru/get-zen_doc/96780/pub_64dcd2cdc311451c1af8a14c_64dcd316a9216a3544390879/scale_1200",
        nameRU: "Кот, соберись перед прыжком",
      },
      {
        duration: 55,
        image:
          "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/882b3d6d-e72c-41e1-9d0f-a3119f9a05b1/1200x630",
        nameRU: "Пи Джей Харви: A dog called money",
      },
      {
        duration: 102,
        image:
          "https://kinoprim.ru/sites/default/files/styles/f/public/fotootchet-2020-09/MAKINGWAVES_ONESHEET_EXTRA_1%5B1%5D_resize.jpg?itok=8_bucQ5x",
        nameRU: "По волнам: Искусство звука в кино",
      },
      {
        duration: 102,
        image: "https://s00.yaplakal.com/pics/pics_preview/5/4/0/15963045.jpg",
        nameRU: "добро пожаловать в zомбилэнд",
      },
      {
        duration: 102,
        image: "https://www.uyghur.tv/wp-content/uploads/Ashpez-Chashkan.jpg",
        nameRU: "Рататуй",
      },
      {
        duration: 102,
        image:
          "https://i.mycdn.me/i?r=AyENid1PUfRjbfTS8I1wumQ-EPpxjjg8Aw_tnKE-Vy894w",
        nameRU: "Ликвидация",
      },
      {
        duration: 55,
        image: "https://i.ytimg.com/vi/BPP_BEwSpuc/hqdefault.jpg",
        nameRU: "Нация Z",
      },
    ]);
    setSaveCards([
      {
        duration: 45,
        image:
          "https://sun6-22.userapi.com/s/v1/ig2/av-Yd7w9v24eOVjXDKRtCu5n1NFFPFiqjxEPRjzRNO2BKw3ETDjwz0qneImP7_P-X9BMvdeZFhnygZ2lps1yYy_I.jpg?size=854x854&quality=95&crop=80,28,854,855&ava=1",
        nameRU: "33 слова о дизайне",
      },
      {
        duration: 102,
        image: "https://img.youtube.com/vi/DpDkewhiZiI/mqdefault.jpg",
        nameRU: "Киноальманах «100 лет дизайна»",
      },
      {
        duration: 102,
        image: "https://i.ytimg.com/vi/Q1NZZjR9QTI/mqdefault.jpg",
        nameRU: "В погоне за Бенкси",
      },
    ]);
    if (width > 1024) {
      setIndexCard(16);
    } else if (width > 680) {
      setIndexCard(8);
    } else {
      setIndexCard(5);
    }

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
          // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClickMoreCard() {
    if (indexCard + 8 >= cards.length) {
      setIndexCard(cards.length);
      setIsDisabled(true);
    } else {
      setIndexCard(indexCard + 8);
    }
  }
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
    <div className="App">
      <div className="page">
        <Routes>
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
              <Movies
                handleActiveFilms={handleActiveFilms}
                isGlavnay={isGlavnay}
                isFilms={isFilms}
                isSaveFilm={isSaveFilm}
                isProfile={isProfile}
                cards={cards}
                width={width}
                indexCard={indexCard}
                handleClickMoreCard={handleClickMoreCard}
                isDisabled={isDisabled}
                handleKorot={handleKorot}
                isKorot={isKorot}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                handleActiveSaveFilm={handleActiveSaveFilm}
                isGlavnay={isGlavnay}
                isFilms={isFilms}
                isSaveFilm={isSaveFilm}
                isProfile={isProfile}
                cards={saveCards}
                width={width}
                indexCard={indexCard}
                handleClickMoreCard={handleClickMoreCard}
                isDisabled={isDisabled}
                handleKorot={handleKorot}
                isKorot={isKorot}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                loggedIn={loggedIn}
                handleActiveProfile={handleActiveProfile}
                isGlavnay={isGlavnay}
                isFilms={isFilms}
                isSaveFilm={isSaveFilm}
                isProfile={isProfile}
              />
            }
          />
          <Route path="/" element={<Main loggedIn={loggedIn} />} />

          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/error" element={<ServerError />} />
          <Route exact path="*" element={loggedIn ? <Navigate to='/error' replace /> : <Navigate to="/movies" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
