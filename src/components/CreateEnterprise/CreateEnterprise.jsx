import { useState } from 'react';
import './CreateEnterprise.css';
import api from '../../untils/api';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';

function CreateEnterprise({ setModal }) {
  const [input, setInput] = useState({
    enterprise: '',
    inn: '',
    kpp: '',
    order: '',
  });
  const [err, setErr] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  const handlerSubmit = (e) => {
    e.preventDefault();
    api
      .createEnterprise(input, JSON.parse(localStorage.getItem('key')).key)
      .then(() => {
        setModal(false);
      })
      .catch((e) => setErr(e))
      .finally(() =>
        setInput({
          enterprise: '',
          inn: '',
          kpp: '',
          order: '',
        })
      );
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErr('');
    if (
      input.enterprise.length &&
      input.inn.length &&
      input.kpp.length &&
      input.order.length > 2
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <h2 className='form__title'>Создать новое предпритятие</h2>
      <form className='form__create-enterprise' onSubmit={handlerSubmit}>
        <div>
          <label className='label'>Название организации:</label>
          <input
            className='form__input'
            placeholder='Укажите название организации'
            name='enterprise'
            value={input.enterprise}
            onChange={handlerChange}
          ></input>
        </div>
        <div>
          <label className='label'>ИНН организации:</label>
          <input
            className='form__input'
            placeholder='Введите ИНН'
            name='inn'
            value={input.inn}
            onChange={handlerChange}
          ></input>
        </div>
        <div>
          <label className='label'>КПП организации:</label>
          <input
            className='form__input'
            placeholder='Введите КПП'
            name='kpp'
            value={input.kpp}
            onChange={handlerChange}
          ></input>
        </div>
        <div>
          <label className='label'>Номер договора:</label>
          <input
            className='form__input'
            placeholder='Укажите номер договора'
            name='order'
            value={input.order}
            onChange={handlerChange}
          ></input>
        </div>
        <span className='form__span_enterprice'>{err.message}</span>
        <ButtonSubmit isDisabled={isDisabled}></ButtonSubmit>
      </form>
    </>
  );
}

export default CreateEnterprise;
