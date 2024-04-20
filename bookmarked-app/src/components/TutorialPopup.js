import React from "react";
import "../pages/Tutorial/Tutorial.css";
import { CgClose } from "react-icons/cg";

const TutorialPopup = ({
  header,
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
      <div className="content">
        {header && <p className="popup-heading-bold">{header}</p>}
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
