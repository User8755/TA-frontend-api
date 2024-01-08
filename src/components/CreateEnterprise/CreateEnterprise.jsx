import { useState } from 'react';
import './CreateEnterprise.css';
import api from '../../untils/api';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

function CreateEnterprise() {
  const [input, setInput] = useState({
    enterprise: '',
  });
  const handlerSubmit = (e) => {
    e.preventDefault();
    api
      .createEnterprise(input, JSON.parse(localStorage.getItem('key')).key)
      .then((i) => console.log(i))
      .catch((i) => console.log(i));
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [name]: value,
    });
  };

  return (
    <>
      <h2 className='form__title'>Создать новое предпритятие</h2>
      <form className='form__create-enterprise' onSubmit={handlerSubmit}>
        <input
          className='form__input'
          placeholder='Укажите название предприятия'
          name='enterprise'
          value={input.enterprise}
          onChange={handlerChange}
        ></input>
        <ButtonSubmit></ButtonSubmit>
        {/* <input type='submit' className='form__button-submit'></input> */}
      </form>
    </>
  );
}

export default CreateEnterprise;
