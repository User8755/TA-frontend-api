import { React } from 'react';
import './SpoilerBox.css'

function SpoilerBox({ stateSpoileBox, toggleSpoileBox, title, children, newClass }) {
  return (
    <div className='input-order__wrapper'>
      <span
        className={`input-order__title`}
        // onClick={() => toggleSpoileBox(!stateSpoileBox)}
      >
        {title}
      </span>
      <div
        className={
          stateSpoileBox ? `dropdown-child_open ${newClass}` : 'dropdown-child_close'
        }
      >
        {children}
      </div>
    </div>
  );
}
export default SpoilerBox;
