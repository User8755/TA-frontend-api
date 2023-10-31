import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [active] = useState(false);
  return (
    <header className='header'>
      <NavLink
        to='/techoavia-roman'
        className={active ? 'header__text active' : 'header__text'}
      >
        Форма
      </NavLink>
      <NavLink
        to='/update'
        className={active ? 'header__text active' : 'header__text'}
      >
        Обновление информации
      </NavLink>
      <div className='profile__wrapper'>
        <NavLink
          to='/'
          className={active ? 'header__text active' : 'header__text'}
        >
          Логин
        </NavLink>
        <NavLink
          to='/registration'
          className={active ? 'header__text active' : 'header__text'}
        >
          Регистрация
        </NavLink>
        <NavLink
          to='/profile'
          className={active ? 'header__text active' : 'header__text'}
        >
          Профиль
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
