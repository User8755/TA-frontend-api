import './UsersList.css';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import MainFrame from '../MainFrame/MainFrame';
import NavLinks from '../NavLink/NavLink';

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
    <MainFrame childNavLink={<NavLinks />}>
      <div className='main-content'>
        <h2 className='main__title'>Список пользователей</h2>
        <div className='main__form'></div>
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
    </MainFrame>
  );
}

export default UsersList;
