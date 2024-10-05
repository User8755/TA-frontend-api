import { useEffect, useState } from 'react';
import './WorkerPlaceInfo.css';
import axios from 'axios';
import SelectOne from '../Select/Select';
import prof from '../../untils/prof';
import SelectCodeProff from '../../SelectCodeProff/SelectCodeProff';
import code from '../../untils/code';

function WorkerPlaceInfo({ loggedIn, setModal, setChild }) {
  const [workPlaces, setWorkPlaces] = useState([]);
  const [curent, setCurent] = useState([]);
  const [curentPlace, setCurentPlace] = useState([]);
  const [isProff, setProff] = useState({});
  const [inputValue, setInputValue] = useState({
    job: '',
    code: '',
    proff: '',
    profId: '',
    SIZ: [],
    num: '',
    numWorkers: 0,
  });
  const [a, b] = useState({});
  const id = localStorage.getItem('id');

  useEffect(() => {
    if (isProff)
      setInputValue({
        ...inputValue,
        proff: isProff.label || '',
        profId: isProff.profId || '',
        SIZ: isProff.SIZ || '',
      });
  }, []);

  useEffect(() => {
    if (loggedIn)
      axios
        .get(`value/${id}/worker`)
        .then((i) => setWorkPlaces(i.data))
        .catch((e) => console.log(e));
  }, [id, loggedIn]);

  useEffect(() => {
    if (loggedIn && curent !== '')
      axios
        .post(`value/${id}/worker/curent`, { curent })
        .then((i) => setCurentPlace(i.data))
        .catch((e) => console.log(e));
  }, [curent, id, loggedIn]);

  const sortedOption = (arr) =>
    arr.sort(function (a, b) {
      const nameA = a.label.toLowerCase();
      const nameB = b.label.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log(value);
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handlerClickButton = () => {
    setModal(true);
    setChild(
      <>
        <div>
          <h2>Введите новые реквизиты</h2>
          <label className='label'>Профессия (Приказ 767н приложения 1):</label>
          <SelectOne
            value={isProff}
            option={prof}
            setValue={setProff}
          ></SelectOne>
          <label className='label label__job'>
            Номер Р/М&#42;:
            <input
              className='form__input form__input_small'
              autoComplete='on'
              name='num'
              onChange={handleChange}
              value={inputValue.num}
            ></input>
          </label>
          <label className='label label__job'>
            Кол-во работников&#42;:
            <input
              className='form__input form__input_small'
              autoComplete='on'
              name='numWorkers'
              type='number'
              onChange={handleChange}
              value={inputValue.numWorkers}
            ></input>
          </label>
          <label className='label'>
            Профессия:
            <SelectCodeProff
              option={sortedOption(code)}
              setValue={b}
              value={(value) => console.log(value)}
            />
          </label>
          <label className='label label__job'>Код ОК-016-94:</label>
          <input></input>
          <label className='label label__job'>Подразделение:</label>
          <input></input>
        </div>
        <button>Отправить</button>
      </>
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
      <datalist id='worker-places'>
        {workPlaces.map((data) => {
          return (
            <option key={data._id}>
              № {data.num} {data.proff ? data.proff : data.job}
            </option>
          );
        })}
      </datalist>
      <section>
        <h2>Обязательные СИЗ Приложения 1:</h2>
        <div className='siz__container'>
          {curentPlace[0] && curentPlace[0].proffSIZ
            ? curentPlace[0].proffSIZ.map((i, index) => {
                return (
                  <span key={index}>
                    <b>Тип:</b> {i.type}; <b>Вид:</b> {i.vid}; <b>Норма:</b>
                    {i.norm};
                  </span>
                );
              })
            : null}
        </div>
        <section>
          <h2>Записи:</h2>
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
      </section>
      <button onClick={handlerClickButton}>
        Новое РМ на основании текущего
      </button>
    </div>
  );
}

export default WorkerPlaceInfo;
