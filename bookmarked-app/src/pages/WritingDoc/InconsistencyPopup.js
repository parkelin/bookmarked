import React from 'react';
import '../Character/Character.css';
import './WritingDoc.css';
import { CgClose } from "react-icons/cg";

const InconsistencyPopup = ({ handleCloseInconsistencyPopup, editorContent, gptResponse }) => {
    return (
        <div className="shortcut-rounded-rectangle">
            <button 
                className='close'
                onClick={handleCloseInconsistencyPopup}
                style={{
                    border: "none",
                    color: "#000",
                    background: "none",
                    cursor: "pointer",
                    marginTop: "5px",
                    left: "90%",
                    zIndex: 1000,
                  }}
            >
                <CgClose size={"20px"} />
            </button>

            {gptResponse === "None Found" ?
            <div className="inconsistency-popup-text2" 
                style={{ marginTop: "20px" }}>
                <h1 className="no-inconsistency-header character-name-small inconsistency-name-small"> No Inconsistencies Found! </h1> 
            </div> :
            <div className=" inconsistency-popup-text" style={{ marginTop: "20px" }}>
                <h1 className="inconsistency-header character-name-small inconsistency-name-small"> Inconsistency Found. </h1>
                <h3 className="caption-small"> <b>Current Text</b>: {editorContent}</h3>
                <h3 className="caption-small"> <b>Inconsistencies</b>: {gptResponse} </h3>
            </div>
            }
            
        </div>
    );
};

export default InconsistencyPopup;