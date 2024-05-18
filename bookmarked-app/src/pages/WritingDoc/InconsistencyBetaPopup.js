import React from 'react';
import '../Character/Character.css';
import './WritingDoc.css';
import { CgClose } from "react-icons/cg";

const InconsistencyBetaPopup = ({ handleCloseInconsistencyPopup, topPosition }) => {
    const dynamicStyle = {
        top: `${topPosition}px`,
        right: '500px', // Adjust as necessary to align with the text editor's right side
    };

    return (
        <div className="inconsistency-popout" style={dynamicStyle}>
            <button 
                className='close'
                onClick={handleCloseInconsistencyPopup}
                style={{
                    border: "none",
                    color: "#000",
                    background: "none",
                    cursor: "pointer", 
                    marginTop: "5px",
                    left: "88%",
                    zIndex: 1000,
                  }}
            >
                <CgClose size={"18px"} />
            </button>

            <div className="scroll-container">
                <div className="inconsistency-popup-text" style={{ marginTop: "20px" }}>
                    <h1 className="inconsistency-header" style={{ color: "#D7504D" }} > Inconsistency Checker is unavailable. </h1>
                    <div className="inconsistency-caption"> <b>{"We are currently in the process of releasing this feature to the public. Stay tuned for updates!"}</b> </div>
                </div>
            </div>
            
        </div>
    );
};

export default InconsistencyBetaPopup;