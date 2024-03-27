import {React, useState} from 'react'
import '../pages/Glossary/Glossary.css'

const ThreeDotsIcon = ( { onClick } ) => {
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

    return (
        <div className="three-dots">
            <img src={require(`../images/ThreeDots.png`)}
                 alt={"three dots icon"}
                 onClick={toggleDropdown}
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