import { useState } from 'react';
import './CreateEnterprise.css';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import axios from 'axios';

function CreateEnterprise({ setModal, enterprise, setEnterprise }) {
  const [input, setInput] = useState({
    enterprise: '',
    inn: '',
    kpp: '',
    order: '',
    chairman: '',
    chairmanJob: '',
    member1: '',
    member1Job: '',
    member2: '',
    member2Job: '',
    member3: '',
    member3Job: '',
    member4: '',
    member4Job: '',
    member5: '',
    member5Job: '',
    member6: '',
    member6Job: '',
  });
  const [err, setErr] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  const [errMessage, setErrMessage] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    axios.post('/enterprise', input)
      .then((i) => {
        console.log(i)
        setEnterprise([...enterprise, i.data]);
        setModal(false);
      })
      .catch((e) => setErr(e))
      .finally(() =>
        setInput({
          enterprise: '',
          inn: '',
          kpp: '',
          order: '',
          chairman: '',
          chairmanJob: '',
          member1: '',
          member1Job: '',
          member2: '',
          member2Job: '',
          member3: '',
          member3Job: '',
          member4: '',
          member4Job: '',
          member5: '',
          member5Job: '',
          member6: '',
          member6Job: '',
        })
      );
  };

  const handlerChange = (e) => {
    setErrMessage(e.target.validationMessage);
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErr('');
    if (input.enterprise && input.inn && input.kpp && input.order.length > 2) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <h2 className='form__title'>Создать новое предпритятие</h2>
      <form className='form__create-enterprise' onSubmit={handlerSubmit}>
        <div className='container'>
          <div className='container__right'>
            <div>
              <label className='label'>Название организации:</label>
              <input
                className='form__input'
                placeholder='Укажите название организации'
                name='enterprise'
                value={input.enterprise}
                onChange={handlerChange}
                minLength={2}
                required
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
                minLength={2}
                required
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
                minLength={2}
                required
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
                minLength={4}
                required
              ></input>
            </div>
          </div>
          <div className='container__left'>
            <div>
              <label className='label'>Председатель комиссии:</label>
              <div className='form__inpyt_row'>
                <input
                  className='form__input'
                  placeholder='ФИО'
                  name='chairman'
                  value={input.chairman}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
                <input
                  className='form__input'
                  placeholder='Должность'
                  name='chairmanJob'
                  value={input.chairmanJob}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
              </div>
            </div>
            <div>
              <label className='label'>Член комиссии:</label>
              <div className='form__inpyt_row'>
                <input
                  className='form__input'
                  placeholder='ФИО'
                  name='member1'
                  value={input.member1}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
                <input
                  className='form__input'
                  placeholder='Должность'
                  name='member1Job'
                  value={input.member1Job}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
              </div>
              <div className='form__inpyt_row'>
                <input
                  className='form__input'
                  placeholder='ФИО'
                  name='member2'
                  value={input.member2}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
                <input
                  className='form__input'
                  placeholder='Должность'
                  name='member2Job'
                  value={input.member2Job}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
              </div>
              <div className='form__inpyt_row'>
                <input
                  className='form__input'
                  placeholder='ФИО'
                  name='member3'
                  value={input.member3}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
                <input
                  className='form__input'
                  placeholder='Должность'
                  name='member3Job'
                  value={input.member3Job}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
              </div>
              <div className='form__inpyt_row'>
                <input
                  className='form__input'
                  placeholder='ФИО'
                  name='member4'
                  value={input.member4}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
                <input
                  className='form__input'
                  placeholder='Должность'
                  name='member4Job'
                  value={input.member4Job}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
              </div>
              <div className='form__inpyt_row'>
                <input
                  className='form__input'
                  placeholder='ФИО'
                  name='member5'
                  value={input.member5}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
                <input
                  className='form__input'
                  placeholder='Должность'
                  name='member5Job'
                  value={input.member5Job}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
              </div>
              <div className='form__inpyt_row'>
                <input
                  className='form__input'
                  placeholder='ФИО'
                  name='member6'
                  value={input.member6}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
                <input
                  className='form__input'
                  placeholder='Должность'
                  name='member6Job'
                  value={input.member6Job}
                  onChange={handlerChange}
                  minLength={4}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <span className='form__span_enterprice'>
          {errMessage || err.message}
        </span>
        <ButtonSubmit isDisabled={isDisabled}></ButtonSubmit>
      </form>
    </>
  );
}

export default CreateEnterprise;
