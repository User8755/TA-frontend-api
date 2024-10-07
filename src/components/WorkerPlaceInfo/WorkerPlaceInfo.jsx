import { useEffect, useState } from 'react';
import './WorkerPlaceInfo.css';
import axios from 'axios';
import NewDetailsWorkPlace from '../NewDetailsWorkPlace/NewDetailsWorkPlace';
import { NavLink } from 'react-router-dom';

function WorkerPlaceInfo({ loggedIn, setModal, setChild }) {
  const [workPlaces, setWorkPlaces] = useState([]);
  const [curent, setCurent] = useState('');
  const [curentPlace, setCurentPlace] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const id = localStorage.getItem('id');

  useEffect(() => {
    if (loggedIn)
      axios
        .get(`value/${id}/worker`)
        .then((i) => setWorkPlaces(i.data))
        .catch((e) => console.log(e));
  }, [id, loggedIn]);

  useEffect(() => {
    if (loggedIn && curent !== '') {
      axios
        .post(`value/${id}/worker/curent`, { curent })
        .then((i) => {
          setCurentPlace(i.data);
          setDisabled(false);
        })
        .catch((e) => console.log(e));
    } else {
      setCurentPlace([]);
      setDisabled(true);
    }
  }, [curent, id, loggedIn]);

  const handlerClickButton = () => {
    setModal(true);
    setChild(
      <NewDetailsWorkPlace
        arr={curentPlace}
        setModal={setModal}
      ></NewDetailsWorkPlace>
    );
  };

  return (
    <div>
      <label>Выберите рабочее место:</label>
      <select
        type='text'
        list='worker-places'
        onChange={(e) => setCurent(e.target.value)}
      >
        <option defaultChecked></option>
        {workPlaces.map((data) => {
          return (
            <option key={data._id} value={data.num}>
              № {data.num} {data.proff ? data.proff : data.job}
            </option>
          );
        })}
      </select>
      <section className='detalis__container'>
        <h2>Реквизиты:</h2>
        <span>
          Профессия (Приказ 767н):{' '}
          {curentPlace.length > 0 ? curentPlace[0].proff : null}
        </span>
        <span>
          ID профессии: {curentPlace.length > 0 ? curentPlace[0].proffid : null}
        </span>
        <span>
          Номер Р/М: {curentPlace.length > 0 ? curentPlace[0].num : null}
        </span>
        <span>
          Кол-во работников:{' '}
          {curentPlace.length > 0 ? curentPlace[0].numWorkers : null}
        </span>
        <span>
          Профессия: {curentPlace.length > 0 ? curentPlace[0].job : null}
        </span>
        <span>
          Код ОК-016-94: {curentPlace.length > 0 ? curentPlace[0].code : null}
        </span>
        <span>
          Подразделение:{' '}
          {curentPlace.length > 0 ? curentPlace[0].subdivision : null}
        </span>
      </section>
      <datalist id='worker-places'>
        {workPlaces.map((data) => {
          return (
            <option key={data._id}>
              № {data.num} {data.proff ? data.proff : data.job}
            </option>
          );
        })}
      </datalist>
      {curentPlace[0] && curentPlace[0].proffSIZ.length > 0 ? (
        <section>
          <h2>Обязательные СИЗ Приложения 1:</h2>
          <div className='siz__container'>
            {curentPlace[0] && curentPlace[0].proffSIZ
              ? curentPlace[0].proffSIZ.map((i, index) => {
                  return (
                    <span key={index} className='siz__info'>
                      <b>Тип:</b> {i.type}; <b>Вид:</b> {i.vid}; <b>Норма:</b>
                      {i.norm};
                    </span>
                  );
                })
              : null}
          </div>
        </section>
      ) : null}
      <section>
        <h2>Записи:</h2>
        <button
        onClick={handlerClickButton}
        className='button_default button_color-green'
        disabled={disabled}
      >
        Новое РМ на основании текущего
      </button>
        <div className='history__container'>
          {curentPlace.map((i) => {
            return (
              <span
                className='history__info'
                key={i._id}
              >{`${i.dangerEvent776Id}/${i.dangerEventID}; ${i.source}; ${i.typeSIZ}`}</span>
            );
          })}
        </div>
      </section>
      <NavLink to='/form'>К форме</NavLink>
    </div>
  );
}

export default WorkerPlaceInfo;
