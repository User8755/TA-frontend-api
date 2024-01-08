import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../untils/api';
import Preloader from '../Preloader/Preloader.jsx';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import Main from '../Main/Main.jsx';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import ListEnterprise from '../ListEnterprise/ListEnterprise.jsx';
import Form from '../Form/Form.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import ProtectedRouteElement from '../ProtectedRout/ProtectedRout.js';
import Profile from '../Profile/Profile.jsx';
function App() {
  const [login, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [modal, setModal] = useState(false);
  const [child, setChild] = useState(null);
  const [enterprise, setEnterprise] = useState([]);

  useEffect(() => {
    tokenCheck();
  }, []);

  const tokenCheck = () => {
    if (localStorage.getItem('key')) {
      api
        .tokenValid(JSON.parse(localStorage.getItem('key')).key)
        .then((item) => {
          if (item) {
            setLogin(true);
          }
        })
        .catch((err) => console.log(err))
        .finally(
          setTimeout(() => {
            setLoading(false);
          }, 100)
        );
    }
  };

  useEffect(() => {
    if (login)
      api
        .getCurentUser(JSON.parse(localStorage.getItem('key')).key)
        .then((i) => setCurrentUser(i))
        .catch((e) => console.log(e));
  }, [login]);

  if (isLoading) {
    return <Preloader />;
  }
  console.log(child);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <ModalWindow active={modal} setModal={setModal} child={child} />
        <Routes>
          <Route path='*' element={NotFoundPage} />
          <Route path='/login' element={<Login setLogin={setLogin} />} />
          <Route
            path='/profile'
            element={
              <ProtectedRouteElement
                element={Profile}
                currentUser={currentUser}
                setLogin={setLogin}
                loggedIn={login}
                setModal={setModal}
                setChild={setChild}
              />
            }
          />
          <Route
            path='/'
            element={
              <ProtectedRouteElement
                element={Main}
                setModal={setModal}
                setChild={setChild}
                loggedIn={login}
              />
            }
          />
          <Route
            path='/list'
            element={
              <ProtectedRouteElement
                element={ListEnterprise}
                enterprise={enterprise}
                setEnterprise={setEnterprise}
                loggedIn={login}
              />
            }
          />
          <Route
            path='/form'
            element={
              <ProtectedRouteElement
                element={Form}
                enterprise={enterprise}
                loggedIn={login}
              />
            }
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
