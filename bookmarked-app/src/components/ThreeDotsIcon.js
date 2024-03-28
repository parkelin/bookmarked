import {React, useState} from 'react'
import { useCharacters} from '../pages/Character/CharacterContext';
import '../pages/Glossary/Glossary.css'

const ThreeDotsIcon = ({id}) => {
    const {removeCharacter}  = useCharacters();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleEdit = () => {
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

    return (
        <div className="three-dots">
            <img src={require(`../images/ThreeDots.png`)}
                 alt={"three dots icon"}
                 onClick={handleIconClick}
            />
            {isOpen && (
                <div className="dropdown">
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
      );
};
export default ThreeDotsIcon