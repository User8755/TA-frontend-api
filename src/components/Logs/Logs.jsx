import './Logs.css';
import axios from 'axios';
import AsideMenu from '../AsideMenu/AsideMenu';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Logs({ loggedIn }) {
  const [isLogs, setLogs] = useState([]);
  useEffect(() => {
    if (loggedIn)
      axios
        .get('/logs')
        .then((l) => setLogs(l.data))
        .catch();
  }, [loggedIn]);

  return (
    <div className='profile'>
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
      <div>
        <ul>
          {isLogs.map((i, index) => {
            return <li key={index}>{`${i.action} ${i.date}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Logs;
