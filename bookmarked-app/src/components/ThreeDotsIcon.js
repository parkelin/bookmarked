import {React, useState} from 'react'
import '../pages/Glossary/Glossary.css'

const ThreeDotsIcon = ( { onEdit, onDelete, onClick} ) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleEdit = () => {
        console.log("edit");
        if(onEdit) {
            onEdit();
        }
        setIsOpen(false);
    }
    const handleDelete = () => {
        console.log("delete");
        if(onDelete) {
            onDelete();
        }
        setIsOpen(false);
    }
    const handleIconClick = (e) => {
        e.stopPropagation();
        console.log("3 dots")
        toggleDropdown();
        if(onClick) {
            onClick();
        }
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