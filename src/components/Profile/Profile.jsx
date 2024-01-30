import React, { useEffect, useState } from 'react';
import '../Login/Login.css';
import './Profile.css';
import api from '../../untils/api';
import EnterpriseUpdate from '../EnterpriseUpdate/EnterpriseUpdate';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';
function Profile({
  currentUser,
  setLogin,
  setModal,
  setChild,
  enterprise,
  setEnterprise,
}) {
  const [input, setInput] = useState({
    password: '',
  });
  const [disabled, setDisabled] = useState(true);
  const [err, setErr] = useState('');

  const hendleLogOut = () => {
    localStorage.removeItem('key');
    setLogin(false);
  };

  const handlerClikc = (item) => {
    setChild(
      <EnterpriseUpdate
        enterprise={item}
        setEnterprise={setEnterprise}
        currentUser={currentUser}
      ></EnterpriseUpdate>
    );
    setModal(true);
  };

  useEffect(() => {
    api
      .getEnterprise(JSON.parse(localStorage.getItem('key')).key)
      .then((i) => setEnterprise(i))
      .catch((i) => console.log(i));
  }, [setEnterprise]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [name]: value,
    });
    setErr(e.target.validationMessage);
  };

  useEffect(() => {
    if (input.password.length >= 6) {
      setDisabled(false);
    } else if (input.password.length < 6) {
      setDisabled(true);
    }
  }, [input]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    api
      .updateUserInfo(input, JSON.parse(localStorage.getItem('key')).key)
      .then(() => setErr('Данные обновлены'), setInput({ password: '' }))
      .catch((err) => setErr(err.message), setInput({ password: '' }));
  };
  return (
    <>
      <section className='section entry'>
        <div className='entry__container profile'>
          <h1 className='entry__title'>Добро пожаловать!</h1>
          <form className='entry__form_profile' onSubmit={handlerSubmit}>
            <span className='entry__form_label'>
              {currentUser.name + ' ' + currentUser.family}
            </span>
            <span className='entry__form_label'>{currentUser.branch}</span>
            <label htmlFor='password' className='entry__form_label'>
              Новый пароль:
            </label>
            <input
              id='password'
              name='password'
              type='password'
              className='entry__form_input'
              minLength='6'
              value={input.password}
              onChange={handleChange}
            />
            <span
              className={
                err === 'Данные обновлены' ? 'span-error-success' : 'span-error'
              }
            >
              {err}
            </span>
            <button
              className='button entry__button profile__button'
              type='submit'
              disabled={disabled}
            >
              Сохранить изменения
            </button>
          </form>
          <div className='question__container'>
            <button className='question__button profile' onClick={hendleLogOut}>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='profile__enterprise-list'>
          <h2>Мои предприятия</h2>
          <div className='profile__enterprise-list_box'>
            {enterprise.map((i) => {
              return (
                <button key={i._id} onClick={() => handlerClikc(i)}>
                  {i.enterprise}
                </button>
              );
            })}
          </div>
        </div>
        <ButtonGoBack />
      </section>
    </>
  );
}

export default Profile;
