import React, { useState } from 'react';
import '../pages/Glossary/Glossary.css'
import RoundedRectangle from './RoundedRectangle'
import ThreeDotsIcon from './ThreeDotsIcon'
import { Link } from 'react-router-dom';

const CharacterIcon = ({ character }) => {
    const characterPagePath = `/glossary/${character.id}`;
    
    return (
        <div className="character-icon-container">
            <div className="bigger-rectangle">
                <ThreeDotsIcon id={character.id}/>
                    <Link className="no-underline" to={characterPagePath}>
                        <RoundedRectangle>
                            <img
                                src={require(`../images/${character.image}`)}
                                className="character-image"
                                alt={`${character.name} icon`}
                            />
                        </RoundedRectangle>
                    </Link>
            
            </div>
            <h3 className="character-name">{character.name}</h3>
        </div>
    )
}
export default CharacterIcon