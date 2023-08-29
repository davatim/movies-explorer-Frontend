import "./Movies.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import icon from "../../images/profile.svg";
import { useState, useEffect } from "react";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
function Movies(props) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenData() {
    setIsOpen(true);
    props.handleActiveFilms();
  }
  return (
    <div  className="body">
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
            <img src={icon} alt="иконка" className="header__img" />
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
      <div className="movies">
        <PopupNavigation
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isGlavnay={props.isGlavnay}
          isFilms={props.isFilms}
          isSaveFilm={props.isSaveFilm}
          isProfile={props.isProfile}
        />
        <main>
          <SearchForm isKorot={props.isKorot} handleKorot={props.handleKorot} />
          <div className="movies__line"></div>
          <MoviesCardList
            isDisabled={props.isDisabled}
            cards={props.cards}
            width={props.width}
            indexCard={props.indexCard}
            handleClickMoreCard={props.handleClickMoreCard}
            isKorot={props.isKorot}
          >
            <button
              type="button"
              disabled={props.isDisabled}
              onClick={props.handleClickMoreCard}
              className="places__button"
              isSaveFilm={false}
            >
              Ещё
            </button>
          </MoviesCardList>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
