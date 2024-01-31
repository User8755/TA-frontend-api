import { useState } from 'react';
import './Select.css';
import prof from '../../untils/prof';

function Select() {
  const [isFocus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState({
    input: '',
  });
  const [isObj, setObj] = useState({});

  const hendlerClick = (obj) => {
    setObj(obj);
    setFocus(false);
    setInputValue({
      input: obj.label,
    });
  };

  const handlerChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  console.log(inputValue);
  console.log(isObj);

  const hendleFilter = prof.filter((i) =>
    i.label.toLowerCase().includes(inputValue.input.toLowerCase())
  );
  return (
    <>
      <input
        type='text'
        name='input'
        placeholder='Введите минимум 3 символа'
        value={inputValue.input}
        onFocus={() => {
          setFocus(true);
        }}
        onChange={handlerChangeInput}
      />
      <div className='block'>
        {isFocus && inputValue.input.length > 3
          ? hendleFilter.map((el) => {
              return (
                <div
                  className='div'
                  key={el.profId}
                  onClick={() => hendlerClick(el)}
                >
                  {el.label}
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

export default Select;
