import { useEffect, useState } from 'react';
import './Select.css';

function Select({ value, option, setValue }) {
  const [isFocus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState({
    input: '',
  });
  console.log(value);
  const hendlerClick = (obj) => {
    setValue(obj);
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

  const handlerFocus = () => {
    setInputValue({
      input: '',
    });
    setValue({});
    setFocus(true);
  };

  useEffect(() => {
    if (!value.profId) {
      setInputValue({ input: '' });
    } else {
      setInputValue({ input: value.label });
    }
  }, [value]);

  return (
    <div className='serchBox'>
      <input
        className='serchBox__input'
        type='text'
        name='input'
        placeholder='Введите минимум 3 символа'
        value={inputValue.input}
        onFocus={handlerFocus}
        onChange={handlerChangeInput}
      />
      <div className='block'>
        {isFocus && inputValue.input.length > 2
          ? option
              .filter((i) =>
                i.label.toLowerCase().includes(inputValue.input.toLowerCase())
              )
              .map((el, index) => {
                return (
                  <div
                    className='block__select'
                    key={index}
                    onClick={() => hendlerClick(el)}
                  >
                    {el.label}
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
}

export default Select;
