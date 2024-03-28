import React from 'react'
import '../pages/Glossary/Glossary.css'
import RoundedRectangle from './RoundedRectangle'
import ThreeDotsIcon from './ThreeDotsIcon'
import { Link } from 'react-router-dom';

const CharacterIcon = ({ name, id, iconImage}) => {
    const characterPagePath = `/glossary/${encodeURIComponent(id)}`;

    const handleRectangleClick = () => {
        console.log("rectangle");
    }
    const handleThreeDotsClick = () => {
        console.log("clicked");
    }
    return (
        <div className="character-icon-container">
        <div className="bigger-rectangle">
            <ThreeDotsIcon onClick={handleThreeDotsClick} />
            <Link className='no-underline' to={characterPagePath}>
                <RoundedRectangle
                    onRectangleClick={handleRectangleClick}
                >
                    <img src={require(`../images/${iconImage}`)} className="character-image" alt={`${name} icon`} />
                </RoundedRectangle>
            </Link>
        </div>
        <h3 className="character-name">{name}</h3>
        
        
    </div>
        
    )
}
export default CharacterIcon