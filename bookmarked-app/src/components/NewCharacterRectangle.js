import React from 'react'
import { Link } from 'react-router-dom';
import RoundedRectangle from './RoundedRectangle'
import PlusSign from './PlusSign'

const NewCharacterRectangle = ({ newId }) => {
    const characterPagePath = `/glossary/${encodeURIComponent(newId)}`

    return (
        <div>
            <Link to={characterPagePath} className='no-underline'>
                <RoundedRectangle>
                    <PlusSign />
                </RoundedRectangle>
            </Link>
        </div>
    )
}
export default NewCharacterRectangle