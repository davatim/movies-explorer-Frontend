import "./MoviesCardList.css";
import "../MoviesCard/MoviesCard";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="places">
      <ul className="places__container">
        {props.cards.slice(0, props.roundedVisibleCardCount).map((card) => (
          <li>
            <MoviesCard
              key={card.id}
              isKorot={props.isKorot}
              nameFilm={props.nameFilm}
              setSaveCardsKorot={props.setSaveCardsKorot}
              setSaveCards={props.setSaveCards}
              handleSubmitFilms={props.handleSubmitFilms}
              loggedIn={props.loggedIn}
              card={card}
              isSaveFilm={props.isSaveFilm}
              saveCards={props.saveCards}
            />
          </li>
        ))}
      </ul>
      {props.children}
    </section>
  );
}

export default MoviesCardList;
