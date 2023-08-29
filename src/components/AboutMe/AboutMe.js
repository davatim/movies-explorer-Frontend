import "./AboutMe.css";
import img from "../../images/photo.jpg";
import arrow from "../../images/about-me__strelka.svg";
// import { Link } from 'react-router-dom';
function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div>
          <h3 className="about-me__name">Давид</h3>
          <h4 className="about-me__subtitle">Студент Я.Практикума</h4>
          <p className="about-me__paragraph">
            С 2016-2021г. прошел обучение по специальности "Ветеринария". С
            декабря 2022г. учусь на курсе Вебразработчик.
          </p>
          <a className="about-me__git" target="_blank" rel="noreferrer" href="https://github.com/davatim">GitHub</a>
        </div>
        <img src={img} alt="Фото автора" className="about-me__img" />
      </div>
      <h5 className="about-me__another-subtitle about-me__another-subtitle_portfolio">
        Моё портфолио
      </h5>
      <ul className="about-me__list">
        <li className="about-me__site">
          <a
            href="https://davatim.github.io/how-to-learn/"
            className="about-me__link" target="_blank" rel="noreferrer"
          >
            <p className="about-me__another-site about-me__another-site_title">
              Статичный сайт
            </p>
            <img className="about-me__strelka" alt="strelka" src={arrow} />
          </a>
        </li>
        <li className="about-me__site">
          <a
            href="https://davatim.github.io/russian-travel/"
            className="about-me__link" target="_blank" rel="noreferrer"
          >
            <p className="about-me__another-site about-me__another-site_title">
              Адаптивный сайт
            </p>
            <img className="about-me__strelka" alt="strelka" src={arrow} />
          </a>
        </li>
        <li className="about-me__site">
          <a href="https://davatim.github.io/mesto/" className="about-me__link" target="_blank" rel="noreferrer">
            <p className="about-me__another-site about-me__another-site_title">
              Одностраничное приложение
            </p>
            <img className="about-me__strelka" alt="strelka" src={arrow} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
