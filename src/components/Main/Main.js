import "./Main.css";
import ring from "../../images/profile__img.png";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation.js";
import { Link } from "react-router-dom";
import icon from "../../images/profile.svg";
import { useState } from "react";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
function Main(props) {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenData() {
    setIsOpen(true);
    props.handleActiveGlavnay();
  }

  return (
    <>
      <PopupNavigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isGlavnay={props.isGlavnay}
        isFilms={props.isFilms}
        isSaveFilm={props.isSaveFilm}
        isProfile={props.isProfile}
      />
      <Header isBlue={true}>
        {props.loggedIn ? (
          <>
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
                isOpen
                  ? "header__button"
                  : "header__button header__button_active"
              }
              onClick={handleOpenData}
            ></button>
          </>
        ) : (
          <Navigation />
        )}
      </Header>
      <main className="main">
        <div className="main__profile">
          <h1 className="main__another-profile main__another-profile_title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <img
            className="main__another-profile main__another-profile_img"
            src={ring}
            alt="ring"
          ></img>
        </div>
        <Promo />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;
