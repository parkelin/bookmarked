import React, { useEffect, useState } from 'react';
import '../pages/Glossary/Glossary.css'
import RoundedRectangle from './RoundedRectangle'
import ThreeDotsIcon from './ThreeDotsIcon'
import { Link } from 'react-router-dom';
import { useCharacters } from "../context/CharacterContext"

const CharacterIcon = ({ character }) => {
    const { getCharacterPhoto } = useCharacters();
    const [characterImageUrl, setCharacterImageUrl] = useState(null);

    useEffect(() => {
        if (character.image !== 'EmptyImageIcon.png') {
            getCharacterPhoto(character).then(url => {
                setCharacterImageUrl(url);
            }).catch(error => {
                console.error("Error fetching character photo URL:", error);
            });
        }
    }, [character, getCharacterPhoto]);

    const characterPagePath = `/glossary/${character.id}`;
    
    return (
        <div className="character-icon-container">
            <div className="bigger-rectangle">
                <ThreeDotsIcon id={character.id}/>
                    <Link className="no-underline" to={characterPagePath}>
                        <RoundedRectangle>
                            { character.image === 'EmptyImageIcon.png' ? (
                                <img
                                src={require(`../images/${character.image}`)}
                                className="character-image"
                                alt={`${character.name} icon`}
                                />
                            ): (
                                <img
                                src={characterImageUrl}
                                className="character-image"
                                alt={`${character.name} icon`}
                                />
                            )}
                            
                        </RoundedRectangle>
                    </Link>
            
            </div>
            <h3 className="character-name">{character.name}</h3>
        </div>
    )
}
export default CharacterIcon