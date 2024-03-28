import React, { useState } from 'react';
import '../pages/Glossary/Glossary.css'
import RoundedRectangle from './RoundedRectangle'
import ThreeDotsIcon from './ThreeDotsIcon'
import { Link } from 'react-router-dom';

const CharacterIcon = ({ name, id, iconImage}) => {
    const characterPagePath = `/glossary/${encodeURIComponent(id)}`;
    
    return (
        <div className="character-icon-container">
            <div className="bigger-rectangle">
                <ThreeDotsIcon id={id}/>
                    <Link className="no-underline" to={characterPagePath}>
                        <RoundedRectangle>
                            <img
                                src={require(`../images/${iconImage}`)}
                                className="character-image"
                                alt={`${name} icon`}
                            />
                        </RoundedRectangle>
                    </Link>
            
            </div>
            <h3 className="character-name">{name}</h3>
        </div>
    )
}
export default CharacterIcon