import "./SavedMovies.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { api } from "../../utils/ApiMain";
import icon from "../../images/profile.svg";
import { useState, useEffect } from "react";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
function SavedMovies(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenData() {
    setIsOpen(true);
    props.handleActiveSaveFilm();
  }
  useEffect(() => {
    props.setSaveCardsKorot(props.saveCards);
    props.setNameFilm("");
    props.setIsKorotSaveFilms(false);
    api
      .getDataSaveCards(props.setIsLoadingSaveCards)
      .then((data) => {
        props.setSaveCards(data);
        props.setSaveCardsKorot(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="movies">
      <PopupNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isGlavnay={props.isGlavnay}
        isFilms={props.isFilms}
        isSaveFilm={props.isSaveFilm}
        isProfile={props.isProfile}
      />
      <Header isBlue={false}>
        <Link to="/movies" className="header__link header__link_film">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__link header__link_save">
          Сохранённые фильмы
        </Link>
        <Link to="/profile" className="header__link header__link_profile">
          <p>Аккаунт</p>
          <div className="header__circle">
            <img src={icon} alt="человек" className="header__img" />
          </div>
        </Link>
        <button
          type="button"
          className={
            isOpen ? "header__button" : "header__button header__button_active"
          }
          onClick={handleOpenData}
        ></button>
      </Header>
      <main>
        <SearchForm
          nameFilm={props.nameFilm}
          isKorot={props.isKorot}
          handleKorot={props.handleKorot}
          setNameFilm={props.setNameFilm}
          handleSubmitFilms={props.handleSubmitFilms}
        />
        <div className="movies__line" />
        {props.isLoading ? (
          <Preloader />
        ) : props.cards?.length > 0 ? (
          <MoviesCardList
            nameFilm={props.nameFilm}
            setSaveCardsKorot={props.setSaveCardsKorot}
            setSaveCards={props.setSaveCards}
            cards={props.cards}
            loggedIn={props.loggedIn}
            isKorot={props.isKorot}
            isSaveFilm={true}
            saveCards={props.saveCards}
            roundedVisibleCardCount={props.cards.length}
            setIsLoadingSaveCards={props.setIsLoadingSaveCards}
          />
        ) : props.cards?.length === 0 ? (
          <p className="movies__notfound">Список пуст</p>
        ) : (
          <p className="movies__notfound">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </p>
        )}
      </main>
      <Footer />
    </section>
  );
}

export default SavedMovies;
