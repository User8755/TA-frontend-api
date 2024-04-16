import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import { useState, useEffect } from 'react';
import api from '../../untils/api';
import Preloader from '../Preloader/Preloader.jsx';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import ListEnterprise from '../ListEnterprise/ListEnterprise.jsx';
import Form from '../Form/Form.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import ProtectedRouteElement from '../ProtectedRout/ProtectedRout.js';
import Profile from '../Profile/Profile.jsx';
import UsersList from '../UsersList/UsersList.jsx';
import Registration from '../Registration/Registration.jsx';
import NewInfo from '../NewInfo/NewInfo.jsx';
import MyEnterprise from '../MyEnterprise/MyEnterprise.jsx';
import axios from 'axios';
import { BASE_URL } from '../../untils/constants.js';
import Logs from '../Logs/Logs.jsx';
import NewBranch from '../NewBranch/NewBranch.jsx';
import ProtectedRouteRole from '../ProtectedRout/ProtectedRouteRole.jsx';

function App() {
  const [login, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({ role: [] });
  const [modal, setModal] = useState(false);
  const [child, setChild] = useState(null);
  const [enterprise, setEnterprise] = useState([]);
  const [enterpriseAccess, setEnterpriseAccess] = useState([]);

  axios.defaults.baseURL = BASE_URL;

  useEffect(() => {
    tokenCheck();
  }, []);

  if (login)
    axios.defaults.headers.common['Authorization'] = `Bearer ${
      JSON.parse(localStorage.getItem('key')).key
    }`;

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
          }, 1000)
        );
    } else {
      setLoading(false);
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <ModalWindow active={modal} setModal={setModal} child={child} />
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/login' element={<Login setLogin={setLogin} />} />
          <Route
            path='/profile'
            element={
              <ProtectedRouteElement
                element={Profile}
                setLogin={setLogin}
                loggedIn={login}
              />
            }
          />
          <Route
            path='/branch'
            element={
              <ProtectedRouteRole
                element={NewBranch}
                setLogin={setLogin}
                loggedIn={login}
              />
            }
          />
          <Route
            path='/logs'
            element={<ProtectedRouteRole element={Logs} loggedIn={login} />}
          />
          <Route
            path='/my-enterprise'
            element={
              <ProtectedRouteRole
                element={MyEnterprise}
                setLogin={setLogin}
                loggedIn={login}
                setModal={setModal}
                setChild={setChild}
                enterprise={enterprise}
                setEnterprise={setEnterprise}
              />
            }
          />
          <Route
            path='/'
            element={
              <ProtectedRouteElement
                element={ListEnterprise}
                enterprise={enterprise}
                setEnterprise={setEnterprise}
                loggedIn={login}
                enterpriseAccess={enterpriseAccess}
                setEnterpriseAccess={setEnterpriseAccess}
                setModal={setModal}
                setChild={setChild}
              />
            }
          />
          <Route
            path='/users-list'
            element={
              <ProtectedRouteRole
                element={UsersList}
                setModal={setModal}
                setChild={setChild}
                loggedIn={login}
              />
            }
          />
          <Route
            path='/sign-up'
            element={
              <ProtectedRouteRole
                element={Registration}
                setModal={setModal}
                setChild={setChild}
                loggedIn={login}
              />
            }
          />
          <Route
            path='/info'
            element={
              <ProtectedRouteRole element={NewInfo} loggedIn={login} />
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
