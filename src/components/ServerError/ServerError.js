import './ServerError.css';
import { Link } from 'react-router-dom'; 

function ServerError() {
  return (
      <div className='server-error'>
        <h2 className='server-error__title'>404</h2>
        <p className='server-error__message'>Страница не найдена</p>
        <Link to ='/' className='server-error__link'>Назад</Link>
      </div>
  );
}

export default ServerError;