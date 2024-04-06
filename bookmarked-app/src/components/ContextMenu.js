import React from "react";
import "./ContextMenu.css";
import { MdOutlinePersonSearch } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { MdOutlineRunningWithErrors } from "react-icons/md";


function ContextMenu({
  x,
  y,
  onClose,
  onClickFindShortcut,
  onClickCreateShortcut,
}) {
  const handleFindClick = () => {
    onClickFindShortcut();
    onClose();
  };

  const handleCreateClick = () => {
    onClickCreateShortcut();
    onClose();
  };

  return (
    <div className="context-menu" style={{ left: x, top: y + 10 }}>
      <button
        className="drop-down-option"
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          textDecoration: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={handleFindClick}
      >
        <MdOutlinePersonSearch size={"16px"} style={{marginRight: '5px'}}/>
        Find Character Page
      </button>
      <div className="drop-down-divider" />
      <button
        className="drop-down-option"
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          textDecoration: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={handleCreateClick}
      >
        <MdContactPage size={"16px"} style={{marginRight: '5px'}}/>
        Create Character Page
      </button>
      <div className="drop-down-divider" />
      <button
        className="drop-down-option"
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          textDecoration: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
         <MdOutlineRunningWithErrors size={"16px"} style={{marginRight: '5px'}}/>
        Check Inconsistencies
      </button>
    </div>
  );
}

export default ContextMenu;
