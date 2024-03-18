import { Link, useLocation } from 'react-router-dom';
import './AsideMenu.css';

function AsideMenu({ children }) {
  const location = useLocation().pathname;
  return (
    <aside className='aside__menu'>
      <nav className='aside__nav'>
        {children}
        {location === '/' ? null : (
          <Link to='/' className='aside__button_go-back'>
            Назад
          </Link>
        )}
      </nav>
    </aside>
  );
}

export default AsideMenu;
