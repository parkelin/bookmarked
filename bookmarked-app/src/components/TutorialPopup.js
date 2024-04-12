import React from 'react';
import "../pages/Tutorial/Tutorial.css";

const TutorialPopup = ({ title, content, onClose }) => {
    return (
        <div className="p-tutorial">
            <div className="content">
                <h2>{title}</h2>
                <p>{content}</p>
                <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}

export default TutorialPopup;