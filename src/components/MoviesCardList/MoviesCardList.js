import "./MoviesCardList.css";
import "../MoviesCard/MoviesCard";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  let cardsList;
  if (props.isKorot) {
    cardsList = props.cards.filter((item) => {
      return item.duration <= 51;
    });
  } else {
    cardsList = props.cards.slice(0, props.indexCard);
  }
  if (props.width > 1024) {
    return (
      <section className="places">
        <ul className="places__container">
          {cardsList.map((card) => (
            <li>
              <MoviesCard card={card} isSaveFilm={props.isSaveFilm} />
            </li>
          ))}
        </ul>
        {props.children}
      </section>
    );
  } else if (props.width > 690) {
    return (
      <section className="places">
        <div className="places__container">
          {cardsList.map((card) => (
            <MoviesCard card={card} isSaveFilm={props.isSaveFilm} />
          ))}
        </div>
        {props.children}
      </section>
    );
  } else {
    return (
      <section className="places">
        <div className="places__container">
          {cardsList.map((card) => (
            <MoviesCard card={card} isSaveFilm={props.isSaveFilm} />
          ))}
        </div>
        {props.children}
      </section>
    );
  }
}

export default MoviesCardList;
