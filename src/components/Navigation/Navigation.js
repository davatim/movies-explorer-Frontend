import "./Navigation.css";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div className="navigation">
      <nav className="navigation__another-button">
        <Link to="/signup" className="navigation__button">
          Регистрация
        </Link>
        <Link
          to="/signin"
          className="navigation__button navigation__button_active"
        >
          Войти
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
