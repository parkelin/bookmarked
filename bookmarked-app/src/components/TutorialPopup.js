import React from 'react';
import "../pages/Tutorial/Tutorial.css";

const TutorialPopup = ({ content, onClose }) => {
    return (
        <div className="p-tutorial">
            <div className="content">
                <p>{content}</p>
                <button className="b-x" onClick={onClose}>X</button>
            </div>
        </div>
    )
}

export default TutorialPopup;