import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        Учебный проект ЯндексПрактикум и BeatFilm.
      </div>
      <div className="footer__container">
        <p className="footer__list-container footer__list-container_text">
          © {new Date().getFullYear()}
        </p>
        <ul className="footer__another-list">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              className="footer__second-list footer__second-list_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer__list footer__list_text">ЯндексПрактикум</p>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/davatim?tab=repositories"
              className="footer__three-list footer__three-list_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer__list footer__list_text_git">Github</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
