import {React, useState} from 'react'
import '../pages/Glossary/Glossary.css'

const ThreeDotsIcon = ( {onClick} ) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const handleEdit = () => {
        console.log("edit");
    }
    const handleDelete = () => {
        console.log("delete");
    }
    const handleIconClick = (e) => {
        e.stopPropagation();
        console.log("3 dots")
        toggleDropdown();
    }

    const handleDropdownClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="three-dots" onClick={handleDropdownClick}>
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