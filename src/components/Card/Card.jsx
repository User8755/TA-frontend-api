import './Card.css';

function Card({ user, setModal, setChild, isOpenSpoiler }) {


  return (
    <div
      className={isOpenSpoiler ? 'main__card' : ' main__card close'}
    >
      <p className='main__item-cell family'>{user.family}</p>
      <p className='main__item-cell name'>{user.name}</p>
      <p className='main__item-cell name'>{user.branch}</p>
    </div>
  );
}
export default Card;
