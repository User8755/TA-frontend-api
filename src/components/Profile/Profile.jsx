import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import { EMAIL } from '../../untils/constants';

function Profile() {
  return (
    <section className='section entry'>
      <div className='entry__container'>
        <h1 className='entry__title'>Добро пожаловать!</h1>
        <form className='entry__form'>
          <lable for='name' className='entry__form_lable'>
            Имя
          </lable>
          <input
            className='entry__form_input'
            id='name'
            placeholder='Иван Иванович'
            minlength='1'
            maxlength='40'
          ></input>
          <span className='input-error'>Ошибка ввода имени</span>
          <lable for='surname' className='entry__form_lable'>
            Фамилия
          </lable>
          <input
            className='entry__form_input'
            id='surname'
            placeholder='Иванов'
            minlength='1'
            maxlength='30'
          ></input>
          <span className='input-error'>Ошибка ввода фамилии</span>
          <lable for='email' className='entry__form_lable'>
            Email
          </lable>
          <input
            className='entry__form_input'
            id='email'
            type='email'
            placeholder='example@mail.ru'
            pattern={EMAIL}
          ></input>
          <span className='input-error'>
            Введен некорректный адрес электронной почты
          </span>
          <lable for='password' className='entry__form_lable'>
            Пароль
          </lable>
          <input
            id='password'
            type='password'
            className='entry__form_input'
            minlength='8'
          />
          <span className='input-error'>Ошибка ввода пароля</span>
          <button
            className='button entry__button profile__button'
            type='submit'
          >
            Сохранить изменения
          </button>
        </form>
        <div className='question__container'>
          <Link to='/login' className='question__button profile'>
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Profile;
