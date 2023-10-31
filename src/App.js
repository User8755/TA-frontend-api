import './App.css';
import { Route, Routes } from 'react-router-dom';
import Form from './components/Form/Form';
import Update from './components/Update/Update';
import Header from './components/Header/Header';
import ModalUpdata from './components/ModalUpdata/ModalUpdata';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
function App() {
  const [isModal, setModal] = useState(false);
  const [modalChild, setModalChild] = useState('');
  const [job, setJob] = useState({});
  const [listJob, setlistJob] = useState([]);
  const [listSubdivision, setlistSubdivision] = useState([]);

  return (
    <div className='App'>
      <ModalUpdata
        active={isModal}
        setModal={setModal}
        modalChild={modalChild}
        setJob={setJob}
        job={job}
        setlistJob={setlistJob}
        listJob={listJob}
        setlistSubdivision={setlistSubdivision}
        listSubdivision={listSubdivision}
      ></ModalUpdata>
      <Header></Header>
      <main className='main'>
        <Routes>
          <Route
            path='/techoavia-roman'
            element={
              <Form
                setModalChild={setModalChild}
                setModal={setModal}
                job={job}
                setJob={setJob}
                listJob={listJob}
              ></Form>
            }
          ></Route>
          <Route
            path='/update'
            element={
              <Update
                setModalChild={setModalChild}
                setModal={setModal}
              ></Update>
            }
          ></Route>
          <Route path='/' element={<Login></Login>}></Route>
          <Route
            path='/registration'
            element={<Registration></Registration>}
          ></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
