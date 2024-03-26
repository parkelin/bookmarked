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


export default function TextEditor() {
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
                const selection = quill.getText(range.index, range.length)
                console.log('selection change:', selection);
                const bounds = quill.getBounds(range.index, range.length);
                setContextMenuPos({x:bounds.left, y:bounds.bottom});
            } else {
                console.log('no selection');
                setShowContextMenu(false);
            }
        });

        editor.addEventListener('contextmenu', handleRightClick);

    }, []);

    const handleRightClick = (e) => {
        e.preventDefault();
        setShowContextMenu(true);
        setContextMenuPos({ x: e.clientX, y: e.clientY });
    };

    const handleCloseContextMenu = () => {
        setShowContextMenu(false);
    }

    return (
        <div className="container" ref={wrapperRef}>
            {showContextMenu && (
                <ContextMenu x={contextMenuPos.x} y={contextMenuPos.y} onClose={handleCloseContextMenu} />
            )}
        </div>
    );
    
}