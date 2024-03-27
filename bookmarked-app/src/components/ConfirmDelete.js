import React from 'react';
import "../App.css";

// need to fix the css for the lol
const ConfirmDelete = ({ onConfirm, onCancel }) => {
    return (
        <div className="confirm-delete-popup">
            <p>Are you sure you want to delete?</p>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};
export default ConfirmDelete;