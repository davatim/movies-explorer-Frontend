import "./Movies.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import icon from "../../images/profile.svg";
import { useState } from "react";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import constants from "../../utils/constants";
import { useMediaQuery } from "../../hooks/useMediaQuery";
function Movies(props) {
  const {
    LG_ROW_CARD_COUNT,
    MD_ROW_CARD_COUNT,
    SM_ROW_CARD_COUNT,
    LG_INITIAL_CARD_COUNT,
    MD_INITIAL_CARD_COUNT,
    SM_INITIAL_CARD_COUNT,
    SMG_ROW_CARD_COUNT,
    SMG_INITIAL_CARD_COUNT
  
  } = constants;
  const isDesktop = useMediaQuery("(min-width: 1281px)");
  const isLargeTablet = useMediaQuery("(min-width: 1025px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isLargeTablet
    ? SMG_ROW_CARD_COUNT
    : isTablet
    ? MD_ROW_CARD_COUNT
    : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isLargeTablet
    ? SMG_INITIAL_CARD_COUNT
    : isTablet

    ? MD_INITIAL_CARD_COUNT
    : SM_INITIAL_CARD_COUNT;
  const [visibleCardCount, setVisibleCardCount] = useState(initialCardCount);
  const roundedVisibleCardCount =
    Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount;
  const isDisabled =
    roundedVisibleCardCount === props.cards.length ||
    roundedVisibleCardCount > props.cards.length;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
    }

    if (isLargeTablet) {
      return setVisibleCardCount(visibleCardCount + SMG_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + 2);
  };
  function handleOpenData() {
    setIsOpen(true);
    props.handleActiveFilms();
  }

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
          handleSubmitFilms={props.handleSubmitFilms}
          nameFilm={props.nameFilm}
          setNameFilm={props.setNameFilm}
          isKorot={props.isKorot}
          handleKorot={props.handleKorot}
        />
        <div className="movies__line"></div>
        {props.isLoading ? (
          <Preloader />
        ) : props.cards.length > 0 ? (
          <MoviesCardList
            isKorot={props.isKorot}
            nameFilm={props.nameFilm}
            setSaveCardsKorot={props.setSaveCardsKorot}
            handleSubmitFilms={props.handleSubmitFilms}
            setSaveCards={props.setSaveCards}
            roundedVisibleCardCount={roundedVisibleCardCount}
            loggedIn={props.loggedIn}
            cards={props.cards}
            saveCards={props.saveCards}
          >
            <button
              type="button"
              disabled={isDisabled}
              onClick={handleClick}
              className={isDisabled ? "places_disabled" : "places__button"}
              isSaveFilm={false}
            >
              Ещё
            </button>
          </MoviesCardList>
        ) : props.cards.length === 0 ? (
          <p className="movies__notfound">Ничего не найдено</p>
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

export default Movies;
