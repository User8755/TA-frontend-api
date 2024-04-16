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
      <div>
        <ul>
          {isLogs.map((i, index) => {
            return <li key={index}>{`${i.action} ${i.date}`}</li>;
          })}
        </ul>
      </div>
    </MainFrame>
  );
}
export default Logs;
