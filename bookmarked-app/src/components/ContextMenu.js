import React from 'react';
import './ContextMenu.css';

function ContextMenu({ x, y, onClose, onClickFindShortcut, onClickCreateShortcut }) {

    const handleFindClick = () => {
      onClickFindShortcut()
      onClose();
    };

    const handleCreateClick = () => {
      onClickCreateShortcut()
      onClose();
    }
  
    return (
      <div className="context-menu" style={{ left: x, top: y }}>
        
          <button className='drop-down-option' onClick={handleFindClick}>Find Character Page</button>
          <button className='drop-down-option' onClick={handleCreateClick}>Create Character Page</button>
        
      </div>
    );
  }
  
  export default ContextMenu;