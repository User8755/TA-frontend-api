import './NewModal.css';
//import dangerGroup from '../../untils/dangerGroup';

function newModal() {
  return (
    <div className='danger'>
      <h2 className='danger__text'>Группа опасности</h2>
      {/* {dangerGroup.map((item) => (
        <div className='danger__table-wrapper'>
          <h2 className='danger__table-text'>ID</h2>
          <span className='danger__table-value id'>{item.dangerID}</span>
          <h2 className='danger__table-text'>Группа</h2>
          <div className='danger__table-value group'>{item.label}</div>
          <button className='button button-delete'></button>
        </div>
      ))} */}
    </div>
  );
}
export default newModal;
