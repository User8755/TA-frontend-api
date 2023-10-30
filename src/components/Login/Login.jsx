import './Login.css';
import { EMAIL } from '../../untils/constants';
import { useState } from 'react';
import api from '../../untils/api';

function Login() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  console.log(inputValue);
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    api.loginUser(inputValue).then(item=>console.log(item)).catch(err=>console.log(err))
  };
  return (
    <section className='section entry'>
      <div className='entry__container'>
        <h1 className='entry__title'>Вход</h1>
        <form className='entry__form' onSubmit={handlerSubmit}>
          <lable htmlFor='email' className='entry__form_lable'>
            Email
          </lable>
          <input
            className='entry__form_input'
            id='email'
            type='email'
            placeholder='example@mail.ru'
            pattern={
              '^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$'
            }
            name='email'
            onChange={handleChange}
            value={inputValue.email}
          ></input>
          <span className='input-error'>
            Введен некорректный адрес электронной почты
          </span>
          <lable htmlFor='password' className='entry__form_lable'>
            Пароль
          </lable>
          <input
            id='password'
            type='password'
            className='entry__form_input'
            minLength='4'
            name='password'
            onChange={handleChange}
            value={inputValue.password}
            autoComplete='on'
          />
          <span className='input-error'>Ошибка ввода пароля</span>
          <button className='button entry__button' type='submit'>
            Войти
          </button>
        </form>
        <div className='question__container'>
          <p className='question__text'>Забыли пароль?</p>
          <button className='question__button'>Напомнить</button>
        </div>
      </div>
    </section>
  );
}

export default Login;
