import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <section className='notfound'>
      <div className='notfound__block'>
        <h2 className='notfound__title'>WTF!!!</h2>
        <p className='notfound__subtitle'>404</p>
        <p className='notfound__subtitle'>Страница не найдена</p>
      </div>
      <Link to='/' className='notfound__link'>
        На главную
      </Link>
    </section>
  );
}

export default NotFoundPage;
