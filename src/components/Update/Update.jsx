import './Update.css';
import VidSIZ from '../VidSIZ/VidSIZ';

function Update({ setModal, setModalChild }) {
  const hendleOpenModal = (evt) => {
    setModal(true);
    setModalChild(<VidSIZ/>);
    //setModalChild(evt.target.textContent);
    console.log(<VidSIZ/>);
  };

  return (
    <div className='update'>
      <div className='update__cont'>
        <h2>Выберете что нужно добавить</h2>
        <div className='button-wrapper'>
          <div className='button-wrapper'>
            <button className='button button_danger' onClick={hendleOpenModal}>
              Вид СИЗ
            </button>
            <button
              className='button button-maximize'
              onClick={hendleOpenModal}
            ></button>
          </div>
          {/* <button className='button button_danger' onClick={hendleOpenModal}>
            Группа опасности
          </button>
          <button
            className='button button-maximize'
            onClick={hendleOpenModal}
          ></button>
        </div>
        <div className='button-wrapper'>
          <button className='button button_danger' onClick={hendleOpenModal}>
            Опасность
          </button>
          <button
            className='button button-maximize'
            onClick={hendleOpenModal}
          ></button>
        </div>
        <div className='button-wrapper'>
          <button className='button button_danger' onClick={hendleOpenModal}>
            Опасное событие
          </button>
          <button
            className='button button-maximize'
            onClick={hendleOpenModal}
          ></button>
        </div>

        <div className='button-wrapper'>
          <button className='button button_danger' onClick={hendleOpenModal}>
            Тип СИЗ
          </button>
          <button
            className='button button-maximize'
            onClick={hendleOpenModal}
          ></button>
        </div>

        <div className='button-wrapper'>
          <button className='button button_danger' onClick={hendleOpenModal}>
            Вид СИЗ
          </button>
          <button
            className='button button-maximize'
            onClick={hendleOpenModal}
          ></button>
        </div>

        <div className='button-wrapper'>
          <button className='button button_danger' onClick={hendleOpenModal}>
            Свойства, ГОСТ
          </button>
          <button
            className='button button-maximize'
            onClick={hendleOpenModal}
          ></button>
        </div>
        <div className='button-wrapper'>
          <button className='button button_danger' onClick={hendleOpenModal}>
            Свойства EN
          </button>
          <button
            className='button button-maximize'
            onClick={hendleOpenModal}
          ></button>
        </div>

        <div className='button-wrapper'>
          <button className='button button_danger' onClick={hendleOpenModal}>
            Комплектация
          </button>
          <button
            className='button button-maximize'
            onClick={hendleOpenModal}
          ></button>
        </div>

        <div className='button-wrapper'>
          <button className='button button_danger' onClick={hendleOpenModal}>
            Эргономика
          </button>
          <button
            className='button button-maximize'
            onClick={hendleOpenModal}
          ></button> */}
        </div>
      </div>
    </div>
  );
}

export default Update;
