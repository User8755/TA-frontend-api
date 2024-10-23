import { useEffect, useState } from 'react';
import prof from '../../untils/prof';
import code from '../../untils/code';
import SelectCodeProff from '../../SelectCodeProff/SelectCodeProff';
import axios from 'axios';
function CreateWorkPlace({ setWorkerPlace, workPlaces }) {
  const [isFocus, setFocus] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [inputValue, setInputValue] = useState({
    proff: '',
    numWorkers: '',
    num: '',
    profId: '',
    proffSIZ: [],
    subdivision: '',
    code: '',
    job: '',
  });

  const id = localStorage.getItem('id');

  const handlerChangeInput = (e) => {
    setStatusMessage('');
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeNum = (evt) => {
    setStatusMessage('');
    const { name, value } = evt.target;
    setInputValue({
      ...inputValue,
      [name]: Number(value),
    });
  };

  const handlerChangeProf = (el) => {
    setStatusMessage('');
    setInputValue({
      ...inputValue,
      proff: el.label,
      proffId: el.profId,
      proffSIZ: el.SIZ,
    });

    setTimeout(() => {
      setFocus(false);
    }, 200);
  };

  const handlerClearForm = () => {
    axios
      .post(`work-place/${id}/worker`, inputValue)
      .then((e) => {
        setWorkerPlace([...workPlaces, e.data]);
        console.log(e.data);
        setStatusMessage('Рабочее место созадно');
      })
      .catch((e) => setStatusMessage(e.request.responseText));
    setInputValue({
      proff: '',
      numWorkers: '',
      num: '',
      profId: '',
      proffSIZ: [],
      subdivision: '',
      code: '',
      job: '',
    });
  };

  const sortedOption = (arr) =>
    arr.sort(function (a, b) {
      const nameA = a.label.toLowerCase();
      const nameB = b.label.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

  useEffect(() => {
    if (inputValue.proff) {
      const test = code.filter((i) => i.label.includes(inputValue.proff));
      test.length === 1
        ? setInputValue({ ...inputValue, code: test[0].ID })
        : setInputValue({ ...inputValue, code: 'Выберите значение' });
    } else {
      setInputValue({ ...inputValue, code: '' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue.proff]);

  return (
    <form>
      <label className='label'>
        Профессия (Приказ 767н приложения 1):
        <input
          className='form__input'
          name='proff'
          placeholder='Введите от 3-х символов'
          onChange={handlerChangeInput}
          value={inputValue.proff}
          autoComplete='off'
          onFocus={() => setFocus(true)}
        ></input>
        <div className='block' id='list'>
          {isFocus && inputValue.proff.length > 2
            ? prof
                .filter((i) =>
                  i.label.toLowerCase().includes(inputValue.proff.toLowerCase())
                )
                .map((el, index) => {
                  return (
                    <div
                      className='block__select'
                      key={index}
                      onClick={() => handlerChangeProf(el)}
                    >
                      {el.label}
                    </div>
                  );
                })
            : null}
        </div>
      </label>
      <div className='form__block_job'>
        <label className='label label__job'>
          Номер Р/М&#42;:
          <input
            className='form__input form__input_small'
            autoComplete='on'
            onChange={handlerChangeInput}
            name='num'
            value={inputValue.num}
          ></input>
        </label>
        <label className='label label__job'>
          Кол-во работников&#42;:
          <input
            className='form__input form__input_small'
            autoComplete='on'
            onChange={handleChangeNum}
            name='numWorkers'
            value={inputValue.numWorkers}
          ></input>
        </label>
      </div>
      <label className='label'>
        Профессия:
        <SelectCodeProff
          option={sortedOption(code)}
          setValue={setInputValue}
          value={inputValue}
        />
      </label>
      <label className='label'>
        Код ОК-016-94:
        <input
          className='form__input'
          name='code'
          onChange={handlerChangeInput}
          value={inputValue.code}
        />
      </label>
      <label className='label'>
        Подразделение:
        <input
          className='form__input'
          name='subdivision'
          onChange={handlerChangeInput}
          value={inputValue.subdivision}
        />
      </label>
      <span>{statusMessage}</span>
      <button
        type='button'
        className='button button_color-green'
        onClick={handlerClearForm}
      >
        Отправить
      </button>
    </form>
  );
}

export default CreateWorkPlace;
