import React from 'react'
import './Character.css'
import Navbar from '../../components/Navbar';
import { useParams } from 'react-router-dom';

const Character = () => {
    let { characterName } = useParams(); // This hooks extracts params from the URL
    characterName = decodeURIComponent(characterName); 

    return (
        <div>
            <Navbar />
            <div className='big-rounded-rectangle'>
            <h1>{characterName}</h1>
            </div>
            
            
        </div>
    )
}
export default Character