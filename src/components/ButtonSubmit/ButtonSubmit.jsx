import './ButtonSubmit.css';

function ButtonSubmit(props) {
  return (
    <>
      <input type='submit' className='form__button-submit' disabled={props.isDisabled}></input>
    </>
  );
}
export default ButtonSubmit;
