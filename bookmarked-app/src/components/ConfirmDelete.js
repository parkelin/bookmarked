import React from "react";
import "../App.css";

// need to fix the css for the lol
const ConfirmDelete = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirm-delete-popup">
      <p style={{fontWeight: 'bold'}}>Are you sure you want to delete?</p>
      <button
        style={{
          border: "none",
          textDecoration: "none",
          cursor: "pointer",
          background: '#e3e3e3',
          borderRadius: '5px',
          fontFamily: 'DM Sans'
        }}
        className="confirm-button"
        onClick={onConfirm}
      >
        Confirm
      </button>
      <button 
       style={{
        border: "none",
        textDecoration: "none",
        cursor: "pointer",
        background: "none",
        fontFamily: 'DM Sans' 
    }}
        onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};
export default ConfirmDelete;
