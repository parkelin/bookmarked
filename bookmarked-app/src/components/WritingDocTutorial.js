import React from "react";
import { useHistory } from 'react-router-dom';
import { CgClose } from "react-icons/cg";
import "../pages/Tutorial/Tutorial.css";

const WritingDocTutorial = ({ onClose }) => {
  const history = useHistory()
  return (
    <div
      className="p-tutorial"
      style={{
        top: "283px",
        left: "1000px",
      }}
    >
      <div className="content">
        <p>Begin your storytelling journey here.</p>
        <p>
          As you craft your novel, consider using our built-in features to track
          and strengthen your world building with a simple highlight and right
          click* on your text.
        </p>
        <p className="special-small-text">*Secondary-click for Mac users.</p>
        <button className="b-x" onClick={onClose}>
          <CgClose size={"20px"} color="#DD8CBD" />
        </button>
        <button className="try-it-button" onClick={() => history.push('/tutorial/doc')}>Try it</button>
      </div>
    </div>
  );
};

export default WritingDocTutorial;
