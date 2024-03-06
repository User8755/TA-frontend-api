import './UsersList.css';
import AsideMenu from '../AsideMenu/AsideMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

function UsersList(props) {

  const jwt = JSON.parse(localStorage.getItem('key')).key;
  const [isOpenSpoilerUser, setIsOpenSpoilerUser] = useState(true);
  const [isOpenSpoilerNon, setIsOpenSpoilerNone] = useState(false);
  const [AllUsers, setAllUsers] = useState([])

  useEffect(() => {
    if (props.loggedIn) {
      axios
        .get('/users/all')
        .then((i) => setAllUsers(i.data))
        .catch((i) => console.log(i));
    }
  }, [jwt, props.loggedIn]);

  return (
    <div className='users-list'>
      <AsideMenu></AsideMenu>
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
              // className='main__list--subtitle'
              onClick={() => setIsOpenSpoilerNone(!isOpenSpoilerNon)}
            >
              Пользователи без доступа
            </h2>

            {/* {hendleFilterNone.map((u) => {
              return (
                <Card
                  key={u._id}
                  user={u}
                  setModal={setModal}
                  setChild={setChild}
                  isOpenSpoiler={isOpenSpoilerNon}
                ></Card>
              );
            })} */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default UsersList;
