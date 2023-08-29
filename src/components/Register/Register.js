import "./Register.css";
import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img src={logo} alt="логотип" className="login__logo"></img>
        </Link>
        <h1 className="login__title">Добро пожаловать!</h1>
        <form className="form">
          <p className="form__subtitle">Имя</p>
          <input
            placeholder="Имя"
            className="login__input"
            name="username"
            required
            id="username"
            minLength={2}
            maxLength={30}
          />
          <p className="form__subtitle">E-mail</p>
          <input
            type="email"
            placeholder="Email"
            className="login__input"
            name="username"
            required
            id="username"
          />
          <span className="mesto-name-error form__item-error form__item-error_field_name"></span>
          <p className="form__subtitle">Пароль</p>
          <input
            type="password"
            placeholder="Пароль"
            className="login__input"
            name="password"
            id="password"
            required
            minLength={2}
            maxLength={40}
          />
          <span className="mesto-name-error form__item-error form__item-error_field_name"></span>
          <button className="login__save login__save_register" type="submit">
            Зарегистрироваться
          </button>
        </form>
        <Link to="/signin" className="login__signup">
          Уже зарегистрированы?{" "}
          <span className="login__another-signup login__another-signup_active">
            Войти
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Register;
