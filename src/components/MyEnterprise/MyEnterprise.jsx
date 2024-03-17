import EnterpriseUpdate from '../EnterpriseUpdate/EnterpriseUpdate';
import AsideMenu from '../AsideMenu/AsideMenu';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../untils/api';

function MyEnterprise({
  setChild,
  currentUser,
  enterprise,
  setModal,
  setEnterprise,
}) {
  useEffect(() => {
    api
      .getEnterprise(JSON.parse(localStorage.getItem('key')).key)
      .then((i) => setEnterprise(i))
      .catch((i) => console.log(i));
  }, [setEnterprise]);

  const handlerClikc = (item) => {
    setChild(
      <EnterpriseUpdate
        enterprise={item}
        currentUser={currentUser}
      ></EnterpriseUpdate>
    );
    setModal(true);
  };

  return (
    <div className='profile'>
      <AsideMenu>
        <NavLink to='/profile' className='aside__link'>
          Данные профиля
        </NavLink>
        <NavLink to='/my-enterprise' className='aside__link'>
          Мои предприятия
        </NavLink>
      </AsideMenu>
      <section className='profile-block'>
        <h2 className='entry__title'>Мои предприятия</h2>
        <div className='profile__enterprise-list_box'>
          {enterprise.map((i) => {
            return (
              <button
                key={i._id}
                onClick={() => handlerClikc(i)}
                className='button_default button_color-darck'
              >
                {i.enterprise}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default MyEnterprise;
