import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        Учебный проект ЯндексПрактикум и BeatFilm.
      </div>
      <div className="footer__container">
        <p className="footer__list-container footer__list-container_text">
          © 2023
        </p>
        <ul className="footer__another-list">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              className="footer__second-list footer__second-list_link"
            >
              <p className="footer__list footer__list_text">ЯндексПрактикум</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/davatim?tab=repositories"
              className="footer__three-list footer__three-list_link"
            >
              <p className="footer__list footer__list_text_git">GitHub</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
