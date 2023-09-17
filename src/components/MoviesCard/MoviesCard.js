import "./MoviesCard.css";
import saveLike from "../../images/save1.svg";
import like from "../../images/save1d.svg";
import close from "../../images/close.svg";
import { useState } from "react";
import { api } from "../../utils/ApiMain.js";
const server_url = "https://api.nomoreparties.co/";

function MoviesCard({ card, isSaveFilm, saveCards, ...props }) {
  const cardId = card.movieId || card.id || card._id;
  const checkIsSavedCard = () =>
    saveCards.some((saveCard) => {
      return saveCard.movieId === String(cardId);
    });
  const islikedConstDefaultValue = isSaveFilm || checkIsSavedCard();
  const [isLiked, setIsLiked] = useState(islikedConstDefaultValue);
  let duration;
  if (card.duration < 60) {
    duration = `${card.duration}м`;
  } else if (card.duration % 60 === 0) {
    duration = `${parseInt(card.duration / 60)}ч`;
  } else {
    duration = `${parseInt(card.duration / 60)}ч${card.duration % 60}м`;
  }
  function handleLikeClick() {
    if (isLiked) {
      api
        .deleteClickLike(String(cardId))
        .then((data) => {
          setIsLiked(false);
          if (isSaveFilm) {
            api.getDataSaveCards(props.setIsLoadingSaveCards).then((data) => {
              props.setSaveCards(data);
              props.setSaveCardsKorot(data);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const params = {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: server_url + card.image.url,
        trailerLink: card.trailerLink,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        thumbnail: server_url + card.image.url,
        movieId: cardId,
      };
      api
        .addClickLike(params)
        .then((data) => {
          setIsLiked(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <li className="place">
      <div className="place__info">
        <a href={card.trailerLink} target="_blank" rel="noopener noreferrer">
          <img
            className="place__photo"
            src={card.image.url ? server_url + card.image.url : card.image}
            alt={card.nameRU}
          />
        </a>
      </div>
      <div className="place__footer">
        <div className="place__contain">
          <h2 className="place__title">{card.nameRU}</h2>
          <button
            className="place__like"
            type="button"
            onClick={handleLikeClick}
          >
            <img
              src={isSaveFilm ? close : isLiked ? saveLike : like}
              alt={card.nameRU}
            ></img>
          </button>
        </div>
        <p className="place__duration">{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
