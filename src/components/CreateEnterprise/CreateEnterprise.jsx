import { useState } from 'react';
import './CreateEnterprise.css';
import api from '../../untils/api';

function CreateEnterprise() {
  const [input, setInput] = useState({
    enterprise: '',
  });
  const handlerSubmit = (e) => {
    e.preventDefault();
    api
      .createEnterprise(input, JSON.parse(localStorage.getItem('key')).key)
      .then(i=>console.log(i))
      .catch(i=>console.log(i));
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [name]: value,
    });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h2>Создать новое предпритятие</h2>
      <input
        placeholder='Укажите название предприятия'
        name='enterprise'
        value={input.enterprise}
        on
        onChange={handlerChange}
      ></input>
      <input type='submit'></input>
    </form>
  );
}

export default CreateEnterprise;
