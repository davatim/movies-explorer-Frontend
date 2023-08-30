import "./MoviesCard.css";
// import { Link } from 'react-router-dom';
import image from "../../images/noimage.png";
import saveLike from "../../images/save1.svg";
import like from "../../images/save1d.svg";
import close from "../../images/close.svg";
import { useState } from "react";
function MoviesCard({ card, isSaveFilm }) {
  const [isLiked, setIsLiked] = useState(false);
  let duration = "";
  if (card.duration < 60) {
    duration = `${card.duration}м`;
  } else if (card.duration % 60 === 0) {
    duration = `${parseInt(card.duration / 60)}ч`;
  } else {
    duration = `${parseInt(card.duration / 60)}ч${card.duration % 60}м`;
  }
  function handleLikeClick() {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  }
  return (
    <div className="place">
      <div className="place__info">
        <img
          className="place__photo"
          src={card.image === "" ? image : card.image}
          alt={card.nameRU}
        />
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
    </div>
  );
}

export default MoviesCard;
