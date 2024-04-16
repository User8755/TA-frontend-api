import axios from 'axios';
import './Card.css';

function Card({ user, setModal, setChild, isOpenSpoiler }) {
  const handlerDelRole = (i) => {
    const data = { role: i, id: user._id };
    axios
      .delete('/users/role', { data })
      .then((i) => (user.role = i.data.role))
      .catch((i) => console.log(i));
  };
  const data = { role: '', id: user._id };

  const handlerNewRole = () => {
    axios
      .patch('/users/role', data)
      .then((i) => (user = i.data))
      .catch((i) => console.log(i));
  };

  const handleChange = (e) => {
    data.role = e.target.value;
  };
  
  const handlerOpenUser = () => {
    setModal(true);
    setChild(
      <div>
        <h2>
          Пользователь: {user.family} {user.name}
        </h2>
        <p>Текущие роли:</p>
        {user.role.map((i, index) => {
          return (
            <div key={index}>
              <span>{i}</span>
              <button onClick={() => handlerDelRole(i)}>X</button>
            </div>
          );
        })}
        <h3>Задать роль:</h3>
        <select onChange={handleChange} name='role'>
          <option defaultChecked></option>
          <option value='user'>Пользователь</option>
          <option value='admin'>Администратор</option>
        </select>
        <button onClick={handlerNewRole}>Отправить</button>
      </div>
    );
  };

  return (
    <div
      onClick={() => handlerOpenUser()}
      to='/user-info'
      className={isOpenSpoiler ? 'main__card' : ' main__card close'}
    >
      <p className='main__item-cell family'>{`${user.family} ${user.name}`}</p>
      <p className='main__item-cell name'>{user.branch}</p>
    </div>
  );
}
export default Card;
