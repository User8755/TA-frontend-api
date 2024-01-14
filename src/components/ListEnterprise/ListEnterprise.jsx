import { NavLink } from 'react-router-dom';
import './ListEnterprise.css';
import { useEffect } from 'react';
import api from '../../untils/api';

function ListEnterprise({
  enterprise,
  setEnterprise,
  enterpriseAccess,
  setEnterpriseAccess,
}) {
  const jwt = JSON.parse(localStorage.getItem('key')).key;

  useEffect(() => {
    Promise.all([api.getEnterpriseAccess(jwt), api.getEnterprise(jwt)])
      .then(([accessEnterprise, userEnterprise]) => {
        setEnterprise(userEnterprise);
        setEnterpriseAccess(accessEnterprise);
      })
      .catch((e) => console.log(e));
  }, [jwt, setEnterprise, setEnterpriseAccess]);

  return (
    <>
      <h2>Мои предприятия</h2>
      <div className='list__box'>
        {enterprise.length !== 0 ? (
          enterprise.map((i) => {
            return (
              <NavLink
                to='/form'
                key={i._id}
                onClick={() => localStorage.setItem('id', i._id)}
              >
                {i.enterprise}
              </NavLink>
            );
          })
        ) : (
          <p>Тут пока ничего нет</p>
        )}
      </div>
      <h2>Предприятия с доступом</h2>
      <div className='list__box'>
        {enterpriseAccess.length !== 0 ? (
          enterpriseAccess.map((i) => {
            return (
              <NavLink
                to='/form'
                key={i._id}
                onClick={() => localStorage.setItem('id', i._id)}
              >
                {i.enterprise}
              </NavLink>
            );
          })
        ) : (
          <p>Тут пока ничего нет</p>
        )}
      </div>
    </>
  );
}

export default ListEnterprise;
