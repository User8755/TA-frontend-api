import './Login.css';
import { useState } from 'react';
import api from '../../untils/api';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [inputValue, setInputValue] = useState({
    login: '',
    password: '',
  });
  const [err, setErr] = useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    setErr({})
  };
  const navigate = useNavigate();

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    api
      .loginUser(inputValue)
      .then((item) => {
        if (item) {
          localStorage.setItem('key', JSON.stringify(item));
          props.setLogin(true);
          navigate('/', { replace: true });
        }
      })
      .catch((err) => setErr(err));
  };

  return (
    <>
      <section className='section entry login'>
        <div className='entry__container'>
          <h1 className='entry__title'>Вход</h1>
          <form className='entry__form' onSubmit={handlerSubmit}>
            <label htmlFor='login' className='entry__form_label'>
              Логин
            </label>
            <input
              className='entry__form_input'
              id='login'
              placeholder='Введите Ваш логин'
              name='login'
              onChange={handleChange}
              value={inputValue.login}
            ></input>
            <span className='span-error'></span>
            <label htmlFor='password' className='entry__form_label'>
              Пароль
            </label>
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
            <span className='span-error'>{err.message}</span>
            <button className='button entry__button' type='submit'>
              Войти
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
