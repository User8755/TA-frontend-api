import { useState } from 'react';
import api from '../../untils/api';
import { useEffect } from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';
import CreateEnterprise from '../CreateEnterprise/CreateEnterprise';

function Main({ setModal, setChild, currentUser }) {
  const [isInfo, setInfo] = useState([]);
  const [viwe, setViwe] = useState([]);
  useEffect(() => {
    api
      .getInfo(JSON.parse(localStorage.getItem('key')).key)
      .then((i) => setInfo(i))
      .catch();
  }, []);
  
  useEffect(() => {
    if (isInfo) {
      isInfo.map((i) => setViwe(i.info.split(/\n/g)));
    }
  }, [isInfo]);

  const hedlerOpenModal = () => {
    setModal(true);
    setChild(<CreateEnterprise setModal={setModal}></CreateEnterprise>);
  };

  return (
    <>
      <section className='info__blok'>
        {viwe.map((i, index) => (
          <p key={index}>{i}</p>
        ))}
      </section>
      <nav className='nav__main'>
        {currentUser.role && !currentUser.role.includes('root') ? (
          <NavLink to='/users-list' className='nav__main_buttom'>Администрирование</NavLink>
        ) : null}
        <button className='nav__main_buttom' onClick={hedlerOpenModal}>
          Создать предприятие
        </button>
        <NavLink to='/list' className='nav__main_buttom'>
          Перейти к списку предприятий
        </NavLink>
        <NavLink to='/profile' className='nav__main_buttom'>
          Профиль
        </NavLink>
      </nav>
    </>
  );
}
export default Main;
