import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const nav = useNavigate();
  return (
    <section className='notfound'>
      <div className='notfound__block'>
        <h2 className='notfound__title'>WTF!!!</h2>
        <p className='notfound__subtitle'>404</p>
        <p className='notfound__subtitle'>Страница не найдена</p>
      </div>
      <button onClick={() => nav(-1)}>Назад</button>
    </section>
  );
}

export default NotFoundPage;
