import './ModalWindow.css';

function ModalWindow({ active, setModal, child }) {
  return (
    <div
      className={active ? 'modal__overlay' : 'modal__overlay-disabled'}
      onClick={() => setModal(false)}
    >
      <div className='modal__window' onClick={(evt) => evt.stopPropagation()}>
        {child}
        <button
          className='button_close'
          onClick={() => setModal(false)}
        ></button>
        <button className='button_close-bottom' onClick={() => setModal(false)}>Закрыть</button>
      </div>
    </div>
  );
}

export default ModalWindow;
