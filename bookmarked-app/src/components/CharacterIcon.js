import React from 'react'
import '../pages/Glossary/Glossary.css'
import RoundedRectangle from './RoundedRectangle'
import ThreeDotsIcon from './ThreeDotsIcon'
import { Link } from 'react-router-dom';

const CharacterIcon = ({ name, id, iconImage}) => {
    const characterPagePath = `/glossary/${encodeURIComponent(id)}`;

    const handleThreeDotsClick = () => {
        console.log("clicked");
    }
    return (
        <Link className='no-underline' to={characterPagePath}>
            <div className="character-icon-container">
                <RoundedRectangle>
                    <ThreeDotsIcon onClick={handleThreeDotsClick}/>
                    <img src={require(`../images/${iconImage}`)} className="character-image" alt={`${name} icon`}/>
                </RoundedRectangle>
                <h3 className="character-name">{name}</h3>
            </div>
        </Link>
        
    )
}
export default CharacterIcon