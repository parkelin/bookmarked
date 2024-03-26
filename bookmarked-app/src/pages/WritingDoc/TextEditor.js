import { useCallback } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css';
import './WritingDoc.css'

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

    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return;
        
        wrapper.innerHTML = ''
        const editor = document.createElement("div")
        wrapper.append(editor)
        const quill = new Quill (editor, {theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS} })

    
        // Function to show the custom context menu
        function showContextMenu(x, y) {
            const editorBounds = editor.getBoundingClientRect();
            console.log('showing menu:',x,y);
            const contextMenu = document.createElement('div');
            contextMenu.className = 'context-menu';
            contextMenu.innerHTML = `
                <ul>
                    <li>Edit</li>
                    <li>Learn More</li>
                </ul>
            `;
            contextMenu.style.left = (x - editorBounds.left) + 'px';
            contextMenu.style.top = (y - editorBounds.top) + 'px';
            document.body.appendChild(contextMenu);
        }

        quill.on('selection-change', function(range) {
            if(range) {
                const selection = quill.getText(range.index, range.length)
                console.log('selection change:', selection);
                const bounds = quill.getBounds(range.index, range.length);
                showContextMenu(bounds.left, bounds.bottom);
            } else {
                console.log('no selection');
                hideContextMenu();
            }
        });

        // Function to hide the context menu
        function hideContextMenu() {
            const contextMenu = document.querySelector('.context-menu');
            if (contextMenu) {
                contextMenu.parentNode.removeChild(contextMenu);
            }
        }
        
    }, []);
    return <div className="container" ref = {wrapperRef}></div>
    
}