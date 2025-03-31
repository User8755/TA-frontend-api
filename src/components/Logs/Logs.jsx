import './Logs.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainFrame from '../MainFrame/MainFrame';
import NavLinks from '../NavLink/NavLink';

function Logs({ loggedIn }) {
  const [isLogs, setLogs] = useState([]);
  useEffect(() => {
    if (loggedIn)
      axios
        .get('/logs')
        .then((l) => setLogs(l.data))
        .catch();
  }, [loggedIn]);

  return (
    <MainFrame childNavLink={<NavLinks />}>
      <div className='logs'>
        <ul className='logs__container'>
          {isLogs.length > 0 ? (
            isLogs.map((i, index) => {
              const formattedDate = new Date(i.date).toLocaleString();
              return (
                <li
                  className='logs_event'
                  key={index}
                >{`${i.action} ${formattedDate}`}</li>
              );
            })
          ) : (
            <li>Что-то полшло не так, попробуйте позже</li>
          )}
        </ul>
      </div>
    </MainFrame>
  );
}
export default Logs;
