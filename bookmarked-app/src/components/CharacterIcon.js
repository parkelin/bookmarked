import React from 'react'
import '../pages/Glossary/Glossary.css'
import RoundedRectangle from './RoundedRectangle'
import ThreeDotsIcon from './ThreeDotsIcon'

const CharacterIcon = ({ name, iconImage, onClick }) => {
    return (
        <div className="character-icon-container">
            <RoundedRectangle>
                <ThreeDotsIcon />
                <img src={require(`../images/${iconImage}`)} className="character-image" alt={`${name} icon`}/>
            </RoundedRectangle>
            <h3 className="character-name">{name}</h3>
        </div>
    )
}
export default CharacterIcon