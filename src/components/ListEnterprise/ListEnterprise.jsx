import { Link, NavLink } from 'react-router-dom';
import './ListEnterprise.css';
import { useContext, useEffect, useState, useMemo } from 'react';
import api from '../../untils/api';
import CreateEnterprise from '../CreateEnterprise/CreateEnterprise';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import MainFrame from '../MainFrame/MainFrame';
import React from 'react';

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
  const currentUser = useContext(CurrentUserContext);

  const [inputSearch, setInputSearch] = useState({
    myEnt: '',
    entAcc: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      Promise.all([api.getEnterpriseAccess(jwt), api.getEnterprise(jwt)])
        .then(([accessEnterprise, userEnterprise]) => {
          setEnterprise(userEnterprise);
          setEnterpriseAccess(accessEnterprise);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError('Ошибка при загрузке данных.');
          setIsLoading(false);
        });
    }
  }, [jwt, loggedIn, setEnterprise, setEnterpriseAccess]);

  const handleOpenModal = () => {
    setModal(true);
    setChild(
      <CreateEnterprise
        setModal={setModal}
        enterprise={enterprise}
        setEnterprise={setEnterprise}
      />
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputSearch({
      ...inputSearch,
      [name]: value,
    });
  };

  const filteredEnterprises = useMemo(() => {
    return enterprise.filter(
      (i) => i.enterprise.toLowerCase().includes(inputSearch.myEnt) && !i.isHiden
    );
  }, [enterprise, inputSearch.myEnt]);

  const filteredEnterpriseAccess = useMemo(() => {
    return enterpriseAccess.filter((i) =>
      i.enterprise.toLowerCase().includes(inputSearch.entAcc)
    );
  }, [enterpriseAccess, inputSearch.entAcc]);

  return (
    <MainFrame
      childNavLink={
        <React.Fragment>
          {currentUser.role.includes('admin') ? (
            <Link to='/users-list' className='aside__link'>
              Администрирование
            </Link>
          ) : null}
          <Link to='/profile' className='aside__link'>
            Профиль
          </Link>
          {currentUser.role.includes('user') ? (
            <button
              className='button_color-green button_default button_width-max'
              onClick={handleOpenModal}
            >
              Создать предприятие
            </button>
          ) : null}
        </React.Fragment>
      }
    >
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
        {isLoading && <p>Загрузка...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <div className='list__box'>
            {filteredEnterprises.length !== 0 ? (
              filteredEnterprises.reverse().map((i) => (
                <NavLink
                  to='/form'
                  key={i._id}
                  onClick={() => localStorage.setItem('id', i._id)}
                  className='button_default button_color-darck button_width-max'
                >
                  {i.enterprise}
                </NavLink>
              ))
            ) : (
              <>
                <div></div>
                <span className='list__span'>Тут пока ничего нет</span>
              </>
            )}
          </div>
        )}
        <h2 className='list__title'>Предприятия с доступом</h2>
        <input
          type='search'
          name='entAcc'
          onChange={handleChange}
          value={inputSearch.entAcc}
          className='list__input-search'
          placeholder='Начните ввод'
        />
        {isLoading && <p>Загрузка...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <div className='list__box'>
            {filteredEnterpriseAccess.length !== 0 ? (
              filteredEnterpriseAccess.map((i) => (
                <NavLink
                  to='/form'
                  key={i._id}
                  onClick={() => localStorage.setItem('id', i._id)}
                  className='button_default button_color-darck button_width-max'
                >
                  {i.enterprise}
                </NavLink>
              ))
            ) : (
              <>
                <div></div>
                <span className='list__span'>Тут пока ничего нет</span>
              </>
            )}
          </div>
        )}
      </div>
    </MainFrame>
  );
}

export default ListEnterprise;
