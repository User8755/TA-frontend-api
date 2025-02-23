import { useState } from 'react';
import MainFrame from '../MainFrame/MainFrame';
import NavLinks from '../NavLink/NavLink';
import axios from 'axios';
function Update({ setModal, setChild }) {
  const [status, setStatus] = useState('');
  const hendlerSendFile = (name) => {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    const file = fileField.files[0];

    formData.append('file', file);

    axios
      .post(`/update/${name}`, formData)
      .then(() => {
        setStatus('Успех');
      })
      .catch((e) => setStatus(e.response.data.message));
  };

  const updataProff767 = () => {
    setModal(true);
    setChild(
      <>
        <input type='file' accept='.xlsx' />
        <button onClick={() => hendlerSendFile('proff767')}>Send</button>
        <span>{status}</span>
      </>
    );
  };

  const updataTypeSiz = () => {
    setModal(true);
    setChild(
      <>
        <input type='file' accept='.xlsx' />
        <button onClick={() => hendlerSendFile('type-siz')}>Send</button>
        <span>{status}</span>
      </>
    );
  };
  return (
    <MainFrame childNavLink={<NavLinks />}>
      <div className='cont'>
        <button
          className='button button_color-darck'
          onClick={() => updataProff767()}
        >
          Приложение 1
        </button>
        <button
          className='button button_color-darck'
          onClick={() => updataTypeSiz()}
        >
          Приложение 2
        </button>
      </div>
    </MainFrame>
  );
}

export default Update;
