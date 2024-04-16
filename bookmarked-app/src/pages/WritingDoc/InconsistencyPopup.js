import React from 'react';
import '../Character/Character.css';
import './WritingDoc.css';
import { CgClose } from "react-icons/cg";

const InconsistencyPopup = ({ handleCloseInconsistencyPopup, editorContent, gptResponse, topPosition }) => {
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
                {gptResponse === "None Found" ?
                <div className="inconsistency-none-popout" 
                    style={{ height: "40px" }}>
                    <h1 className="inconsistency-none-header"> No inconsistencies were found. </h1> 
                </div> 
                :
                <div className="inconsistency-popup-text" style={{ marginTop: "20px" }}>
                    <h1 className="inconsistency-header" style={{ color: "#D7504D" }} > Inconsistencies Found. </h1>
                    {/* <h3 className="caption-small"> <b>Current Text</b>: {editorContent}</h3>  */}
                    <h3 className="caption-small"> <b>Inconsistencies</b>: {gptResponse} </h3>
                </div>
                }
            </div>
            
        </div>
    );
};

export default InconsistencyPopup;