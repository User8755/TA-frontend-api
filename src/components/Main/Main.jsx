import { useState } from 'react';
import api from '../../untils/api';
import { useEffect } from 'react';
import './Main.css';
import { NavLink } from 'react-router-dom';
import CreateEnterprise from '../CreateEnterprise/CreateEnterprise';

function Main({ setModal, setChild }) {
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
    setChild(<CreateEnterprise></CreateEnterprise>);
  };

  return (
    <>
      <section className='info__blok'>
        {viwe.map((i) => (
          <p key={viwe.indexOf(i)}>{i}</p>
        ))}
      </section>
      <section className='enterprise'>
        <button className='enterprise__buttom' onClick={hedlerOpenModal}>
          Создать предприятие
        </button>
        <NavLink to='/list' className='enterprise__buttom'>
          Перейти к списку предприятий
        </NavLink>
        <NavLink to='/profile' className='enterprise__buttom'>
          Профиль
        </NavLink>
      </section>
    </>
  );
}
export default Main;
