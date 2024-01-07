import { NavLink } from 'react-router-dom';
import './ListEnterprise.css';
import { useEffect } from 'react';
import api from '../../untils/api';

function ListEnterprise({ enterprise, setEnterprise }) {

  useEffect(() => {
    api
      .getEnterprise(JSON.parse(localStorage.getItem('key')).key)
      .then((i) => setEnterprise(i))
      .catch((i) => console.log(i));
  }, [setEnterprise]);

  return (
    <div className='list__box'>
      {enterprise.length !== 0 ? (
        enterprise.map((i) => {
          return (
            <NavLink to='/form' key={i._id} onClick={() => localStorage.setItem('id', i._id)}>
              {i.enterprise}
            </NavLink>
          );
        })
      ) : (
        <p>Тут пока ничего нет</p>
      )}
    </div>
  );
}

export default ListEnterprise;
