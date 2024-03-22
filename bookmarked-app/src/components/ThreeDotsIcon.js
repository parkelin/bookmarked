import React from 'react'
import '../pages/Glossary/Glossary.css'

const ThreeDotsIcon = ( {onClick } ) => {
    return (
        <div className="three-dots">
            <img src={require(`../images/ThreeDots.png`)} alt={"three dots icon"}/>
        </div>
      );
}
export default ThreeDotsIcon