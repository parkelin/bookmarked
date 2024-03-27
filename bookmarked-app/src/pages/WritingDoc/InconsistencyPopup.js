import React from 'react';
import '../Character/Character.css'
import './WritingDoc.css'

const InconsistencyPopup = ({ handleCloseInconsistencyPopup, editorContent }) => {
    return (
    <div className='inconsistency-popup'>  
        <button className='small-close' onClick={handleCloseInconsistencyPopup}>X</button>
        <div className="inconsistency-popup-text">
                <h1 className="character-name-small">Inconsistency Found</h1>
                <h3 className="caption-small">Current Text: {editorContent}</h3>
            </div>
    </div>
    )
}
export default InconsistencyPopup