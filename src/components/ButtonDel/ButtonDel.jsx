import api from '../../untils/api';
import './ButtonDel.css';
function ButtonDel({ id, enterprise, setCurrentE }) {
  const hendlerCloseAccess = () => {
    api
      .updateCloseAccess(
        enterprise,
        id,
        JSON.parse(localStorage.getItem('key')).key
      )
      .then((newAccess) => setCurrentE(newAccess))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <button className='button_del' onClick={hendlerCloseAccess}></button>
    </>
  );
}

export default ButtonDel;
