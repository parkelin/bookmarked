import React from 'react'
import '../pages/Glossary/Glossary.css'

const RoundedRectangle = ({ onRectangleClick, children }) => {
    return (
        <div className="rounded-rectangle" onClick={onRectangleClick}>
            <div className="rectangle-content">
                {children}
            </div> 
         </div>        
    )
}

export default RoundedRectangle