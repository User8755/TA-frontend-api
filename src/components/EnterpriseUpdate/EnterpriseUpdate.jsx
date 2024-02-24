import { useCallback, useEffect, useState } from 'react';
import api from '../../untils/api';
import ButtonDel from '../ButtonDel/ButtonDel';
import './EnterpriseUpdate.css';
import axios from 'axios';

function EnterpriseUpdate({ enterprise, currentUser }) {
  const [users, setUsers] = useState([]);
  const [access, setAccess] = useState('');
  const [currentE, setCurrentE] = useState(enterprise);
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    setCurrentE(enterprise);
  }, [enterprise]);

  const updateCounter = useCallback(() =>
    {api
      .getValue(enterprise._id, JSON.parse(localStorage.getItem('key')).key)
      .then((e) => setCounter(e))
      .catch((e) => console.warn(e))},[enterprise._id]
  );

  useEffect(() => {
    updateCounter();
  }, [updateCounter]);

  useEffect(() => {
    api
      .getUsersBranch(JSON.parse(localStorage.getItem('key')).key)
      .then((i) => setUsers(i))
      .catch((i) => console.log(i));
  }, []);

  const handlerChange = (e) => {
    const { value } = e.target;
    setAccess(value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    api
      .updateAccess(
        enterprise._id,
        access,
        JSON.parse(localStorage.getItem('key')).key
      )
      .then((i) => setCurrentE(i))
      .catch((i) => console.log(i));
  };

  const hendlerFilterAccess = users.filter((user) =>
    currentE.access.includes(user._id)
  );

  const hendlerFilterNotAccess = users.filter(
    (user) =>
      !currentE.access.includes(user._id) && user._id !== currentUser._id
  );
  const [status, setStaus] = useState('');

  const hendlerSendFile = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    const file = fileField.files[0];

    formData.append('file', file);

    axios
      .put(`https://api.tafontend.online/value/${enterprise._id}`, formData)
      .then(() => {
        updateCounter()
        setStaus('файл загружен');
        setTimeout(()=>{setStaus('')}, 10000)
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h2>{currentE.enterprise}</h2>
      <span>Количество записей: {counter.length}</span>
      <h2>Обновить данные</h2>
      <form className='form__update_value' onSubmit={hendlerSendFile}>
        <input type='file' accept='.xlsx' />
        <span className='form__update_span'>{status}</span>
        <button type='submit'>Отправить</button>
      </form>
      <h2>Выдать доступ</h2>
      <form onSubmit={handlerSubmit}>
        <select name='user' onChange={handlerChange}>
          <option defaultChecked value={currentE}></option>
          {hendlerFilterNotAccess.map((i) => {
            return (
              <option key={i._id} value={i._id}>
                {i.family + ' ' + i.name}
              </option>
            );
          })}
        </select>
        <input type='submit'></input>
      </form>
      <section className='form__enterprice-update'>
        <h2>Пользователи с доступом:</h2>
        {hendlerFilterAccess.map((i) => {
          return (
            <div className='update-card'>
              <div key={i._id + 1}>{i.family + ' ' + i.name}</div>
              <ButtonDel
                key={i._id}
                id={i._id}
                enterprise={enterprise._id}
                setCurrentE={setCurrentE}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default EnterpriseUpdate;
