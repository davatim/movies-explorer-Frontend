import "./Register.css";
import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import constants from "../../utils/constants";
function Register(props) {
  const { EMAIL_REGEXP } = constants;
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [useremail, setEmailRegister] = useState("");
  const [username, setNameRegister] = useState("");
  useEffect(() => {
    return () => {
      props.setErrorRegister();
    }
  }, []
  )
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(passwordRegister, useremail, username)
  }
  function validateButton(password, email, name) {
    if (
      email.length >= 2 &&
      password.length >= 2 &&
      EMAIL_REGEXP.test(email) &&
      name.length >= 2 &&
      name.length <= 30
    ) {
      props.setIsDisabledRegister(false);
    } else {
      props.setIsDisabledRegister(true);
    }
  }
  function handleChangeName(e) {
    setNameRegister(e.target.value);
    validateButton(passwordRegister, useremail, e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 30) {
      setErrorName("Имя должно содержать не менее 2 и не более 30 символов");
    } else {
      setErrorName("");
    }
  }
  function handleChangePassword(e) {
    validateButton(e.target.value, useremail, username);
    setPasswordRegister(e.target.value);
    if (e.target.value.length < 2) {
      setErrorPassword("Пожалуйста, используйте не менее 2 символов");
    } else {
      setErrorPassword("");
    }
  }
  function handleChangeEmail(e) {
    validateButton(passwordRegister, e.target.value, username);
    setEmailRegister(e.target.value);
    if (e.target.value === "") {
      setErrorEmail("Пожалуйста, заполните поле");
    } else if (EMAIL_REGEXP.test(e.target.value) !== true) {
      setErrorEmail("Пожалуйста, введите адрес электронной почты");
    } else {
      setErrorEmail("");
    }
  }
  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img src={logo} alt="logo" className="login__logo"></img>
        </Link>
        <h1 className="login__title">Добро пожаловать!</h1>
        <form className="form" noValidate onSubmit={handleSubmit}>
          <p className="form__subtitle">Имя</p>
          <input
            value={username}
            onChange={handleChangeName}
            placeholder="Имя"
            className="login__input"
            name="username"
            required
            id="username"
            minLength={2}
            maxLength={30}
          />
          <span className="form__input_error">{errorName}</span>
          <p className="form__subtitle">E-mail</p>
          <input
            value={useremail}
            onChange={handleChangeEmail}
            type="email"
            placeholder="Email"
            className="login__input"
            name="username"
            required
            id="username"
          />
          <span className="form__input_error">{errorEmail}</span>
          <p className="form__subtitle">Пароль</p>
          <input
            value={passwordRegister}
            onChange={handleChangePassword}
            type="password"
            placeholder="Пароль"
            className={
              passwordRegister.length < 2 && passwordRegister.length > 0
                ? "login__input login__error_password"
                : "login__input"
            }
            name="password"
            id="password"
            required
            minLength={2}
            maxLength={30}
          />
          <span className="form__input_error">{errorPassword}</span>
          <span className="form_register_error">{props.errorRegister}</span>
          <button
            className={
              props.disabledRegister
                ? "login__save login__save_register login__save_disabled"
                : "login__save login__save_register"
            }
            type="submit"
            disabled={props.disabledRegister}
          >
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
