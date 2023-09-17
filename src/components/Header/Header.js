import "./Header.css";
import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={props.isBlue ? "header header_blue" : "header"}>
      <div className="header__another-link">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo"></img>
        </Link>
        {props.children}
      </div>
    </header>
  );
}

export default Header;
