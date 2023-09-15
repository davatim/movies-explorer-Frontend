// import { useNavigate } from "react-router-dom";
import "./ServerError.css";
// import { Link } from "react-router-dom";


// function ServerError() {
//   const NotFound = () => {
//     const navigate = useNavigate();
//     const goBack = () => {
//       navigate(-1)
//     }
//   // }
//     return (
//       <div className="server-error">
//         <h2 className="server-error__title">404</h2>
//         <p className="server-error__message">Страница не найдена</p>
//         <button //type={button} 
//         onClick={goBack} text={'назад'} className="server-error__link" />
//         {/* <Link to="/" className="server-error__link">
//           Назад
//         </Link> */}
//       </div>
//       // ........................
//     );
//   }
// }

import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-2);
  };

  return (
    <div className="server-error">
      <h2 className="server-error__title">404</h2>
      <p className="server-error__message">Страница не найдена</p>
      <button className="server-error__link" onClick={goBack} type="button">
        Назад
      </button>
    </div>
  );
};

export default NotFoundPage;