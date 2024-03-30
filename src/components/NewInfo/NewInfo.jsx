import './NewInfo.css';
import AsideMenu from '../AsideMenu/AsideMenu';
import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function NewInfo() {
  const [input, setInput] = useState({
    info: '',
  });
  const [statusText, setStatusText] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/info', {
        data: { info: input.info },
      })
      .then(
        () => setStatusText('Информация обновлена'),
        setInput({
          info: '',
        })
      )
      .catch(() => setStatusText('Произошла ошибка, попробуйте позже'));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [name]: value,
    });
    if (value.length > 5) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className='new-info'>
      <AsideMenu>
        <NavLink to='/users-list' className='aside__link'>
          Список пользователей
        </NavLink>
        <NavLink to='/sign-up' className='aside__link'>
          Регистрация пользователей
        </NavLink>
        <NavLink to='/info' className='aside__link'>
          Общая информация
        </NavLink>
        <NavLink to='/logs' className='aside__link'>
          Логи
        </NavLink>
      </AsideMenu>
      <section className='new-info__section'>
        <h2 className='new-info__title'>Общая информация</h2>
        <form className='new-info__form' onSubmit={handlerSubmit}>
          <textarea
            rows='10'
            className='new-info__text'
            required
            onChange={handleChange}
            value={input.info}
            name='info'
            minLength='5'
          ></textarea>
          <span className='new-info__span'>{statusText}</span>
          <button type='submit' className='button color' disabled={isDisabled}>
            Отправить
          </button>
        </form>
      </section>
    </div>
  );
}

export default NewInfo;
