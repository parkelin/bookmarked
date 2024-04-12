import { useCallback, useState, useRef, useEffect} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./WritingDoc.css";
import ContextMenu from "../../components/ContextMenu";
import { useEditor } from "../../context/EditorContext"; 
import getInconsistency from "../../openai.js"
import { useCharacters } from '../../context/CharacterContext';
import debounce from 'lodash/debounce'; // Import debounce function

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

export default function TextEditor({
  isEditorMoved,
  onClickFindShortcut,
  highlightedText,
  setHighlightedText,
  onClickCreateShortcut,
  setEditorContent,
  handleCheckInconsistencies
}) {
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
  const [showContextMenu, setShowContextMenu] = useState(false);
  const { editorContent, saveEditorContent} = useEditor(); 
  // const [highlightedText, setInternalHighlightedText] = useState(""); // elin
  const editorRef = useRef(null);
  const cursorPositionRef = useRef(null); // Reference to store cursor position
  const { characters } = useCharacters();
  
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;
    
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const quill = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
    });

    editorRef.current = quill;
    console.log("set selction 1");

    if (editorContent) {
      console.log(editorContent);
      quill.setText(editorContent);
    }
    
    quill.on("selection-change", function (range) {
      if (range && range.length>1) {
        console.log("range", range)
        const highlightedSelection = quill.getText(range.index, range.length);
        setHighlightedText(highlightedSelection);
        console.log("selection change:", highlightedSelection); 
        const bounds = quill.getBounds(range.index, range.length);
        setContextMenuPos({ x: bounds.left, y: bounds.bottom });
      } else {
        console.log("no selection");
        setShowContextMenu(false);
      }
    });
    
    editor.addEventListener("contextmenu", handleRightClick);
    editor.addEventListener("mousedown", handleMouseDown);

    quill.on("text-change", function () {
    // Debounced text change handler
      const handleTextChangeDebounced = debounce(() => {
        const editorContent = quill.getText();
        setEditorContent(editorContent); // Update editor content
        // Save editor content to database
        // saveEditorContent(editorContent);
        // updateCursorPosition(quill.getSelection());
      }, 1000); // Adjust debounce delay as needed

    quill.on("text-change", () => {
      handleTextChangeDebounced();
      updateCursorPosition(quill.getSelection());
    });

  }, [setEditorContent, setHighlightedText, editorContent]);

  }, [setEditorContent, setHighlightedText, editorContent]);

  useEffect(() => {
    // Focus the editor after content is saved
    editorRef.current.focus();
    if (cursorPositionRef.current !== null) {
      editorRef.current.setSelection(cursorPositionRef.current.index, cursorPositionRef.current.length);
    }

  }, [editorContent]);

  const updateCursorPosition = (selection) => {
    cursorPositionRef.current = selection;
  };

  const handleSendToChatGPT = async () => {

      // Payload including the highlighted text and character profiles
      const payload = {
          highlightedText: highlightedText, // highlightedText should be the state or prop holding the text selected by the user
          characters: characters,
      };

      console.log("payload: ", payload);

      // Send the payload to the backend and wait for the response
      const response = await getInconsistency(payload)
      console.log("response from texteditor.js: ", response);
      // Process the response (e.g., alert the user, display a modal, etc.)
      if (response) {
          console.log("Response from backend:", response);
          // if (response.message === "None Found") // Replace 
          handleCheckInconsistencies(response);
      }

  };
  
  const handleRightClick = (e) => {
    const quill = editorRef.current;
    const editorBound = quill.root.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    if (
      mouseX >= editorBound.left && mouseX <= editorBound.right &&
      mouseY <= editorBound.bottom &&  mouseY >= editorBound.top
    ) {
      e.preventDefault();
      const range = quill.getSelection();
      if (range && range.length > 0) {
        setShowContextMenu(true);
        setContextMenuPos({ x: e.clientX, y: e.clientY });
      }
    } else {
      setShowContextMenu(false);
    }
  };

  const handleMouseDown = (e) => {
    if (e.button !== 2) {
      setShowContextMenu(false);
    }
  };

  const handleCloseContextMenu = () => {
    console.log("closing");
    setShowContextMenu(false);
  };

  const editorClass = isEditorMoved ? "container editor-moved" : "container";

  return (
    <div className={editorClass} ref={wrapperRef}>
      {showContextMenu && (
        <ContextMenu
          x={contextMenuPos.x}
          y={contextMenuPos.y}
          onClose={handleCloseContextMenu}
          onClickFindShortcut={onClickFindShortcut}
          onClickCreateShortcut={onClickCreateShortcut}
          onClickCheckInconsistencies={handleSendToChatGPT} // elin
        />
      )}
    </div>
  );
}
