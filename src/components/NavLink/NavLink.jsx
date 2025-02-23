import { NavLink } from 'react-router-dom';
import './NavLink.css';
function NavLinks() {
  return (
    <>
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
      <NavLink to='/update' className='aside__link'>
        Обновление данных
      </NavLink>
    </>
  );
}
export default NavLinks;
