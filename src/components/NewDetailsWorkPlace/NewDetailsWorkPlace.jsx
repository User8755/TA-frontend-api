import { useEffect, useState } from 'react';
import SelectOne from '../Select/Select';
import prof from '../../untils/prof';
import SelectCodeProff from '../../SelectCodeProff/SelectCodeProff';
import code from '../../untils/code';
import axios from 'axios';

function NewDetailsWorkPlace({ arr, setModal }) {
  const id = localStorage.getItem('id');
  const [isProff, setProff] = useState({});
  const [inputValue, setInputValue] = useState({
    job: '',
    code: '',
    proff: '',
    profId: '',
    proffSIZ: [],
    num: '',
    numWorkers: 0,
    subdivision: '',
  });
  const [a, b] = useState({});
  const [disable, setDisabled] = useState(true);
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
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  useEffect(() => {
    if (
      inputValue.num &&
      inputValue.numWorkers &&
      (inputValue.proff || inputValue.job)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputValue]);
  useEffect(() => {
    setInputValue({
      ...inputValue,
      job: a.job,
      code: a.code,
      proff: isProff.label,
      proffId: isProff.profId,
      proffSIZ: isProff.SIZ,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [a, isProff]);
  console.log(isProff)
  const handlerSubmit = () => {
    const newDetalis = arr.map((i) => {
      delete i._id;
      i.numWorkers = inputValue.numWorkers;
      i.num = inputValue.num;
      i.subdivision = inputValue.subdivision;
      i.job = inputValue.job;
      i.code = inputValue.code;
      i.proff = inputValue.proff;
      i.proffId = inputValue.proffId;
      i.proffSIZ = inputValue.proffSIZ || [];
      return i;
    });
    console.log(newDetalis)
    axios
      .post(`value/${id}/place/new`, { newDetalis })
      .then(() => {
        setModal(false);
        setInputValue({
          job: '',
          code: '',
          proff: '',
          profId: '',
          proffSIZ: [],
          num: '',
          numWorkers: 0,
          subdivision: '',
        });
        setProff({});
      })
      .catch((e) => console.log(e));
  };

  return (
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
          <SelectCodeProff option={sortedOption(code)} setValue={b} value={a} />
        </label>
        <label className='label label__job'>Код ОК-016-94:</label>
        <input
          value={inputValue.code}
          onChange={handleChange}
          name='code'
        ></input>
        <label className='label label__job'>Подразделение:</label>
        <input
          name='subdivision'
          value={inputValue.subdivision}
          onChange={handleChange}
        ></input>
      </div>
      <button
        onClick={handlerSubmit}
        className='button_default button_color-green'
        disabled={disable}
      >
        Отправить
      </button>
    </>
  );
}
export default NewDetailsWorkPlace;
