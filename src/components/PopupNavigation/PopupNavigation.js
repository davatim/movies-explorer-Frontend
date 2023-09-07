import "./PopupNavigation.css";
import { Link } from "react-router-dom";
import icon from "../../images/profile.svg";
function PopupNavigation(props) {
  function handleCloseData() {
    props.setIsOpen(false);
  }

  return (
    <div className={props.isOpen ? "popup popup_opened" : "popup"}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={handleCloseData}
        ></button>
        <Link
          to="/"
          className={
            props.isGlavnay
              ? "popup__link popup__link_glavnay popup__link_active"
              : "popup__link popup__link_glavnay"
          }
        >
          Главная
        </Link>
        <Link
          to="/movies"
          className={
            props.isFilms
              ? "popup__link popup__link_film popup__link_active"
              : "popup__link popup__link_film"
          }
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={
            props.isSaveFilm
              ? "popup__link popup__link_save popup__link_active"
              : "popup__link popup__link_save"
          }
        >
          Сохранённые фильмы
        </Link>
        <Link
          to="/profile"
          className={
            props.isProfile
              ? "popup__link popup__link_profile popup__link_active"
              : "popup__link popup__link_profile"
          }
        >
          <p className="popup__subtitle">Аккаунт</p>
          <div className="popup__circle">
            <img src={icon} alt="человек" className="popup__img" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PopupNavigation;
