import Select from 'react-select';
import dangerEvent from '../../untils/dangerousEvent';
import { useState } from 'react';
import './VidSIZ.css';

function VidSIZ() {
  const [value, setValue] = useState({
    dependence: '',
    label: '',
    speciesSIZ: '',
    issuanceRate: '',
    vid: '',
  });
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(value);
  return (
    <form className='form-siz' onSubmit={handleSubmit}>
      <label className='label'>
        Зависимость от опасного события:
        <Select
          options={dangerEvent}
          className='react-select-container'
          classNamePrefix='react-select'
          onChange={(v) => console.log(v)}
        ></Select>
      </label>
      <label className='form-siz__lable'>
        Тип, группа, подгруппа средств индивидуальной защиты, обязательных к
        выдаче
        <input
          className='form__input input'
          onChange={handleChange}
          name='label'
          value={value.label}
        ></input>
      </label>
      <label className='form-siz__lable'>
        Вид СИЗ
        <input
          className='form__input input'
          onChange={handleChange}
          name='vid'
        ></input>
      </label>
      <label className='form-siz__lable'>
        Нормы выдачи средств индивидуальной защиты на год (штуки, пары,
        комплекты, мл)
        <input
          className='form__input input'
          onChange={(evt) => handleChange(evt)}
          name='norm'
        ></input>
      </label>
      <label className='form-siz__lable'>
        ДОП средства
        <input
          className='form__input input'
          onChange={handleChange}
          name='groupId'
        ></input>
      </label>
      <label className='form-siz__lable'>
        Нормы выдачи средств индивидуальной защиты, выдаваемых дополнительно, на
        год (штуки, пары, комплекты, мл)
        <input
          className='form__input input'
          onChange={handleChange}
          name='groupId'
        ></input>
      </label>
      <label className='form-siz__lable'>
        Стандарты (ГОСТ, EN)
        <input
          className='form__input input'
          onChange={handleChange}
          name='groupId'
        ></input>
      </label>
      <label className='form-siz__lable'>
        Экспл.уровень
        <input
          className='form__input input'
          onChange={handleChange}
          name='groupId'
        ></input>
      </label>
      <label className='form-siz__lable'>
        Эргономика
        <input
          className='form__input input'
          onChange={handleChange}
          name='groupId'
        ></input>
      </label>
      <button className='button send'>Отправить</button>
    </form>
  );
}

export default VidSIZ;
