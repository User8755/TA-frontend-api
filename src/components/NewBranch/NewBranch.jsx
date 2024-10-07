import './NewBranch.css';
import MainFrame from '../MainFrame/MainFrame';
import NavLinks from '../NavLink/NavLink';
import { useState } from 'react';
import axios from 'axios';

function NewBranch() {
  const [isBranch, setBranch] = useState({ branch: '' });
  const [message, setMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/branch', isBranch)
      .then(() => setMessage('Запись создана'))
      .catch((e) => setMessage(e.response.data.message))
      .finally(() => setBranch({ branch: '' }));
  };

  const handleChange = (e) => {
    setMessage(e.target.validationMessage);
    const { name, value } = e.target;
    setBranch({
      [name]: value.trim(),
    });
  };

  const hendlerSendFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    const file = fileField.files[0];

    formData.append('file', file);

    axios
      .post('/update/proff767', formData)
      .then(() => {
        console.log('Успех');
      })
      .catch((e) => console.log(e.response.data.message));
  };

  return (
    <MainFrame childNavLink={<NavLinks />}>
      <div className='entry__container'>
        <h2 className='entry__title'>Новый филиал</h2>
        <form className='entry__form' onSubmit={handlerSubmit}>
          <label className='entry__form_label'>Укажите город филиала:</label>
          <input
            placeholder='Введи название филиала'
            className='entry__form_input'
            minLength={2}
            maxLength={30}
            required
            onChange={handleChange}
            value={isBranch.branch}
            name='branch'
          ></input>
          <span className='input-error'>{message}</span>
          <button
            className='button_default button_color-green'
            onSubmit={handlerSubmit}
          >
            Отправить
          </button>
        </form>
        <input type='file' accept='.xlsx' />
        <button onClick={hendlerSendFile}>Send</button>
      </div>
    </MainFrame>
  );
}
export default NewBranch;
