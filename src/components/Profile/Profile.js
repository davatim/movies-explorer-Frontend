import "./Profile.css";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import icon from "../../images/profile.svg";
import { useState, useEffect } from "react";
// import { useForm } from 'react-hook-form'
function Profile(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [isRed, setRed] = useState(false);
  function handleChange() {
    setRed(true);
  }
  function handleChangeEmail(e) {
    if (isRed) {
      setEmail(e.target.value);
    }
  }
  function handleChangeName(e) {
    if (isRed) {
      setName(e.target.value);
    }
  }
  function handleOpenData() {
    setIsOpen(true);
    props.handleActiveProfile();
  }
  return (
    <section className="profile">
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
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form>
        <div className="profile__container">
          <p className="profile__paragraph">Имя</p>
          <input
            required
            name="profile"
            minLength={2}
            maxLength={30}
            className="profile__input"
            placeholder="Имя"
            type="text"
            value={name}
            onChange={handleChangeName}
          ></input>
        </div>
        <div className="profile__container">
          <p className="profile__paragraph">E-mail</p>
          <input
            required
            name="profile"
            className="profile__input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleChangeEmail}
          ></input>
        </div>
      </form>
      <button
        className={isRed ? "profile__disabled" : "profile__edit"}
        type="button"
        onClick={handleChange}
      >
        Редактировать
      </button>
      <Link to="/" className={isRed ? "profile__disabled" : "profile__signout"}>
        Выйти из аккаунта
      </Link>
      <span className="name-input-error profile__item-error profile__item-error_field_name"></span>
      <button
        type="submit"
        className={isRed ? "profile__save" : "profile__disabled"}
      >
        Сохранить
      </button>
    </section>
  );
}

export default Profile;
