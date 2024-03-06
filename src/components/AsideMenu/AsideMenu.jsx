import { Link, NavLink } from 'react-router-dom';
import './AsideMenu.css';

function AsideMenu() {
  return (
    <aside className='aside__menu'>
      <nav className='aside__nav'>
        <NavLink to='/users-list' className='aside__link'>Список пользователей</NavLink>
        <NavLink to='/sign-up' className='aside__link'>Регистрация пользователей</NavLink>
        <NavLink to='/info' className='aside__link'>Общая информация</NavLink>
        <Link to='/' className='aside__button_go-back'>Назад</Link>
      </nav>
    </aside>
  );
}

export default AsideMenu;
