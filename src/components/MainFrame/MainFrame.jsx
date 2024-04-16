import './MainFrame.css';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import { useContext } from 'react';
function MainFrame(props) {
  const location = useLocation().pathname;
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className='main-frame'>
      <aside className='aside__menu'>
        <nav className='aside__nav'>
          {props.childNavLink}
          {location === '/' ? null : (
            <Link to='/' className='aside__button_go-back'>
              Назад
            </Link>
          )}
        </nav>
      </aside>
      <main className='main-frame__content'>
        {!currentUser.role.includes('user') ? (
          <h1>Нет доступа</h1>
        ) : (
          props.children
        )}
      </main>
    </section>
  );
}
export default MainFrame;
