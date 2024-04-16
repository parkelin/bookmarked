import {React, useState, useEffect} from 'react'
import { useCharacters} from '../context/CharacterContext';
import { Link, useHistory } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import '../pages/Glossary/Glossary.css'

const ThreeDotsIcon = ({id}) => {
    const {removeCharacter}  = useCharacters();
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleEdit = () => {
        const characterPagePath = `/glossary/${encodeURIComponent(id)}`;
        history.push(characterPagePath);
        console.log("edit");
    }
    const handleDelete = () => {
        removeCharacter(id); 
        console.log("delete");
    }
    const handleIconClick = (e) => {
        e.stopPropagation();
        console.log("3 dots")
        toggleDropdown();
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen) {
                setIsOpen(false);
            }
        };
        // when the dropdown is open, any clicks closes it
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="three-dots">
            <BsThreeDotsVertical size={"23px"}
                onClick={handleIconClick}
                style={{ cursor: 'pointer' }}
            />
            {isOpen && (
                <div className="dropdown-container">
                    {/* <button onClick={handleEdit}>Edit</button> */}
                    <button style={{background: 'none', cursor: 'pointer', border: 'none', fontFamily: 'DM Sans'}}onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
      );
};
export default ThreeDotsIcon