import './NewBranch.css';
import AsideMenu from '../AsideMenu/AsideMenu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function NewBranch() {
  const [isBranch, setBranch] = useState({ branch: '' });
  const [message, setMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/branch', isBranch)
      .then(() => setMessage('Запись создана'))
      .catch((e) => setMessage(e.response.data.message))
      .finally(() => setBranch({ branch: '' }));
  };

  const handleChange = (e) => {
    setMessage(e.target.validationMessage);
    const { name, value } = e.target;
    setBranch({
      [name]: value.trim(),
    });
  };

  return (
    <main className='profile'>
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
        <NavLink to='/branch' className='aside__link'>
          Новый филиал
        </NavLink>
      </AsideMenu>
      <div className='entry__container'>
        <h2 className='entry__title'>Новый филиал</h2>
        <form className='entry__form' onSubmit={handlerSubmit}>
          <label className='entry__form_label'>Укажите город филиала:</label>
          <input
            placeholder='Введи название филиала'
            className='entry__form_input'
            minLength={2}
            maxLength={30}
            required
            onChange={handleChange}
            value={isBranch.branch}
            name='branch'
          ></input>
          <span className='input-error'>{message}</span>
          <button
            className='button_default button_color-green'
            onSubmit={handlerSubmit}
          >
            Отправить
          </button>
        </form>
      </div>
    </main>
  );
}
export default NewBranch;
