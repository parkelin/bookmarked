import { useState, useCallback } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css';
import './WritingDoc.css'
import { useCharacters } from '../Character/CharacterContext';
import Navbar from '../../components/Navbar';



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


const TextEditor = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const [isEditorMoved, setIsEditorMoved] = useState(false); // State for editor movement
    const { characters } = useCharacters(); // Get characters from context

    const handleSearch = () => {
        const character = characters.find(char => char.characterName.toLowerCase() === searchTerm.toLowerCase());
        if (character) {
            // Do something when character found
            // For now, log the character data
            console.log(character);
            // TODO: need to add navbar collapse 
            // TODO: need to push writing doc to left
            // TODO: need to pull up popup from character
            setIsEditorMoved(true);

        } else {
            // Character not found, handle this case
            console.log("Character not found");
        }
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const wrapperRef = (wrapper) => {
        if (wrapper == null) return;
        wrapper.innerHTML = '';
        const editor = document.createElement("div");
        wrapper.append(editor);
        new Quill(editor, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } });
    };

    return (
        <div className={`container ${isEditorMoved ? 'left' : ''}`}>
            <div className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Enter character name"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div ref={wrapperRef}></div>
        </div>
    );
};

export default TextEditor;