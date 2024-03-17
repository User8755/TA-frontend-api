import React, { useState } from 'react';
import './Registration.css';
import AsideMenu from '../AsideMenu/AsideMenu';
import { NavLink } from 'react-router-dom';

function Registration() {
  const [inputValue, setInputValue] = useState({
    name: '',
    family: '',
    branch: '',
    login: '',
    email: '',
    role: '',
    password: '111111',
  });
  const [isBranch, setBranch] = useState([]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handlerSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className='sign-up'>
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
      </AsideMenu>
      <section className='sign-up__block'>
        <div className='entry__container'>
          <h1 className='entry__title'>Регистрация</h1>
          <form className='entry__form' onSubmit={handlerSubmit}>
            <label htmlFor='name' className='entry__form_label'>
              Имя
            </label>
            <input
              className='entry__form_input'
              id='name'
              name='name'
              placeholder='Иван'
              minLength='1'
              maxLength='40'
              onChange={handleChange}
              value={inputValue.name}
              required
            ></input>
            <span className='input-error'></span>
            <label htmlFor='family' className='entry__form_label'>
              Фамилия
            </label>
            <input
              className='entry__form_input'
              id='family'
              name='family'
              placeholder='Иванов'
              minLength='1'
              maxLength='30'
              onChange={handleChange}
              value={inputValue.family}
              required
            ></input>
            <span className='input-error'></span>
            <label htmlFor='role' className='entry__form_label'>
              Права
            </label>
            <select
              className='entry__form_input'
              id='role'
              name='role'
              placeholder='Укажите права пользователя'
              minLength='1'
              onChange={handleChange}
              value={inputValue.role}
              required
            >
              <option defaultValue></option>
              <option>Пользователь</option>
              <option>Администратор филиала</option>
            </select>
            <span className='input-error'></span>
            <label htmlFor='branch' className='entry__form_label'>
              Филиал
            </label>
            <select
              className='entry__form_input'
              id='branch'
              name='branch'
              placeholder='Укажите филиал'
              minLength='1'
              maxLength='40'
              onChange={handleChange}
              value={inputValue.branch}
              required
            >
              <option defaultValue></option>
              {isBranch.map((i) => {
                return <option key={i._id}>{i.branch}</option>;
              })}
            </select>
            <span className='input-error'></span>
            <label htmlFor='login' className='entry__form_label'>
              Логин
            </label>
            <input
              className='entry__form_input'
              id='login'
              name='login'
              placeholder='Введите логин'
              minLength='1'
              maxLength='40'
              onChange={handleChange}
              value={inputValue.login}
              required
            ></input>
            <span className='input-error'></span>
            <label htmlFor='email' className='entry__form_label'>
              Email
            </label>
            <input
              className='entry__form_input'
              id='email'
              type='email'
              name='email'
              placeholder='example@mail.ru'
              onChange={handleChange}
              value={inputValue.email}
              required
            ></input>
            <span className='input-error'></span>
            <button className='button entry__button' type='submit'>
              Зарегистрировать
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Registration;
