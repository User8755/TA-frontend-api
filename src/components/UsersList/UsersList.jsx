import './UsersList.css';
import AsideMenu from '../AsideMenu/AsideMenu';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';

function UsersList(props) {
  const [isOpenSpoilerUser, setIsOpenSpoilerUser] = useState(true);
  const [isOpenSpoilerNon, setIsOpenSpoilerNone] = useState(false);
  const [AllUsers, setAllUsers] = useState([]);
  const currentUser = useContext(CurrentUserContext);
  useEffect(() => {
    if (props.loggedIn) {
      axios
        .get('/users/all')
        .then((res) =>
          setAllUsers(res.data.filter((i) => i._id !== currentUser._id))
        )
        .catch((i) => console.log(i));
    }
  }, [currentUser._id, props.loggedIn]);

  return (
    <div className='users-list'>
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
      <div className='main-content'>
        <h2 className='main__title'>Список пользователей</h2>
        <form className='main__form'></form>
        <section className='main__list'>
          <div className='main__list-box'></div>
          <div className='main__list-box'>
            <h2
              className={
                isOpenSpoilerUser
                  ? 'main__list--subtitle'
                  : ' main__list--subtitle close'
              }
              onClick={() => setIsOpenSpoilerUser(!isOpenSpoilerUser)}
            >
              Пользователи с доступом
            </h2>
            {AllUsers.map((u) => {
              return (
                <Card
                  key={u._id}
                  user={u}
                  isOpenSpoiler={isOpenSpoilerUser}
                  setChild={props.setChild}
                  setModal={props.setModal}
                ></Card>
              );
            })}
          </div>
          <div className='main__list-box'>
            <h2
              className={
                isOpenSpoilerNon
                  ? 'main__list--subtitle'
                  : ' main__list--subtitle close'
              }
              onClick={() => setIsOpenSpoilerNone(!isOpenSpoilerNon)}
            >
              Пользователи без доступа
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UsersList;
