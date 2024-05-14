import { useEffect, useState } from 'react';

function SelectDefault({ value, option, setValue }) {
  const [isFocus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState({
    input: '',
  });

  const hendlerClick = (obj) => {
    setValue(obj);
    setInputValue({
      input: value.label || obj.label,
    });
    setFocus(false);
  };
  const handlerChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handlerFocus = () => {
    setFocus(true);
  };

  const handlerBlur = () => {
    setTimeout(() => {
      setFocus(false);
    }, 200);
  };

  useEffect(() => {
    if (!inputValue.input) {
      setValue({});
    }
  }, [inputValue, setValue]);

  useEffect(() => {
    if (option)
      option.forEach(
        (i) => (i.visiblyLabel = i.ID ? `${i.label} id: ${i.ID}` : i.label)
      );
  }, [option]);

  useEffect(() => {
    if (value.label) {
      setInputValue({ input: value.label });
    }
  }, [value]);

  useEffect(() => {
    if (!value.label) {
      setInputValue({ input: '' });
    }
  }, [value.label]);

  return (
    <div className='serchBox'>
      <input
        className='form__input'
        type='search'
        name='input'
        placeholder='Выберите значение'
        value={inputValue.input}
        onFocus={handlerFocus}
        onChange={handlerChangeInput}
        autoComplete='off'
        onBlur={handlerBlur}
      />
      <div className='block'>
        {isFocus
          ? option
              .filter((i) =>
                i.visiblyLabel
                  .toLowerCase()
                  .includes(inputValue.input.toLowerCase())
              )
              .map((el, index) => {
                return (
                  <div
                    className='block__select'
                    key={index}
                    onClick={() => hendlerClick(el)}
                  >
                    {el.visiblyLabel}
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
}

export default SelectDefault;
