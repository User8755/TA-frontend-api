import { NavLink } from 'react-router-dom';
import './ButtonGoBack.css'

function ButtonGoBack() {
  return (
    <>
      <NavLink to='/' className='button-back'>Назад</NavLink>
    </>
  );
}

export default ButtonGoBack;
