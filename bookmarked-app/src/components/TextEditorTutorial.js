import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import ContextMenu from "../components/ContextMenu.js"

import "react-quill/dist/quill.snow.css";
import "../pages/WritingDoc/WritingDoc.css";

const TextEditorTutorial = () => {
  const [text, setText] = useState("");
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const quillRef = useRef(null);

  const handleChange = (content) => {
    setText(content);
  };

  const handleSelectionChange = (range) => {
    if (range && range.length > 0) {
      const quill = quillRef.current.getEditor();
      const bounds = quill.getBounds(range.index, range.length);
      setShowContextMenu(true);
      setContextMenuPos({ x: bounds.left, y: bounds.top });
    } else {
      setShowContextMenu(false);
    }
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    const quill = quillRef.current.getEditor();
    const range = quill.getSelection();
    if (range && range.length > 0) {
      setShowContextMenu(true);
      setContextMenuPos({ x: event.clientX, y: event.clientY });
    }
  };

  const handleCloseContextMenu = () => {
    setShowContextMenu(false);
  };

  return (
    <div className="container"  onContextMenu={handleRightClick}>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={text}
        onChange={handleChange}
        onSelectionChange={handleSelectionChange}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            [{ align: [] }],
            ["image", "blockquote", "code-block"],
            ["clean"],
          ]
        }}
      />
      {showContextMenu && (
        <ContextMenu
          x={contextMenuPos.x}
          y={contextMenuPos.y}
          onClose={handleCloseContextMenu}
          onClickFindShortcut={() => {}}
          onClickCreateShortcut={() => {}}
          onClickCheckInconsistencies={() => {}}
        />
      )}
    </div>
  );
};

export default TextEditorTutorial;
