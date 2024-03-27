import React from 'react'
import '../pages/Glossary/Glossary.css'
import ThreeDotsIcon from './ThreeDotsIcon'

const RoundedRectangle = ({ onRectangleClick, onThreeDotsClick, children }) => {
    return (
        <div className="rounded-rectangle" onClick={onRectangleClick}>
            <div className="rectangle-content">
                {children}
            </div>
            <div className="3-dots" onClick={onThreeDotsClick}>
                <ThreeDotsIcon onClick={onThreeDotsClick}/>
            </div>  
         </div>        
    )
}

export default RoundedRectangle