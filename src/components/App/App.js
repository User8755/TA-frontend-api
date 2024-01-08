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

function App() {
  const [login, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);
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
        .finally(setTimeout(() => setLoading(false), 500));
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
        <ModalWindow
          active={modal}
          setModal={setModal}
          child={child}
        ></ModalWindow>
        <Routes>
          <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
          <Route
            path='/login'
            element={<Login setLogin={setLogin}></Login>}
          ></Route>
          <Route
            path='/'
            element={<Main setModal={setModal} setChild={setChild}></Main>}
          ></Route>
          <Route
            path='/list'
            element={
              <ListEnterprise
                enterprise={enterprise}
                setEnterprise={setEnterprise}
              ></ListEnterprise>
            }
          ></Route>
          <Route
            path='/form'
            element={<Form enterprise={enterprise}></Form>}
          ></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
