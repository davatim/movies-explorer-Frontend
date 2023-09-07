import "./Profile.css";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import icon from "../../images/profile.svg";
import { useState, useEffect, useContext } from "react";
import { api } from "../../utils/ApiMain.js";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import constants from "../../utils/constants";

function Profile(props) {
  const { EMAIL_REGEXP } = constants;
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  let currentUser = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  function validateButton(email, name) {
    if (
      email.length >= 2 &&
      EMAIL_REGEXP.test(email) &&
      name.length >= 2 &&
      name.length <= 30 &&
      (currentUser.name !== name || currentUser.email !== email)
    ) {
      props.setIsDisabled(false);
    } else {
      props.setIsDisabled(true);
    }
  }
  function signOut() {
    api
      .exitPage()
      .then((data) => {
        console.log("signOut", data);
        localStorage.removeItem("token");
        props.setLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleChange() {
    props.setRed(true);
    props.setIsDisabled(true);
    props.setErrProfile("");
  }
  function handleChangeEmail(e) {
    if (props.isRed) {
      setEmail(e.target.value);
      validateButton(e.target.value, name);
      if (e.target.value === "") {
        setErrorEmail("Пожалуйста, заполните поле");
      } else if (EMAIL_REGEXP.test(e.target.value) !== true) {
        setErrorEmail("Пожалуйста, введите адрес электронной почты");
      } else {
        setErrorEmail("");
      }
    }
  }
  function handleChangeName(e) {
    if (props.isRed) {
      validateButton(email, e.target.value);
      setName(e.target.value);
      if (e.target.value.length < 2 || e.target.value.length > 30) {
        setErrorName("Имя должно содержать не менее 2 и не более 30 символов");
      } else {
        setErrorName("");
      }
    }
  }
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.handleUpdateUser({
      name,
      email,
    });
  }
  function handleOpenData() {
    setIsOpen(true);
    props.handleActiveProfile();
  }
  useEffect(() => {
    props.setRed(false);
  }, []);
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
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
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
          <span className="form__profile_error">{errorName}</span>
          <div className="profile__container profile__container_last-child">
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
          <span className="form__profile_error">{errorEmail}</span>
        </form>
        <span className="form_register_error">{props.errProfile}</span>
        {props.isRed ? (
          <button
            disabled={props.isDisabled}
            onClick={handleSubmit}
            type="submit"
            className={
              props.isDisabled
                ? "profile__save login__save_disabled"
                : "profile__save"
            }
          >
            Сохранить
          </button>
        ) : (
          <>
            <button
              className="profile__edit"
              type="button"
              onClick={handleChange}
            >
              Редактировать
            </button>
            <Link onClick={signOut} to="/" className="profile__signout">
              Выйти из аккаунта
            </Link>
          </>
        )}
      </main>
    </section>
  );
}

export default Profile;
