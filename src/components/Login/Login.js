import "./Login.css";
import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import constants from "../../utils/constants";
function Login(props) {
  const { EMAIL_REGEXP } = constants;
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  function validateButton(password, email) {
    if (email.length >= 2 && password.length >= 2 && EMAIL_REGEXP.test(email)) {
      props.setIsDisabledLogin(false);
    } else {
      props.setIsDisabledLogin(true);
    }
  }
  function handleChangePassword(e) {
    props.setErrLogin();
    props.setPasswordLogin(e.target.value);
    if (e.target.value.length < 2) {
      setErrorPassword("Пожалуйста, используйте не менее 2 символов");
    } else {
      setErrorPassword("");
    }
    validateButton(e.target.value, props.emailLogin);
  }
  function handleChangeEmail(e) {
    props.setErrLogin();
    props.setEmailLogin(e.target.value);
    if (e.target.value === "") {
      setErrorEmail("Пожалуйста, заполните поле");
    } else if (EMAIL_REGEXP.test(e.target.value) !== true) {
      setErrorEmail("Пожалуйста, введите адрес электронной почты");
    } else {
      setErrorEmail("");
    }
    validateButton(props.passwordLogin, e.target.value);
  }
  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img src={logo} alt="logo" className="login__logo"></img>
        </Link>
        <h1 className="login__title">Рады видеть!</h1>

        <form className="form" noValidate>
          <p className="form__subtitle">E-mail</p>
          <input
            value={props.emailLogin}
            onChange={handleChangeEmail}
            type="email"
            placeholder="Email"
            className="login__input"
            name="email"
            required
            id="username"
          />

          <span className="form__input_error">{errorEmail}</span>

          <p className="form__subtitle">Пароль</p>
          <input
            value={props.passwordLogin}
            onChange={handleChangePassword}
            type="password"
            placeholder="Пароль"
            className={
              props.passwordLogin.length < 2 && props.passwordLogin.length > 0
                ? "login__input login__error_password"
                : "login__input"
            }
            name="password"
            id="password"
            required
            minLength={2}
            maxLength={40}
          />
          <span className="form__input_error">{errorPassword}</span>
          <span className="form_register_error">{props.errLogin}</span>
          <button
            className={
              props.disabledLogin
                ? "login__save login__save_disabled"
                : "login__save"
            }
            type="submit"
            onClick={props.handleSubmit}
            disabled={props.disabledLogin}
          >
            Войти
          </button>
        </form>

        <Link to="/signup" className="login__signup">
          Ещё не зарегистрированы?{" "}
          <span className="login__another-signup login__another-signup_active">
            Регистрация
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
