import { useEffect, useState } from 'react';

function SelectCodeProff({ value, option, setValue }) {
  const [isFocus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState({
    input: '',
  });

  const hendlerClick = (obj) => {
    setValue({
      ...value,
      job: obj.label,
      code: obj.ID || '',
    });
    setFocus(false);
  };

  const handlerChangeInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
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
      setValue({
        ...value,
        job: '',
        code: '',
      });
    }
  }, [inputValue, setValue]);

  useEffect(() => {
    if (option)
      option.forEach(
        (i) => (i.visiblyLabel = i.ID ? `${i.label} id: ${i.ID}` : i.label)
      );
  }, [option]);

  useEffect(() => {
    if (value.job) {
      setInputValue({ input: value.job });
    }
  }, [value]);

  useEffect(() => {
    if (!value.job) {
      setInputValue({ input: '' });
    }
  }, [value.job]);
  return (
    <div className='serchBox'>
      <input
        className='form__input'
        type='search'
        name='job'
        placeholder='Выберите значение'
        value={inputValue.input}
        onFocus={handlerFocus}
        onChange={handlerChangeInput}
        autoComplete='off'
        onBlur={handlerBlur}
      />
      <div className='block'>
        {isFocus && inputValue.input.length > 2
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

export default SelectCodeProff;
