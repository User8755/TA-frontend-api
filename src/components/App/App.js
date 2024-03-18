import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../untils/api';
import Preloader from '../Preloader/Preloader.jsx';
import { CurrentUserContext } from '../Contexts/CurrentUserContext';
import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import ListEnterprise from '../ListEnterprise/ListEnterprise.jsx';
import Form from '../Form/Form.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import ProtectedRouteElement from '../ProtectedRout/ProtectedRout.js';
import Profile from '../Profile/Profile.jsx';
import Select from '../Select/Select.jsx';
import UsersList from '../UsersList/UsersList.jsx';
import Registration from '../Registration/Registration.jsx';
import NewInfo from '../NewInfo/NewInfo.jsx';
import MyEnterprise from '../MyEnterprise/MyEnterprise.jsx';
import axios from 'axios';
import { BASE_URL } from '../../untils/constants.js';

function App() {
  const [login, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
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
                currentUser={currentUser}
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
            path='/my-enterprise'
            element={
              <ProtectedRouteElement
                element={MyEnterprise}
                currentUser={currentUser}
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
              <ProtectedRouteElement
                element={UsersList}
                setModal={setModal}
                setChild={setChild}
                loggedIn={login}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path='/sign-up'
            element={
              <ProtectedRouteElement
                element={Registration}
                setModal={setModal}
                setChild={setChild}
                loggedIn={login}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path='/info'
            element={
              <ProtectedRouteElement element={NewInfo} loggedIn={login} />
            }
          />
          {/* <Route
            path='/list'
            element={
              <ProtectedRouteElement
                element={ListEnterprise}
                enterprise={enterprise}
                setEnterprise={setEnterprise}
                loggedIn={login}
                enterpriseAccess={enterpriseAccess}
                setEnterpriseAccess={setEnterpriseAccess}
              />
            }
          /> */}
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
          <Route path='/sel' element={<Select></Select>}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
