import { useEffect, useState } from 'react';

function SelectCoverct({ option, Danger, DangerEvent }) {
  const [isFocus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState({
    input: '',
  });

  const hendlerClick = (obj) => {
    Danger({
      ID: obj.IdDanger767,
      label: obj.danger767,
    });
    DangerEvent({
      ID: obj.IdDangerEvent767,
      label: obj.dangerEvent767,
    });
    setInputValue({
      input: obj.visiblyLabel,
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

  if (option)
    option.forEach(
      (i) =>
        (i.visiblyLabel = `${i.danger767} ID: ${i.IdDanger767} + ${i.dangerEvent767} ID: ${i.IdDangerEvent767}`)
    );

  useEffect(() => {
    if (option.length === 0) {
      setInputValue({ input: '' });
    }
  }, [option]);

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
        disabled={!option.length > 0}
      />
      <div className='block'>
        {isFocus
          ? option.map((el, index) => {
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

export default SelectCoverct;
