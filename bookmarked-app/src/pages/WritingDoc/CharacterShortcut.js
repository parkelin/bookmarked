import React from 'react';
import { Link } from "react-router-dom";
import { CiMaximize1 } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import '../Character/Character.css'
import './WritingDoc.css'

const CharacterShortcut = ({ handleCloseShortcut, characterData }) => {
    return (
    <div className='shortcut-rounded-rectangle'>  
        <button className='small-close' onClick={handleCloseShortcut} style={{ border: 'none', color: '#000', background: 'none', cursor: 'pointer'}}><CgClose size={'23px'}/></button>
        <Link className='full-screen' to={`/glossary/${characterData.id}`} >
            <CiMaximize1 size={'21px'} style={{ border: 'none', color: '#000', background: 'none', cursor: 'pointer' }}/>
        </Link>
        <div className='small-character-main-info'>
            <div className='small-rounded-rectangle'>
                <img
                  src={require(`../../images/${characterData.image}`)}
                  className="character-image-big"
                  alt={`${characterData.name} icon`}
                />
            </div>
            <div className="character-heading-text">
                <h1 className="character-name-small">{characterData.name}</h1>
                <h3 className="caption-small">{characterData.caption}</h3>
            </div>
        </div>
        <div className="character-description-section-small">
              <p className="character-description-small">
                {characterData.description}
              </p>
        </div>
        <div className="divider-small" />
    </div>
    )
}
export default CharacterShortcut