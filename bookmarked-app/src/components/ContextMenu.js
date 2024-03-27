import React from 'react';
import './ContextMenu.css';

function ContextMenu({ x, y, onClose, onClickFindShortcut }) {

    const handleClick = () => {
      onClickFindShortcut()
      onClose();
    };
  
    return (
      <div className="context-menu" style={{ left: x, top: y }}>
        
          <button className='drop-down-option' onClick={handleClick}>Find Character Page</button>
          <button className='drop-down-option' onClick={handleClick}>Create Character Page</button>
        
      </div>
    );
  }
  
  export default ContextMenu;