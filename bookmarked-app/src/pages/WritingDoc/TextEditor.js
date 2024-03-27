import { useCallback, useState } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css';
import './WritingDoc.css'
import ContextMenu from '../../components/ContextMenu';

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
]


export default function TextEditor({ isEditorMoved, onClickFindShortcut, setHighlightedText }) {
    const [contextMenuPos, setContextMenuPos] = useState({x:0, y:0});
    const [showContextMenu, setShowContextMenu] = useState(false);

    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return;
        
        wrapper.innerHTML = ''
        const editor = document.createElement("div")
        wrapper.append(editor)
        const quill = new Quill (editor, {theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS} })

        quill.on('selection-change', function(range) {
            if(range) {
                const highlightedSelection = quill.getText(range.index, range.length)
                setHighlightedText(highlightedSelection)
                console.log('selection change:', highlightedSelection);
                const bounds = quill.getBounds(range.index, range.length);
                setContextMenuPos({x:bounds.left, y:bounds.bottom});
            } else {
                console.log('no selection');
                setShowContextMenu(false);
            }
        });

        editor.addEventListener('contextmenu', handleRightClick);
        editor.addEventListener('mousedown', handleMouseDown);

    }, []);

    const handleRightClick = (e) => {
        e.preventDefault();
        setShowContextMenu(true);
        setContextMenuPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = (e) => {
        if (e.button !== 2) { 
            setShowContextMenu(false);
        }
    };

    const handleCloseContextMenu = () => {
        console.log("closing")
        setShowContextMenu(false);
    }

    const editorClass = isEditorMoved ? "container editor-moved" : "container";

    return (
        <div className={editorClass} ref = {wrapperRef}>
            {showContextMenu && (
                <ContextMenu x={contextMenuPos.x} y={contextMenuPos.y} onClose={handleCloseContextMenu} onClickFindShortcut={onClickFindShortcut}/>
            )}
        </div>
    );
    
}