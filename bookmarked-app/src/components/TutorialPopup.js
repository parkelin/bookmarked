import React from 'react';
import "../pages/Tutorial/Tutorial.css";

const TutorialPopup = ({ title, content, onClose, marginTop , marginLeft }) => {
    return (
        <div className="p-tutorial" 
        style={{
            top: marginTop,
            left: marginLeft
        }}>
            <div className="content">
                <h2>{title}</h2>
                <p>{content}</p>
                <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}

export default TutorialPopup;