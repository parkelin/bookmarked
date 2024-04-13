import React from "react";
import "../pages/Tutorial/Tutorial.css";
import { CgClose } from "react-icons/cg";

const TutorialPopup = ({
  content,
  onClose,
  marginTop,
  marginLeft,
  height,
  smallText,
}) => {
  return (
    <div
      className="p-tutorial"
      style={{
        top: marginTop,
        left: marginLeft,
        height: height,
      }}
    >
      {/* <div className="content">
                <p>{content}</p>
                <button className="b-x" onClick={onClose}>X</button>
            </div> */}
      <div className="content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {smallText && <p className="special-small-text">{smallText}</p>}
      </div>
      <button className="b-x" onClick={onClose}>
        <CgClose size={"20px"} color="#DD8CBD" />
      </button>
    </div>
  );
};

export default TutorialPopup;
