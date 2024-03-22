import React from 'react'
import '../pages/Glossary/Glossary.css'
import RoundedRectangle from './RoundedRectangle'
import ThreeDotsIcon from './ThreeDotsIcon'
import { Link } from 'react-router-dom';

const CharacterIcon = ({ name, iconImage, onClick }) => {
    const characterPagePath = `/glossary/${encodeURIComponent(name)}`
    return (
        <Link to={characterPagePath} className="character-icon-container">
            <div className="character-icon-container">
                <RoundedRectangle onClick={onClick}>
                    <ThreeDotsIcon />
                    <img src={require(`../images/${iconImage}`)} className="character-image" alt={`${name} icon`}/>
                </RoundedRectangle>
                <h3 className="character-name">{name}</h3>
            </div>
        </Link>
        
    )
}
export default CharacterIcon