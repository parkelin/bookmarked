import React from 'react';
import "../pages/Tutorial/Tutorial.css";

const WritingDocTutorial = ({ onClose }) => {
    return (
        <div className="p-tutorial">
            <div className="content">
                <p>Begin your storytelling journey here. As you create characters, explore new worlds, and build your novel,
                consider using our built-in features to track and strengthen your world building with a simple highlight and right click on 
                your text.</p>
                <button className="b-x" onClick={onClose}>X</button>
                <button>next</button>
            </div>
        </div>
    )
}

export default WritingDocTutorial;