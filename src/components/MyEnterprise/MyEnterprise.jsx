import EnterpriseUpdate from '../EnterpriseUpdate/EnterpriseUpdate';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../untils/api';
import MainFrame from '../MainFrame/MainFrame';
function MyEnterprise({ setChild, enterprise, setModal, setEnterprise }) {
  useEffect(() => {
    api
      .getEnterprise(JSON.parse(localStorage.getItem('key')).key)
      .then((i) => setEnterprise(i.reverse()))
      .catch((i) => console.log(i));
  }, [setEnterprise]);

  const handlerClikc = (item) => {
    setChild(<EnterpriseUpdate enterprise={item}></EnterpriseUpdate>);
    setModal(true);
  };
  const handleFiltreVisible = enterprise.filter(i=> !i.isHiden )
  const handleFiltreHiden = enterprise.filter(i=> i.isHiden )
  return (
    <MainFrame
      childNavLink={
        <>
          <NavLink to='/profile' className='aside__link'>
            Данные профиля
          </NavLink>
          <NavLink to='/my-enterprise' className='aside__link'>
            Мои предприятия
          </NavLink>
        </>
      }
    >
      <section className='profile-block'>
        <h2 className='entry__title'>Мои предприятия</h2>
        <div className='profile__enterprise-list_box'>
          {handleFiltreVisible.map((i) => {
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
      <section className='profile-block'>
        <h2 className='entry__title'>Скрытые предприятия</h2>
        <div className='profile__enterprise-list_box'>
          {handleFiltreHiden.map((i) => {
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
    </MainFrame>
  );
}

export default MyEnterprise;
