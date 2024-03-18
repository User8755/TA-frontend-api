import { Link, NavLink } from 'react-router-dom';
import './ListEnterprise.css';
import { useEffect, useState } from 'react';
import api from '../../untils/api';
import AsideMenu from '../AsideMenu/AsideMenu';
import CreateEnterprise from '../CreateEnterprise/CreateEnterprise';

function ListEnterprise({
  enterprise,
  setEnterprise,
  enterpriseAccess,
  setEnterpriseAccess,
  loggedIn,
  setModal,
  setChild,
}) {
  const jwt = JSON.parse(localStorage.getItem('key')).key;

  const [inputSearch, setInputSearch] = useState({
    myEnt: '',
    entAcc: '',
  });

  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getEnterpriseAccess(jwt), api.getEnterprise(jwt)])
        .then(([accessEnterprise, userEnterprise]) => {
          setEnterprise(userEnterprise);
          setEnterpriseAccess(accessEnterprise);
        })
        .catch((e) => console.log(e));
    }
  }, [jwt, loggedIn, setEnterprise, setEnterpriseAccess]);

  const hendleFilterEnt = enterprise.filter((i) =>
    i.enterprise.toLowerCase().includes(inputSearch.myEnt)
  );

  const hendleFilterEntAcc = enterpriseAccess.filter((i) =>
    i.enterprise.toLowerCase().includes(inputSearch.entAcc)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputSearch({
      ...inputSearch,
      [name]: value,
    });
  };

  const hedlerOpenModal = () => {
    setModal(true);
    setChild(
      <CreateEnterprise
        setModal={setModal}
        enterprise={enterprise}
        setEnterprise={setEnterprise}
      ></CreateEnterprise>
    );
  };

  return (
    <main className='main-menu'>
      <AsideMenu>
        <Link to='/users-list' className='aside__link'>
          Администрирование
        </Link>
        <Link to='/profile' className='aside__link'>
          Профиль
        </Link>
        <button
          className='button_color-green button_default button_width-max'
          onClick={hedlerOpenModal}
        >
          Создать предприятие
        </button>
      </AsideMenu>
      <div className='list__main'>
        <h2 className='list__title'>Мои предприятия</h2>
        <input
          type='search'
          name='myEnt'
          onChange={handleChange}
          value={inputSearch.myEnt}
          className='list__input-search'
          placeholder='Начните ввод'
        />
        <div className='list__box'>
          {hendleFilterEnt.length !== 0 ? (
            hendleFilterEnt.reverse().map((i) => {
              return (
                <NavLink
                  to='/form'
                  key={i._id}
                  onClick={() => localStorage.setItem('id', i._id)}
                  className={
                    'button_default button_color-darck button_width-max'
                  }
                >
                  {i.enterprise}
                </NavLink>
              );
            })
          ) : (
            <>
              <div></div>
              <span className='list__span'>Тут пока ничего нет</span>
            </>
          )}
        </div>
        <h2 className='list__title'>Предприятия с доступом</h2>
        <input
          type='search'
          name='entAcc'
          onChange={handleChange}
          value={inputSearch.entAcc}
          className='list__input-search'
          placeholder='Начните ввод'
        />
        <div className='list__box'>
          {hendleFilterEntAcc.length !== 0 ? (
            hendleFilterEntAcc.map((i) => {
              return (
                <NavLink
                  to='/form'
                  key={i._id}
                  onClick={() => localStorage.setItem('id', i._id)}
                  className={
                    'button_default button_color-darck button_width-max'
                  }
                >
                  {i.enterprise}
                </NavLink>
              );
            })
          ) : (
            <>
              <div></div>
              <span className='list__span'>Тут пока ничего нет</span>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default ListEnterprise;
