import "./ServerError.css";

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