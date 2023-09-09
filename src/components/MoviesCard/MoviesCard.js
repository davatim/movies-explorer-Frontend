import "./MoviesCard.css";
import image from "../../images/noimage.png";
import saveLike from "../../images/save1.svg";
import like from "../../images/save1d.svg";
import close from "../../images/close.svg";
import { useEffect, useState } from "react";
import { api } from "../../utils/ApiMain.js";
const server_url = "https://api.nomoreparties.co/";
// const server_url = "https://api.davatimdiplom.nomoredomainsicu.ru";

function MoviesCard({ card, isSaveFilm, saveCards, ...props }) {
  const cardId = card.movieId || card.id || card._id;
  console.log(saveCards, cardId, isSaveFilm)
  const checkIsSavedCard = () => saveCards.some(saveCard => {
    console.log(saveCard, cardId)
    return saveCard.movieId === String(cardId);
  })
  const islikedConstDefaultValue = isSaveFilm || checkIsSavedCard()
  console.log(islikedConstDefaultValue)
  const [isLiked, setIsLiked] = useState( islikedConstDefaultValue );
  // console.log("card", card)
  let duration;
  // useEffect(() => {
  //   for (let index = 0; index < props.saveCards.length; index += 1) {
  //     console.log(props.saveCards[index]._id, card.id);
  //     // console.log(props.saveCards[index]._id, card._id);
  //     if (props.saveCards[index]._id === card._id) {
  //       console.log(card._id)
  //       setIsLiked(true);
  //       break;
  //     }
  //     setIsLiked(false);
  //   }
  
  // }, 
  // [props.loggedIn, props.handleSubmitFilms]);
  if (card.duration < 60) {
    duration = `${card.duration}м`;
  } else if (card.duration % 60 === 0) {
    duration = `${parseInt(card.duration / 60)}ч`;
  } else {
    duration = `${parseInt(card.duration / 60)}ч${card.duration % 60}м`;
  }
  function handleLikeClick() {
    // let _id = "";
    // console.log("saveCards", props.saveCards, card._id);
    if (isLiked) {
      // setIsLiked(false);
      console.log("cardID", cardId)
      api
       .deleteClickLike(String(cardId))
       .then((data) => {
        setIsLiked(false);
      if (isSaveFilm) {
        api
      .getDataSaveCards(props.setIsLoadingSaveCards)
      .then((data) => {
        props.setSaveCards(data);
        props.setSaveCardsKorot(data);
      })
      }
       })
       .catch((err) => {
        console.log(err);
      });
    } else {
      // setIsLiked(true);
      const params = {
        country: card.country,
        director:card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: server_url + card.image.url,
        trailerLink: card.trailerLink,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        thumbnail: server_url + card.image.url,
        movieId: cardId,

      }
      api
        .addClickLike(params)
        .then((data) => {
            // const exitingCards = props.saveCards;
            // const isAlreadyAdded = exitingCards.some((exitingCards) => exitingCards.movieId === data.movieId)
            // console.log(isAlreadyAdded)
            // console.log("addClickLike")
            // if (!isAlreadyAdded){
              setIsLiked(true)
              // console.log('Add data')
              // const saveCardsNew = props.saveCards
              // saveCardsNew.push(data);
              // console.log(saveCardsNew)
              // props.setSaveCards(saveCardsNew)
              // props.setSaveCardsKorot(saveCardsNew)

            // }
          })
          .catch((err) => {
            console.log(err);
          });
    }
    // for (let index = 0; index < props.saveCards.length; index += 1) {
    //   if (props.saveCards[index]._id === card._id) {
    //     console.log("props.saveCards[index].id", props.saveCards[index]._id);
    //     setIsLiked(true);
    //     _id = props.saveCards[index]._id;
    //     api
    //       // .deleteClickLike(_id)
    //       .deleteClickLike(card.id)
    //       .then(() => {
    //         setIsLiked(false);
    //         let saveCardsNew = props.saveCards.filter((item) => {
    //           return item._id !== card._id;
    //         });
    //         props.setSaveCards(saveCardsNew);
    //         saveCardsNew = saveCardsNew.filter((item) => {
    //           return (
    //             item.nameRU
    //               .toLowerCase()
    //               .includes(props.nameFilm.toLowerCase()) ||
    //             item.nameEN.toLowerCase().includes(props.nameFilm.toLowerCase())
    //           );
    //         });
    //         if (props.isKorot) {
    //           saveCardsNew = saveCardsNew.filter(function (item) {
    //             return item.duration <= 40;
    //           });
    //         }
    //         props.setSaveCardsKorot(saveCardsNew);
    //       })
    //       .catch((err) => console.log(err));
    //     break;
    //   }
    // }
    // if (!_id) {
    //   const params = {
    //     country: card.country,
    //     director:card.director,
    //     duration: card.duration,
    //     year: card.year,
    //     description: card.description,
    //     image: server_url + card.image.url,
    //     trailerLink: card.trailerLink,
    //     nameRU: card.nameRU,
    //     nameEN: card.nameEN,
    //     thumbnail: server_url + card.image.url,
    //     movieId: card.id,

    //   }
    //   api
    //     .addClickLike(params)
    //     .then((data) => {
    //         const exitingCards = props.saveCards;
    //         const isAlreadyAdded = exitingCards.some((exitingCards) => exitingCards.movieId === data.movieId)
    //         console.log(isAlreadyAdded)
    //         console.log("addClickLike")
    //         if (!isAlreadyAdded){
    //           setIsLiked(true)
    //           console.log('Add data')
    //           const saveCardsNew = props.saveCards
    //           saveCardsNew.push(data);
    //           console.log(saveCardsNew)
    //           props.setSaveCards(saveCardsNew)
    //           props.setSaveCardsKorot(saveCardsNew)

    //         } else{
    //         //  setIsLiked(false)
    //           console.log('addClickdisLike')

    //            const saveCardsNew = exitingCards.filter((exitingCards) => exitingCards.movieId !== data.movieId) 
    //            console.log(saveCardsNew.length)
    //            props.setSaveCards(saveCardsNew)
    //            props.setSaveCardsKorot(saveCardsNew)
    //            console.log(data._id)
    //            //Функция работает раньше чем аддкликлайк(парамс) и из-за этого не удаляется вовремя картинка
    //            api
    //             //  .deleteClickLike(data._id)
    //              .deleteClickLike(card.id)


            
    //         }

            // const saveCardsNew = props.saveCards;
            // if (isLiked)
            // {
            //   console.log("Уже существует. удаляем лайк")
            //   setIsLiked(false);
            // } 
            // else {
            //   setIsLiked(true);
            //   saveCardsNew.push(data);
            //   console.log("saveCardsNew", saveCardsNew, data, props.saveCards);
            //   props.setSaveCards(saveCardsNew);
            //   props.setSaveCardsKorot(saveCardsNew);
            //   console.log(props.setSaveCards.length)
            // }
          
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
        
  //   } 
  }
  // console.log(server_url + card.image.url)
  return (
    <li className="place">
      <div className="place__info">
        <a href={card.trailerLink} target="_blank" rel="noopener noreferrer">
          <img
            className="place__photo"
            src={card.image.url ? server_url + card.image.url: card.image}
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
