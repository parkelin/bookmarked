import React from 'react'
import '../pages/Glossary/Glossary.css'

const RoundedRectangle = ({ onClick, children }) => {
    return (
        <div className="rounded-rectangle" onClick={onClick}>
                {children}
         </div>        
    )
}

export default RoundedRectangle