import React, { useState, useEffect, useRef } from 'react';
import './DropDownMenu.css';

function Dropdown({ options, onChange, value, searchInput, setSearchInput }) {
  const [isFocus, setFocus] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFocus(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  options.forEach((element) => {
    const label = `№ ${element.num}; ${element.proff || element.job}`;
    element.label = label;
  });

  const filteredOptions = options.filter((option) => {
    return option.label.toLowerCase().includes(searchInput.toLowerCase());
  });

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Функция для обновления выбранного элемента
  const handleSelection = (option) => {
    value.job = option.job;
    value.num = option.num;
    value.numWorkers = option.numWorkers;
    value.proff = option.proff;
    value.proffId = option.proffId;
    value.subdivision = option.subdivision;
    value.proffSIZ = option.proffSIZ;
    value.code = option.code;
    onChange({ ...value });
    setSearchInput(option.label);
  };

  return (
    <div className='dropdown' ref={dropdownRef}>
      <input
        type='search'
        placeholder='Поиск...'
        value={searchInput}
        className='form__input'
        onChange={handleInputChange}
        onFocus={() => setFocus(true)}
      />
      <ul className={isFocus ? 'optins-list-active' : 'optins-list'}>
        {filteredOptions.map((option, index) => (
          <li
            className='optins-list-element'
            key={index}
            onClick={() => {
              handleSelection(option);
              setFocus(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
