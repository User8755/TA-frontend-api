import { Link } from 'react-router-dom';
import './AsideMenu.css';

function AsideMenu({ children }) {
  return (
    <aside className='aside__menu'>
      <nav className='aside__nav'>
        {children}
        <Link to='/' className='aside__button_go-back'>
          Назад
        </Link>
      </nav>
    </aside>
  );
}

export default AsideMenu;
