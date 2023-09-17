import "./Promo.css";
function Promo() {
  return (
    <section className="Promo">
      <h2 className="Promo__title"> О проекте</h2>
      <ul className="Promo__container">
        <li className="Promo__column">
          <h3 className="Promo__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="Promo__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="Promo__column">
          <h3 className="Promo__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="Promo__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="Promo__stage">
        <div className="another-stage another-stage_back">
          <p className="Promo__another-stage Promo__another-stage_back-week">
            1 неделя
          </p>
          <p className="Promo__another-stage Promo__another-stage_back_paragraph">
            Back-end
          </p>
        </div>
        <div className="Promo__front">
          <p className="Promo__another-front Promo__another-front_week">
            4 недели
          </p>
          <p className="Promo__another-front Promo__another-front_paragraph">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}

export default Promo;
